<template>
  <section id="portfolio" class="bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="text-uppercase section-heading">ΟΔΗΓΙΕΣ</h2>
          <h3 class="section-subheading text-muted">Οδηγίες πρώτων βοηθειών πνευστών μουσικών οργάνων</h3>
        </div>
      </div>
      <div class="row">
        <div v-for="item in tutorials_body" v-bind:key="item.id" class="col-sm-6 col-md-4 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" :href="item.link">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div>
            </div>
            <img class="img-fluid" :src="item.image">
          </a>
          <div class="portfolio-caption">
            <p class="text-muted">{{ item.title }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "AppTutorialsBody",
  data() {
    return {
      tutorials_body: [
        {
          title: "Οδηγίες για σπασμένο ή χαλασμένο ελατήριο κλαρίνου",
          image: "assets/img/guides/31_useclarinetregisterkey800x8001.jpg",
          link: "#guidemodal1"
        },
        {
          title: "Αντικατάσταση χαλασμένης τάπας κλαρίνου",
          image: "assets/img/guides/32_01.jpg",
          link: "#guidemodal2"
        },
        {
          title: "Κολλημένο ή σφηνωμένο επιστόμιο τρομπέτας",
          image: "assets/img/guides/33_fixtrumpetmouthpiece800x8001.jpg",
          link: "#guidemodal3"
        },
        {
          title: "Κολλημένη βαλβίδα τρομπέτας",
          image: "assets/img/guides/34_oiling_valve_500x3751.jpg",
          link: "#guidemodal4"
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>