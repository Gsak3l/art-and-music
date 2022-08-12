<template>
  <AppRepairsBody/>
  <AppRepairPopups/>
</template>

<script>
import AppRepairsBody from "@/components/repairs/AppRepairsBody";
import AppRepairPopups from "@/components/repairs/AppRepairPopups";
export default {
  name: "AppRepairs",
  components: {AppRepairPopups, AppRepairsBody}
}
</script>

<style scoped>

</style>