<template>



  <form name="contactForm" action="/success" method="post">
    <input type="hidden" name="form-name" value="contactForm"/>

    <input type="email" name="email" placeholder="email address">

  </form>

</template>

<script>
export default {
  name: "AppContactTest"
}
</script>

<style scoped>

</style>