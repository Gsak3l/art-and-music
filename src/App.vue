<template>
  <AppHeader/>
  <AppCookieConsent/>
  <router-view></router-view>
  <AppFooter/>
</template>

<script>
import AppHeader from "@/layouts/AppNavigation";
import AppFooter from "@/layouts/AppFooter";
import AppCookieConsent from "@/layouts/AppCookieConsent";

export default {
  name: "App",
  components: {
    AppCookieConsent,
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
</style>
