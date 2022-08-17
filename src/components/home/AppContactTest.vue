<template>



  <form name="contactForm" action="/success" method="post">
    <input type="hidden" name="contact" value="contactForm"/>

<!--    <input name="Όνομα" type="name" placeholder="Όνομα *">-->
<!--    <input name="Επώνυμο" type="surname" placeholder="Επώνυμο *">-->
    <input type="Email" name="email" placeholder="Email *">
    <button id="sendMessageButton" type="submit">αποστολη</button>

  </form>

</template>

<script>
export default {
  name: "AppContactTest"
}
</script>

<style scoped>

</style>