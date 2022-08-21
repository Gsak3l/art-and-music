<template>
  <AppTechnicalBody/>
  <AppTechnicalPopups/>
</template>

<script>
import AppTechnicalBody from "@/components/technical/AppTechnicalBody";
import AppTechnicalPopups from "@/components/technical/AppTechnicalPopups";

export default {
  name: "AppTechnical",
  components: {AppTechnicalPopups, AppTechnicalBody}
}
</script>

<style scoped>

</style>