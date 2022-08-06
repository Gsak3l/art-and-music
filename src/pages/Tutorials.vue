<template>
  <Layout>
    <AppTutorials/>
    <AppTutorialPopups/>

  </Layout>
</template>

<script>
import AppTutorials from "../components/tutorials/AppTutorials";
import AppTutorialPopups from "../components/tutorials/AppTutorialPopups";
export default {
  name: "tutorials",
  components: {AppTutorialPopups, AppTutorials},
  metaInfo: {
    title: 'Οδηγίες'
  }
}
</script>

<style scoped>

</style>