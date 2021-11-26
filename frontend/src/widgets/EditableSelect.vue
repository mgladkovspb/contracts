<template>
    <div class="form-control-wrap">
        <input type="text" 
            @focus="focus = true"
            @blur="onBlur"
            v-model="result" 
            class="form-control" 
            placeholder="Введите название">
        <div class="dropdown-menu" :class="{ show: listVisibility }" style="width: 100%; max-height: 150px; overflow: auto; ">
            <ul class="link-list-plain no-bdr" >
                <li @click.stop="result = option" v-for="(option, index) in filteredOtions" :key="index">
                    <a href="javascript:void(0)">{{ option }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EditableSelect',
    data() {
        return {
            focus: false,
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
        listVisibility() {
            return this.focus && this.filteredOtions.length > 0
        },
        filteredOtions() {
            const regex = new RegExp(this.result, 'giu')
            if(this.result) {
                return this.options.filter(item => regex.test(item))
            } else {
                return [...this.options]
            }
        }
    },
    methods: {
        onBlur() {
            setTimeout(() => this.focus = false, 150)
        }
    }
}
</script>