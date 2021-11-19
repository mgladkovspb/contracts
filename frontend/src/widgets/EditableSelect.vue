<template>
    <div class="form-control-wrap">
        <select class="form-select select2-hidden-accessible">
            <option value="default_option">Default Option</option>
            <option value="option_select_name">Option select name</option>
            <option value="option_select_name">Option select name</option>
        </select>
        <span class="select2 select2-container select2-container--default select2-container--below select2-container--focus" style="width: 145px;">
            <span class="selection">
                <span class="select2-selection select2-selection--single" role="combobox">
                    <span class="select2-selection__rendered" title="Default Option">Default Option</span>
                    <span class="select2-selection__arrow"></span>
                </span>
            </span>
            <span class="dropdown-wrapper" aria-hidden="true"></span>
        </span>
    </div>
</template>

<script>
export default {
    name: 'EditableSelect'
}
</script>