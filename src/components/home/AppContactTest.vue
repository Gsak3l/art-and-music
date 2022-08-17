<template>


  <form name="contactForm" action="/success" method="post">
    <input type="hidden" name="form-name" value="contactForm"/>

    <input type="email" name="Email" placeholder="Email *" required>
    <textarea name="Μήνυμα" placeholder="Μήνυμα *" required></textarea>
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