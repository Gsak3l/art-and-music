<template>
  <section id="portfolio" class="bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="text-uppercase section-heading">ΕΠΙΣΚΕΥΗ</h2>
          <h3 class="section-subheading text-muted">Επισκευή πνευστών μουσικών οργάνων</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-md-4 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#guidemodal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div>
            </div>
            <img class="img-fluid" src="assets/img/repairs/allagisoustas.jpg">
          </a>
          <div class="portfolio-caption">
            <p class="text-muted">Επισκευή κλαρίνου, αλλαγή ελατηρίου - σούστας</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#guidemodal2">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div>
            </div>
            <img class="img-fluid" src="assets/img/repairs/allagitapwn.jpg">
          </a>
          <div class="portfolio-caption">
            <p class="text-muted">Επισκευή κλαρίνου, αλλαγή ταπών</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#guidemodal3">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div>
            </div>
            <img class="img-fluid" src="assets/img/repairs/allagifelwn.gif">
          </a>
          <div class="portfolio-caption">
            <p class="text-muted">Επισκευή τρομπέτας, αλλαγή φελλών</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#guidemodal4">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div>
            </div>
            <img class="img-fluid" src="assets/img/repairs/kollisikleidiou.jpg">
          </a>
          <div class="portfolio-caption">
            <p class="text-muted">Επισκευή κλαρίνου, κόλληση σπασμένου κλειδιού</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <AppMaintenancePopups/>
</template>

<script>
export default {

  name: "AppRepairsBody",
  components: {}
}
</script>

<style scoped>

</style>