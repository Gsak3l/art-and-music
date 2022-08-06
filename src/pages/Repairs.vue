<template>
  <Layout>
    <AppRepairs/>
    <AppRepairPopups/>
  </Layout>
</template>

<script>
import AppRepairPopups from "../components/repairs/AppRepairPopups";
import AppRepairs from "../components/repairs/AppRepairs";

export default {
  name: "Repairs",
  components: {AppRepairs, AppRepairPopups},
  metaInfo: {
    title: 'Επισκευές'
  }
}
</script>

<style scoped>

</style>