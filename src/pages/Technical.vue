<template>
  <Layout>
    <AppTechnical/>
    <AppTechnicalPopups/>
  </Layout>
</template>

<script>
import AppTechnical from "../components/technical/AppTechnical";
import AppTechnicalPopups from "../components/technical/AppTechnicalPopups";

export default {
  name: "technical",
  components: {AppTechnicalPopups, AppTechnical},
  metaInfo: {
    title: 'Τεχνικά'
  }
}
</script>

<style scoped>

</style>