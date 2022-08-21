<template>
  <section id="portfolio" class="bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="text-uppercase section-heading">Τεχνικη εργασια</h2>
          <h3 class="section-subheading text-muted">Τεχνική εργασία - Είδη επισκευής</h3>
        </div>
      </div>
      <div class="row">
        <div v-for="item in technical_body" v-bind:key="item.id" class="col-sm-6 col-md-4 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" :href="item.link">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div>
            </div>
            <img class="img-fluid" :src="item.image" :alt="item.description">
          </a>
          <div class="portfolio-caption">
            <p class="text-muted">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppTechnicalBody",
  data() {
    return {
      technical_body: [
        {
          title: "Γενική επισκευή κλαρίνου - κλαρινέτου",
          description: "Γενική επισκευή κλαρίνου - κλαρινέτου",
          image: "assets/img/technical_work/clarinetrepair.jpg",
          link: "#guidemodal1"
        },
        {
          title: "Γενική επισκευή σαξοφώνου, άλτο, τενόρο, σοπράνο",
          description: "Γενική επισκευή σαξοφώνου, άλτο, τενόρο, σοπράνο",
          image: "assets/img/technical_work/saxsmall.png",
          link: "#guidemodal2"
        },
        {
          title: "Γενική επισκευή φλάουτου",
          description: "Γενική επισκευή φλάουτου",
          image: "assets/img/technical_work/flutev2.jpg",
          link: "#guidemodal3"
        },
        {
          title: "Γενική επισκευή τρομπέτας",
          description: "Γενική επισκευή τρομπέτας",
          image: "assets/img/technical_work/trumpet.jpg",
          link: '#guidemodal4'
        }
      ]
    };
  },
}
</script>

<style scoped>

</style>