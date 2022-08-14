<template>
  <div v-for="item in maintenance_popups" v-bind:key="item.id" :id="item.div_id"
       class="modal fade portfolio-modal text-center" role="dialog" tabindex="-1">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <h2 class="text-uppercase">{{ item.title_1 }}</h2>
                  <p class="item-intro text-muted">{{ item.title_2 }}</p>
                  <img class="img-fluid d-block mx-auto" :src="item.image" :alt="item.description">
                  <p>{{ item.description }}</p>
                  <button class="btn btn-primary" data-dismiss="modal" type="button"><i
                      class="fa fa-times"></i><span> Κλείσιμο</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppMaintenancePopups",
  data() {
    return {
      maintenance_popups: [
        {
          div_id: 'guidemodal1',
          title_1: 'Συντηρηση',
          title_2: 'Συντήρηση κλαρίνου - κλαρινέτου',
          image: 'assets/img/maintenance/clarinet_service.jpg',
          description: 'Γενικός τεχνικός έλεγχος, καθαρισμός και γυάλισμα ξύλου, καθαρισμός μηχανισμού και κλειδιών, λάδωμα ξύλου, λίπανση αξόνων και βιδών, ρύθμιση κλειδιών.',
        },
        {
          div_id: 'guidemodal2',
          title_1: 'Συντηρηση',
          title_2: 'Συντήρηση φλάουτου',
          image: 'assets/img/maintance/fluterepair.jpg',
          description: 'Καθαρισμός και γυάλισμα σώματος, κλειδιών, λαιμού και ποδιού φλάουτου. Λίπανση αξόνων και βιδών. Ρύθμιση ελατηρίων και κλειδιών. Κούρδισμα .',
        },
        {
          div_id: 'guidemodal3',
          title_1: 'Συντηρηση',
          title_2: 'Συντήρηση τρομπέτας',
          image: 'assets/img/maintance/servicetrompetas.jpg',
          description: 'Κόληση σπασμένου κλειδιού κλαρίνου με ειδική κόληση. Αποκατάσταση κλειδιού.'
        },
        {
          div_id: 'guidemodal4',
          title_1: 'Συντηρηση',
          title_2: 'Συντήρηση σαξοφώνου, άλτο, τενόρο, σορπράνο',
          image: 'assets/img/maintance/saxophoneservice.jpg',
          description: 'Συντήρηση σαξοφώνου, άλτο, τενόρο, σοπράνο.Γενικός τεχνικός έλεγχος, καθαρισμός και γυάλισμα οργάνου, κλειδιών, λαιμού, ελατηρίων και ταπών, λίπανση αξόνων και βιδών, ρύθμιση κλειδιών.'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>