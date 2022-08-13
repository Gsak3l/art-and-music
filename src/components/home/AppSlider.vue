<template>

  <div class="slider">
    <header
        class="masthead"
        id="bg-image"
        style="background-image: url('assets/img/main_images/saxophoneBlurred.jpg');
        background-color: #000000;
        filter: blur(0px);
        background-size: cover;
        background-repeat: no-repeat;"
    >
      <div class="container">
        <div class="intro-text">
          <div class="intro-heading text-uppercase"><span>ART AND MUSIC</span></div>
          <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" role="button" href="#services"
             style="color: rgb(0, 0, 0)">μαθετε περισσοτερα</a>
        </div>
      </div>
    </header>
  </div>




</template>

<script>
export default {
  name: "AppSlider",
  data: function () {
    return {};
  },
  mounted() {
    const background_images = [
      'url("../assets/img/main_images/saxophone4k.jpg")',
      'url("../assets/img/main_images/saxophone-main.jpg")',
      'url("../assets/img/main_images/saxophoneBlurred.jpg")',
      'url("../assets/img/main_images/trumpet.jpg")',
      'url("../assets/img/main_images/trumpet-2717460.jpg")',
      'url("../assets/img/main_images/clarinet.jpg")',
      'url("../assets/img/main_images/clarinet_ 2.jpg")',
    ]
    setInterval(function () {
          document.getElementById('bg-image').style.backgroundImage =
              background_images[Math.floor(Math.random() * background_images.length)];
        }, 5000
    )
  }
}
</script>

<style scoped>

</style>