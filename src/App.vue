<template>
  <AppHeader/>
  <router-view></router-view>
  <AppFooter/>
</template>

<script>
import AppHeader from "@/layouts/AppNavigation";
import AppFooter from "@/layouts/AppFooter";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>

</style>

