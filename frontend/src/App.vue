<template>
    <div class="nk-app-root ">
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>

export default {
    name: 'App',
    mounted() {
        document.body.classList.add('nk-body', 'npc-invest', 'bg-lighter')
    }
}
</script>