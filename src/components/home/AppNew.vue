<template>
  <div id="new-musical-instruments"></div>
  <section id="portfolio" class="bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="text-uppercase section-heading">Καινουργια πνευστα μουσικα οργανα</h2>
          <div class="section-subheading text-muted">
            <br/>
            Κλαρίνα Buffet Crampon, Selmer, Keilwerth, Orsi, Leblanc.
            <br/>
            Φλάουτα Buffet, Selmer, Trevor James.
            <br/>
            Σαξόφωνα (σοπράνο, άλτο, τενόρο), Yanagisawa, Selmer, Bundy, Jupiter, Trevor James.
            <br/>
            Τρομπέτες Bach, Conn, King, Schilke, Besson, Holton, B&amp;H.
            <br/>
            Τρομπόνα Bach, Besson, B&amp;H.
            <br/>
            Φλικόρνα Bach. Κόρνα (μονό, διπλό), Holton. Βαρύτονα Besson, Jupiter, B&amp;H.
            <br/>
            Ευφώνια Besson, Jupiter, B&amp;H, Wilson.
            <br/>
            Τούμπα (μι ύφεση, σι ύφεση), Besson, B&amp;H, Amati, Wilson.
            <br/>
            Φαγκότα (κατά παραγγελία).&nbsp;
          </div>
          <br/>
        </div>
      </div>
      <div class="row">
        <div v-for="instrument in new_musical_instruments" v-bind:key="instrument.id"
             class="col-sm-6 col-md-4 portfolio-item">
          <img class="img-fluid" v-bind:src="instrument.image" :alt="instrument.description"/>
          <div class="portfolio-caption">
            <h4>{{ instrument.title }}</h4>
            <p class="text-muted"><strong>{{ instrument.description }}</strong></p>
            <p class="text-muted"><strong>{{ instrument.price }}</strong></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppNew",

  data() {
    return {
      new_musical_instruments: [
        {
          title: 'Besson BE800',
          description: 'Τρομπέτα Besson BE800',
          price: '700€',
          image: 'assets/img/new_musical_instruments/bessonBE800.jpg'
        },
        {
          title: 'Bach Stradivarius 183G',
          description: 'Φλικόρνο Bach Stradivarius 183G',
          price: '2000€',
          image: 'assets/img/new_musical_instruments/BachStradivarius183G.jpg'
        },
        {
          title: 'Stradivarius C180L',
          description: 'Τρομπέτα Bach C180L',
          price: '2000€',
          image: 'assets/img/new_musical_instruments/BachStradivariusC180L.jpg'
        },
        {
          title: 'Bb Buffet B10',
          description: 'Τρομπέτα Besson BE800',
          price: '500€',
          image: 'assets/img/new_musical_instruments/bbBuffetB10.jpg'
        },
        {
          title: 'Bb Buffet RC',
          description: 'Κλαρίνο Bb Buffet RC',
          price: '2000€',
          image: 'assets/img/new_musical_instruments/bbBuffetRC.jpg'
        },
        {
          title: 'Yanagisawa A990',
          description: 'Σαξόφωνο Yanagisawa A990',
          price: '2500€',
          image: 'assets/img/new_musical_instruments/YanagisawaA990-01.jpg'
        },
        {
          title: 'Jupiter JAS-565',
          description: 'Σαξόφωνο Jupiter JAS-565',
          price: '600€',
          image: 'assets/img/used_musical_instruments/jupiterJAS565.jpg'
        },
        {
          title: 'Selmer FL300',
          description: 'Φλάουτο Selmer FL300',
          price: '450€',
          image: "assets/img/new_musical_instruments/selmerFL300.jpg"
        },
        {
          title: 'Bach TR300',
          description: 'Τρομπέτα Bach TR300',
          price: '600€',
          image: "assets/img/new_musical_instruments/bachTR300.jpg"
        },
      ]
    }
  }

};
</script>

<style scoped></style>
