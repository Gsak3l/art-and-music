<template>



  <form name="contactForm" action="/success" method="post">
    <input type="hidden" name="form-name" value="contactForm"/>

    <input type="email" name="email" placeholder="email address">
    <button type="submit">αποστολη</button>
  </form>

</template>

<script>
export default {
  name: "AppContactTest"
}
</script>

<style scoped>

</style>