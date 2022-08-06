<template>
  <Layout>
    <AppSlider/>
    <AppAbout/>
    <AppNew/>
    <AppUsed/>
    <AppParts/>
    <AppContact/>
  </Layout>
</template>

<script>

import AppAbout from "../components/home/AppAbout";
import AppNew from "../components/home/AppNew";
import AppUsed from "../components/home/AppUsed";
import AppParts from "../components/home/AppParts";
import AppContact from "../components/home/AppContact";
import AppSlider from "../components/home/AppSlider";

export default {
  components: {
    AppSlider,
    AppContact,
    AppAbout,
    AppNew,
    AppUsed,
    AppParts,
  },
  metaInfo: {
    title: 'Λαμπρινίδης Δημήτρης'
  }
}

</script>

<style>

</style>
