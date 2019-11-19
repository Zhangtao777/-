<template>
    <div class="middle3-root">
        <div></div>
    </div>
</template>
<script>
export default {
    mounted(){
        this.$store.commit("setIs",false)
        Object.freeze()
    }
}
</script>
<style scoped>
    .middle3-root{
        
    }
</style>