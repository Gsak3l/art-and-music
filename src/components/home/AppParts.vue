<template>
  <section id="spare-parts" class="bg-light">
    <div class="container">
      <div class="col-lg-12 text-center">
        <h3 class="text-muted section-subheading"></h3>
        <h2 class="text-uppercase section-heading" id="accessories">ΕΞΑΡΤΗΜΑΤΑ<br/></h2>
        <div class="section-subheading text-muted">
          Ανταλλακτικά και εξαρτήματα διάφορων εταιριών σε μεγάλη ποικιλία.
          <br/>
          Επιστόμια Vandoren, Selmer, Rico, Amati, Bach, Schilke, Conn, Denis Wick, Giardinelli, Stork, Gewa,
          Yanagisawa. Σουρτίνες Denis Wick, H&amp;B, Joral,
          Bach Elite, Tom Crown.
          <br/>
          Θήκες μουσικών οργάνων, Ortola, Buffet Crampon, Keilwerth.
          <br/>
          Ιμάντες, ζώνες, ελατήρια χάλκινων, βάσεις, αναλόγια, προφυλακτήρες, σφυκτήρες, βαρέλια, μαγνήτες, κλπ.
        </div>
        <br/>
        <h3 class="section-subheading text-muted"><em> </em><br/></h3>
      </div>
      <div class="row">
        <div v-for="part in spare_parts" v-bind:key="part.id" class="col-sm-4">
          <div class="team-member">
            <img class="rounded-circle mx-auto" :src="part.image" :alt="part.description"/>
            <h4>{{ part.title }}</h4>
            <p class="text-muted">{{ part.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div id="consumables" class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h3 class="text-muted section-subheading"></h3>
          <h2 class="text-uppercase section-heading" id="accessories">ΑΝΑΛΩΣΙΜΑ<br/></h2>
          <div class="section-subheading text-muted">
            Αναλώσιμα διάφορων εταιρειών σε μεγάλη ποικιλία.
            <br/>
            Λιπαντικά Selmer, Bach, Conn, Holton, Getzen, Slide-O-Mix, Superslic.
            <br/>
            Καλαμάκια κλαρίνου, σαξοφώνου Vandoren, Rico Royal, Hot&amp;Swing, Selmer
            <br/>
            Καθαριστικά BG, Selmer, Gewa, Trevor James.
          </div>
          <br/>
        </div>
        <div v-for="consumable in consumables" v-bind:key="consumable.id" class="col-sm-4">
          <div class="team-member">
            <img class="rounded-circle mx-auto" :src="consumable.image"/>
            <h4>{{ consumable.title }}</h4>
            <p class="text-muted">{{ consumable.description }}<br/><br/></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppParts",
  data() {
    return {
      spare_parts: [
        {
          image: 'assets/img/spare_parts/vareliKlarinou.jpg',
          title: 'Βαρέλι κλαρίνου',
          description: 'Βαρέλι κλαρίνου Buffet από έβενο, μήκος 60-65χιλ.'
        },
        {
          image: 'assets/img/spare_parts/epistomioKlarinou.jpg',
          title: 'Επιστόμιο Κλαρίνου Vandoren B45#P88',
          description: 'Επιστόμιο Κλαρίνου για δημοτική και κλασική μουσική'
        },
        {
          image: 'assets/img/spare_parts/epistomioTrompetas.jpg',
          title: 'Επιστόμιο Τρομπέτας Bach',
          description: 'Eπιστόμιο τρομπέτας Bach, επάργυρο 1C, 1 1/2C, 1 1/4C, 2C, 3C, 7C, 9C, 10C'
        },
        {
          image: 'assets/img/spare_parts/sourdinaTrompetas.jpg',
          title: 'Σουρντίνα τρομπέτας D.W. 5504',
          description: 'Σουρντίνα τρομπέτας D.W. 5504 από αλουμίνιο.'
        }
      ],
      consumables: [
        {
          image: 'assets/img/consumables/tumb_8_selmer.jpg',
          title: 'Λάδι ξύλου κλαρίνου Selmer',
          description: 'Λάδι ξύλου κλαρίνου Selmer για ξύλινα πνευστά μουσικά όργανα.'
        },
        {
          image: 'assets/img/consumables/kalamiaKlarinou.jpg',
          title: 'Κουτί καλάμια κλαρίνου Hot & Swing',
          description: 'Kουτί καλάμια κλαρίνου Hot & Swing, Γαλλικής κατασκευής, 12 τεμάχια.'
        },
        {
          image: 'assets/img/consumables/thumblarge1.jpg',
          title: 'Λάδι βαλβίδων Bach',
          description: 'Λάδι βαλβίδων Bach για τρομπέτα, ευφώνιο, βαρύτονο, τούμπα.'
        },
        {
          image: 'assets/img/consumables/cork_grease.jpg',
          title: 'Αλοιφή φελλών Vandoren',
          description: 'Aλοιφή φελλών Vandoren.'
        }
      ]
    }
  },
};
</script>

<style scoped></style>
