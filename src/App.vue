<template>
  <AppHeader/>
  <router-view></router-view>
  <AppFooter/>
</template>

<script>
import AppHeader from "@/components/AppNavigation";
import AppFooter from "@/components/AppFooter";

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

