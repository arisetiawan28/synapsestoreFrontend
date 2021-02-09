<template>
  <div class="LoginPage">
    <login-store></login-store>
  </div>
</template>

<script>
    import LoginStore from "@/components/LoginStore.vue";

export default {
    name: "LoginPage",
    components: {
        LoginStore
    }

}
</script>

<style>

</style>