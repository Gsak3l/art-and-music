<template>
  <section>
    <div class="container">
      <div class="row" id="about">
        <div class="col-lg-12 text-center">
          <h2 class="text-uppercase">Σχετικα ΜΕ ΕΜΑΣ</h2>
        </div>
        <div class="text-muted text-center">
          Το 1920 ο Δημήτριος Λαμπρινίδης, πρόσφυγας από την Κωνσταντινούπολη, ίδρυσε το πρώτο οργανοποιείο/εργαστήριο
          κατασκευής και επισκευής πνευστών και
          κρουστών μουσικών οργάνων στην κεντρική αγορά της Θεσσαλονίκης <br/>
          Το 1958 την επιχείρηση ανέλαβε ο Αναστάσιος Λαμπρινίδης (δεύτερη γενιά), ανακαινίζοντας και εξοπλίζοντας το
          παλιό κατάστημα της οδού Εγνατίας 53 στο
          κέντρο της πόλης <br/>
          Το 1987 ο Δημήτριος Λαμπρινίδης (τρίτη γενία), συνεχίζει την οικογενειακή επιχείρηση, και επεκτείνει την
          δραστηριότητα της, στην εισαγωγή και το
          εμπόρειο χάλκινων και ξύλινων πνευστών μουσικών οργάνων <br/>
          <b>Το κατάστημα μας βρίσκεται στην
            <a href="https://goo.gl/maps/azvJj8ZECSxZaPGEA" target="_blank">Καπετάν Ντόγρα 83, 55535 - Θεσσαλονίκη.</a>
            <br/>
            Τηλέφωνο <a href="tel:2310236652">2310-236652</a> & <a href="tel:6934690502">693 469 0502</a>
          </b>
        </div>
      </div>
      <br/><br/><br/><br/><br/>
      <div class="row" id="services">
        <div class="col-lg-12 text-center">
          <h2 class="text-uppercase section-heading">Υπηρεσιεσ</h2>
          <div class="section-subheading text-muted">
            Εξειδικευμένο εργαστήριο στην Επισκευή, Συντήρηση, Σέρβις στα χάλκινα και ξύλινα πνευστά μουσικά όργανα.
            <br/>
            Επισκευάζουμε Κλαρίνο, Φλάουτο, Σαξόφωνο, (σοπράνο, άλτο, τενόρο, μπάσο), όμποε, φαγκότο, τρομπέτα, κορνέτα,
            τρομπόνι (άλτο, τενόρο, μπάσο),
            βαρύτονο, κόρνο, ευφώνιο, τούμπα κλπ.
            <br/>
            Διαθέτουμε τεχνική εμπειρία 35 χρόνων, παρέχουμε εγγυημένη υπεύθυνη εργασία.
            <br/>
            Τεχνική υποστήριξη με ειδικά μηχανήματα και παρακαταθήκη ανταλλακτικών.
            <br/>
            Προσφέρουμε σύντομη παράδοση και προσιτές τιμές, πολύχρονη συνεργασία με φιλαρμονικές μπάντες και ορχήστρες.
            Εκτίμηση αξίας μουσικού οργάνου για
            πώληση ή αγορά.
            <br/>
            Αγορά μεταχειρισμένων μουσικών οργάνων με δυνατότητα ανταλλαγής.
          </div>
        </div>
      </div>
      <br/>

      <div class="row text-center">
        <div v-for="service in all_services" v-bind:key="service.id" class="col-md-4">
					<span class="fa-stack fa-4x">
						<a :href="service.link">
							<i class="fa fa-circle fa-stack-2x text-primary"></i>
							<i :class="service.icon"></i>
						</a>
					</span>
          <h4 class="section-heading">{{ service.title }}</h4>
          <p class="text-muted">{{ service.description }}</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppAbout",
  data() {
    return {
      all_services: [
        {
          title: 'Επισκευή',
          description: 'Κλαρίνου: αλλαγή ελατηρίου/σούστας - αλλαγή ταπών - αλλαγή φελλών - κόληση σπασμένου κλειδιού',
          icon: 'fas fa-hammer fa-stack-1x fa-inverse',
          link: '/repairs'
        },
        {
          title: 'Συντήρηση Σέρβις',
          description: 'Κλαρίνου-Κλαρινέτου, Φλάουτου, Σαξοφώνου, Άλτο, Τενόρο, Σοπράνο, Τρομπέτας',
          icon: 'fas fa-screwdriver fa-stack-1x fa-inverse',
          link: '/maintenance'
        },
        {
          title: 'Τεχνική Εργασία',
          description: 'Καινούργιων και Μεταχειρισμένων πνευστών μουσικών οργάνων.',
          icon: 'fas fa-ruler fa-stack-1x fa-inverse',
          link: '/technical'
        }
      ]
    }
  },
};
</script>

<style scoped></style>
