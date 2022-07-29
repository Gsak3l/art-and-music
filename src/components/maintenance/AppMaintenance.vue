<template>
  <section id="portfolio" class="bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="text-uppercase section-heading">Συντηρηση</h2>
          <h3 class="section-subheading text-muted">Συντήρηση πνευστών μουσικών οργάνων</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-md-4 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#guidemodal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div>
            </div>
            <img class="img-fluid" src="assets/img/maintance/clarinet service.jpg">
          </a>
          <div class="portfolio-caption">
            <p class="text-muted">Συντήρηση κλαρίνου - κλαρινέτου</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#guidemodal2">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div>
            </div>
            <img class="img-fluid" src="assets/img/maintance/fluterepair.jpg">
          </a>
          <div class="portfolio-caption">
            <p class="text-muted">Συντήρηση φλάουτου</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#guidemodal3">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div>
            </div>
            <img class="img-fluid" src="assets/img/maintance/saxophoneservice.jpg">
          </a>
          <div class="portfolio-caption">
            <p class="text-muted">Συντήρηση σαξοφώνου, άλτο, τενόρο, σορπράνο</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#guidemodal4">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div>
            </div>
            <img class="img-fluid" src="assets/img/maintance/servicetrompetas.jpg">
          </a>
          <div class="portfolio-caption">
            <p class="text-muted">Συντήρηση τρομπέτας</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <AppMaintenancePopups/>
</template>

<script>
import AppMaintenancePopups from "@/components/maintenance/AppMaintenancePopups";

export default {
  name: "AppMaintenance",
  components: {AppMaintenancePopups}
}
</script>

<style scoped>

</style>