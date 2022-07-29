<template>
  <AppSlider/>
  <AppAbout/>
  <AppNew/>
  <AppUsed/>
  <AppParts/>
  <AppContact/>
</template>

<script>
import AppAbout from "@/components/home/AppAbout";
import AppNew from "@/components/home/AppNew";
import AppUsed from "@/components/home/AppUsed";
import AppParts from "@/components/home/AppParts";
import AppContact from "@/components/home/AppContact";
import AppSlider from "@/components/home/AppSlider";

export default {
  name: "AppHome",
  components: {
    AppSlider,
    AppContact,
    AppAbout,
    AppNew,
    AppUsed,
    AppParts,

  },
}
</script>

<style scoped>

</style>