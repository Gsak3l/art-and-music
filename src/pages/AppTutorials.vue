<template>
  <AppTutorialsBody/>
  <AppTutorialsPopups/>

</template>

<script>
import AppTutorialsBody from "@/components/tutorials/AppTutorialsBody";
import AppTutorialsPopups from "@/components/tutorials/AppTutorialsPopups";

export default {
  name: "AppTutorials",
  components: {AppTutorialsPopups, AppTutorialsBody}
}
</script>

<style scoped>

</style>