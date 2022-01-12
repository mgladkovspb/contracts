<template>
    <div class="nk-app-root ">
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'App',
    methods: {
        switchDayNightMode() {
            const hour = moment().hour()
            if(hour > 6 && hour < 18) {
                document.body.classList.remove('dark-mode')
            } else {
                document.body.classList.add('dark-mode')
            }
        }
    },
    mounted() {
        document.body.classList.add('nk-body', 'npc-invest', 'bg-lighter')
        this.switchDayNightMode()
        setInterval(this.switchDayNightMode(), 1000 * 60)
    }
}
</script>