<template>
  <div>
    <section id="portfolio" class="bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="text-uppercase section-heading">Συντηρηση</h2>
            <h3 class="section-subheading text-muted">Συντήρηση πνευστών μουσικών οργάνων</h3>
          </div>
        </div>
        <div class="row">
          <div v-for="item in maintenance_body" v-bind:key="item.id" class="col-sm-6 col-md-4 portfolio-item">
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
  </div>
</template>

<script>

export default {
  name: "AppMaintenanceBody",
  data() {
    return {
      maintenance_body: [
        {
          title: "Συντήρηση κλαρίνου - κλαρινέτου",
          image: "assets/img/maintenance/clarinet_service.jpg",
          link: "#guidemodal1"
        },
        {
          title: "Συντήρηση φλάουτου",
          image: "assets/img/maintenance/fluterepair.jpg",
          link: "#guidemodal2"
        },
        {
          title: "Συντήρηση τρομπέτας",
          image: "assets/img/maintenance/servicetrompetas.jpg",
          link: "#guidemodal3"
        },
        {
          title: "Συντήρηση σαξοφώνου, άλτο, τενόρο, σορπράνο",
          image: "assets/img/maintenance/saxophoneservice.jpg",
          link: "#guidemodal4"
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>