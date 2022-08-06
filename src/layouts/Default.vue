<template>
  <div class="layout">
    <Navigation/>
    <slot/>
    <Footer/>
  </div>
</template>

<static-query>
query {
metadata {
    siteName
  }
}
</static-query>

<style>

</style>
<script>
import Navigation from "./Navigation";
import Footer from "./Footer";
export default {
  components: {Footer, Navigation}
}
</script>