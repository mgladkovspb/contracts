<template>
    <div id="app">
        <page-loader></page-loader>
        <router-view/>
    </div>
</template>

<script>
import PageLoader from '@/widgets/PageLoader.vue'
export default {
    name: 'App',
    components: {
        PageLoader
    }
}
</script>