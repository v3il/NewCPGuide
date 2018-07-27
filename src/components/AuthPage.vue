<template>

</template>

<script>
    export default {
        name: "AuthPage",

        created() {
            sessionStorage.setItem("ncpg-is-admin", "1");
            this.$router.push("/");
        }
    }
</script>

<style scoped>

</style>
