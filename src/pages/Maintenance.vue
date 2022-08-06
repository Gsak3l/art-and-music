<template>
  <Layout>
    <AppMaintenance/>
    <AppMaintenancePopups/>
  </Layout>
</template>

<script>
import AppMaintenance from "../components/maintenance/AppMaintenance";
import AppMaintenancePopups from "../components/maintenance/AppMaintenancePopups";

export default {
  name: "Maintenance",
  components: {AppMaintenance, AppMaintenancePopups},
  metaInfo: {
    title: 'Συντήρηση'
  }
}
</script>

<style scoped>

</style>