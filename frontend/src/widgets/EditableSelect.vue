<template>
    <div class="form-control-wrap">
        <select class="form-select select2-hidden-accessible" data-select2-id="3" tabindex="-1" aria-hidden="true">
            <option value="default_option" data-select2-id="5">Default Option</option>
            <option value="option_select_name" data-select2-id="37">Option select name</option>
            <option value="option_select_name" data-select2-id="38">Option select name</option>
        </select>
        <span class="select2 select2-container select2-container--default select2-container--below select2-container--focus select2-container--open" dir="ltr" data-select2-id="4" style="width: 145px;">
            <span class="selection">
                <span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-rb7p-container">
                    <span class="select2-selection__rendered" id="select2-rb7p-container" role="textbox" aria-readonly="true" title="Default Option">Default Option</span>
                    <span class="select2-selection__arrow" role="presentation">
                        <b role="presentation"></b>
                    </span>
                </span>
            </span>
            <span class="dropdown-wrapper">
                <span class="select2-dropdown select2-dropdown--below" dir="ltr" style="width: 100%;">
                    <span class="select2-search select2-search--dropdown">
                        <input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" aria-controls="select2-aspz-results">
                    </span>
                    <span class="select2-results">
                        <ul class="select2-results__options" role="listbox" id="select2-aspz-results" aria-expanded="true" aria-hidden="false">
                            <li class="select2-results__option select2-results__option--highlighted" id="select2-aspz-result-f5q3-default_option" role="option" aria-selected="false" data-select2-id="select2-aspz-result-f5q3-default_option">Default Option</li>
                            <li class="select2-results__option" id="select2-aspz-result-g2fd-option_select_name" role="option" aria-selected="false" data-select2-id="select2-aspz-result-g2fd-option_select_name">Option select name</li>
                            <li class="select2-results__option" id="select2-aspz-result-1s67-option_select_name" role="option" aria-selected="false" data-select2-id="select2-aspz-result-1s67-option_select_name">Option select name</li>
                        </ul>
                    </span>
                </span>
            </span>
        </span>
    </div>
</template>

<script>
export default {
    name: 'EditableSelect'
}
</script>