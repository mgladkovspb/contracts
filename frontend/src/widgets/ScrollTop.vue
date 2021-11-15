<template>
    <button class="btn btn-icon btn-primary scrollTopButton" @click="goTop" ref="goTopBtn">&nbsp;&nbsp;<em class="icon ni ni-arrow-up"></em>&nbsp;&nbsp;</button>
</template>

<script>
export default {
    name: 'ScrollTop',
    methods: {
        goTop() {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            })
        },
        scrollFn() {
            let goTopBtn = this.$refs.goTopBtn,
                display = 'none'

            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                display = 'block'
            } 

            if(goTopBtn) {
                goTopBtn.style.display = display
            }
        }
    },
    mounted() {
        window.onscroll = this.scrollFn;
    }
}
</script>

<style scoped>
.scrollTopButton {
  display: none; /* Hidden by default */
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
}
</style>