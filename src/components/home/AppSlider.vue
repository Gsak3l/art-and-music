<template>

  <header
      class="masthead"
      id="background-image"
      style="background-image: url('assets/img/main_images/saxophoneBlurred.jpg');
        background-color: #343a40;
        filter: blur(0px);
        background-size: cover;
        background-repeat: no-repeat;">
    <div class="container">
      <div class="intro-text">
        <div class="intro-heading text-uppercase"><span>ART AND MUSIC</span></div>
        <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" role="button"
           href="#services" style="color: rgb(0, 0, 0)">μαθετε περισσοτερα</a>
      </div>
    </div>
  </header>


</template>

<script>
export default {
  name: "AppSlider",
  data: function () {
    return {};
  },

  methods: {
    change_image() {
      const background_images = [
        'url("../assets/img/main_images/saxophone4k.jpg")',
        'url("../assets/img/main_images/saxophone-main.jpg")',
        'url("../assets/img/main_images/saxophoneBlurred.jpg")',
        'url("../assets/img/main_images/trumpet.jpg")',
        'url("../assets/img/main_images/trumpet-2717460.jpg")',
        'url("../assets/img/main_images/clarinet.jpg")',
        'url("../assets/img/main_images/clarinet_2.jpg")',
      ]
      setInterval(function () {
            let image = Math.floor(Math.random() * background_images.length)
            document.getElementById('background-image').style.backgroundImage =
                background_images[image];
          }, 7000
      )
    }
  },

  mounted: function () {
    this.change_image();
  }
}
</script>

<style scoped>
.transition:before {
  content: '';
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background: linear-gradient(0deg, rgba(0, 0, 255, 0.3), rgba(0, 0, 255, 0.3));
}

.masthead {
  background-position: center;
  background-size: cover;
  display: flex;
  /*transition: background 1s linear;*/
  transition: background 2s linear, height 5s, transform 5s;;
}
</style>