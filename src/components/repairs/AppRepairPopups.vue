<template>
  <div>
    <div v-for="item in repairs_popups" v-bind:key="item.id"
         class="modal fade portfolio-modal text-center" role="dialog" tabindex="-1" id="guidemodal4">
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
                        class="fa fa-times"></i><span>Κλείσιμο</span></button>
                  </div>
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
  name: "AppRepairPopups",
  data() {
    return {
      repairs_popups: [
        {
          div_id: 'guidemodal1',
          title_1: 'Επισκευη',
          title_2: 'Επισκευή κλαρίνου αλλαγή ελατηρίου - σούστας',
          image: 'assets/img/repairs/allagisoustas.jpg',
          description: 'Αφαίρεση του σπασμένου ελατηρίου - σούστας από την κολώνα ή το κλειδί και αλλαγή με νέο ανοξείδωτο ελατήριο.',
        },
        {
          div_id: 'guidemodal2',
          title_1: 'Επισκευη',
          title_2: 'Επισκευή κλαρίνων αλλαγή ταπών',
          image: 'assets/img/repairs/allagitapwn.jpg',
          description: 'Αντικατάσταση - αλλαγή των παλιών ταπών του κλαρίνου - κλαρινέτου με καινούργιες από δέρμα ή μεμβράνη κατά προτίμηση. Υπάρχουν διάφορες ποιότητες ταπών. Γνήσιες τάπες εργοστασίου, επαγγελματικές, οικονομικές..'
        },
        {
          div_id: 'guidemodal3',
          title_1: 'Επισκευη',
          title_2: 'Επισκευή κλαρίνου αλλαγή φελλών',
          image: 'assets/img/repairs/allagifelwn.gif',
          description: 'Αλλαγή - αντικατάσταση των κατεστραμένων φελλών στις συνδέσεις του κλαρίνου και στο επιστόμιο με αυθεντικό φελλό ή με συνθετικό υλικό.'
        },
        {
          div_id: 'guidemodal4',
          title_1: 'Επισκευη',
          title_2: 'Επισκευή κλαρίνου, κόλληση σπασμένου κλειδιού',
          image: 'assets/img/repairs/kollisikleidiou.jpg',
          description: 'Κόληση σπασμένου κλειδιού κλαρίνου με ειδική κόληση. Αποκατάσταση κλειδιού.'
        }
      ]
    }
  }
  ,
}
</script>

<style scoped>

</style>