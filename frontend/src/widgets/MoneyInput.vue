<template>
    <div class="form-control-wrap">
        <div class="input-group">
            <input type="number" class="form-control" v-model="result" placeholder="0.00" :disabled="disabled">
            <div class="input-group-append">
                <span class="input-group-text">&#8381;</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['value', 'disabled'],
    data () {
        return {
            content: this.value
        }
    },
    computed: {
        result: {
            get() { 
                return this.value
            },
            set(value) { 
                this.$emit('input', parseFloat(value)) 
            }
        }
    }

}
</script>