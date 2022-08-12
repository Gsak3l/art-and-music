<template>
  <div class="layout">
    <Navigation/>
    <slot></slot>
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

// window.dataLayer = window.dataLayer || [];
//
// function gtag() {
//   dataLayer.push(arguments);
// }
//
// gtag('js', new Date());
//
// gtag('config', 'UA-159914484-1');

</script>