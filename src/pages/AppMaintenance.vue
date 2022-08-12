<template>
  <AppMaintenanceBody/>
  <AppMaintenancePopups/>

</template>

<script>

import AppMaintenanceBody from "@/components/maintenance/AppMaintenanceBody";
import AppMaintenancePopups from "@/components/maintenance/AppMaintenancePopups";

export default {
  name: "AppMaintenance",
  components: {AppMaintenancePopups, AppMaintenanceBody}
}
</script>

<style scoped>

</style>