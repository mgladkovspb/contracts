<template>
    <div class="form-control-wrap">
        <span class="select2 select2-container select2-container--default select2-container--below" 
            :class="focus ? 'select2-container--focus select2-container--open' : ''">
            <span class="selection">
                <span class="select2-selection select2-selection--multiple" style="height: calc(2.125rem + 2px);">
                    <ul class="select2-selection__rendered" style="display: inline-block;">
                        <li class="select2-search select2-search--inline">
                            <input class="select2-search__field" 
                                type="search" 
                                :placeholder="value" 
                                style="width: 100%;"
                                v-model="search"
                                @focus="focus = true"
                                @blur="focus = false">
                        </li>
                    </ul>
                </span>
            </span>
            <span class="dropdown-wrapper">
                <span class="select2-dropdown select2-dropdown--below" dir="ltr" style="width: 100%;">
                    <span class="select2-results">
                        <ul class="select2-results__options">
                            <li class="select2-results__option" v-for="(option, index) in filteredOtions" :key="index">{{ option }}</li>
                            <!-- <li class="select2-results__option select2-results__option--highlighted" id="select2-aspz-result-f5q3-default_option" role="option" aria-selected="false" data-select2-id="select2-aspz-result-f5q3-default_option">Default Option</li>
                            <li class="select2-results__option" id="select2-aspz-result-g2fd-option_select_name" role="option" aria-selected="false" data-select2-id="select2-aspz-result-g2fd-option_select_name">Option select name</li>
                            <li class="select2-results__option" id="select2-aspz-result-1s67-option_select_name" role="option" aria-selected="false" data-select2-id="select2-aspz-result-1s67-option_select_name">Option select name</li> -->
                        </ul>
                    </span>
                </span>
            </span>
        </span>
    </div>
</template>

<script>
export default {
    name: 'EditableSelect',
    data() {
        return {
            focus: false,
            search: ''
        }
    },
    props: {
        value: String,
        options: Array
    },
    computed: {
        result: {
            get() { 
                return this.value
            },
            set(value) { 
                this.$emit('input', value) 
            }
        },
        filteredOtions() {
            const regex = new RegExp(this.search, 'giu')
            if(this.search) {
                return this.options.filter(item => regex.test(item))
            } else {
                return this.options
            }
        }
    }
}
</script>