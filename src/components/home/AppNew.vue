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
        <div class="col-sm-6 col-md-4 portfolio-item" v-for="instrument in new_musical_instruments"
             :key="instrument.id">
          <img class="img-fluid" v-bind:src="instrument.src" alt=""/>
          <div class="portfolio-caption">
            <h4>{{ instrument.title }}</h4>
            <p class="text-muted"><strong>{{ instrument.subtitle }}</strong></p>
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
          subtitle: 'Τρομπέτα Besson BE800',
          price: '700€',
          src: 'assets/img/new%20musical%20instruments/bessonBE800.jpg'
        },
        {
          title: 'Bach Stradivarius 183G',
          subtitle: 'Φλικόρνο Bach Stradivarius 183G',
          price: '2000€',
          src: 'assets/img/new%20musical%20instruments/BachStradivarius183G.jpg'
        },
        {
          title: 'Stradivarius C180L',
          subtitle: 'Τρομπέτα Bach C180L',
          price: '2000€',
          src: 'assets/img/new%20musical%20instruments/BachStradivariusC180L.jpg'
        },
        {
          title: 'Bb Buffet B10',
          subtitle: 'Τρομπέτα Besson BE800',
          price: '500€',
          src: 'assets/img/new%20musical%20instruments/bbBuffetB10.jpg'
        },
        {
          title: 'Bb Buffet RC',
          subtitle: 'Κλαρίνο Bb Buffet RC',
          price: '2000€',
          src: 'assets/img/new%20musical%20instruments/bbBuffetRC.jpg'
        },
        {
          title: 'Yanagisawa A990',
          subtitle: 'Σαξόφωνο Yanagisawa A990',
          price: '2500€',
          src: 'assets/img/new%20musical%20instruments/YanagisawaA990-01.jpg'
        },
        {
          title: 'Jupiter JAS-565',
          subtitle: 'Σαξόφωνο Jupiter JAS-565',
          price: '600€',
          src: 'assets/img/used%20musical%20instruments/jupiterJAS565.jpg'
        },
        {
          title: 'Selmer FL300',
          subtitle: 'Φλάουτο Selmer FL300',
          price: '450€',
          src: "assets/img/new%20musical%20instruments/selmerFL300.jpg"
        },
        {
          title: 'Bach TR300',
          subtitle: 'Τρομπέτα Bach TR300',
          price: '600€',
          src: "assets/img/new%20musical%20instruments/bachTR300.jpg"
        },
      ]
    }
  }

};
</script>

<style scoped></style>
