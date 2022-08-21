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

        <div v-for="item in repairs_body" v-bind:key="item.id" class="col-sm-6 col-md-4 portfolio-item">
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
  name: "AppRepairsBody",
  data() {
    return {
      repairs_body: [
        {
          title: "Επισκευή κλαρίνου, αλλαγή ελατηρίου - σούστας",
          image: "assets/img/repairs/allagisoustas.jpg",
          link: "#guidemodal1"
        },
        {
          title: "Επισκευή κλαρίνου, αλλαγή ταπών",
          image: "assets/img/repairs/allagitapwn.jpg",
          link: "#guidemodal2"
        },
        {
          title: "Επισκευή τρομπέτας, αλλαγή φελλών",
          image: "assets/img/repairs/allagifelwn.gif",
          link: "#guidemodal3"
        },
        {
          title: "Επισκευή κλαρίνου, κόλληση σπασμένου κλειδιού",
          image: "assets/img/repairs/kollisikleidiou.jpg",
          link: "#guidemodal4"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>