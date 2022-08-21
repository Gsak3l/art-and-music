<template>
  <div id="used-musical-instruments"></div>
  <section id="portfolio" class="bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="text-uppercase section-heading">μεταχειρισμενα πνευστα μουσικα οργανα</h2>
          <div class="section-subheading text-muted">
            Μεγάλη συλλογή από παραδοσιακά κλαρίνα δημοτικής μουσικής, σιμπεμόλ και λα σε γερμανικό σύστημα (Muller
            system).
            <br/>
            Μεγάλη συλλογή από κλαρινέτα κλασικής μουσικής, γαλλικό σύστημα (Bοehm system).
            <br/>
            Παλιά πνευστά μουσικά όργανα, αντίκες για διακόσμηση και συλλέκτες.
            <br/>
            Χειροποίητες σάλπιγγες παρέλασης ελληνικής κατασκευής.
            <br/>
            Όλα τα μεταχειρισμένα όργανα είναι σε πολύ καλή κατάσταση, έχουν επισκευαστεί και συντηρηθεί και διαθέτουν
            εγγύηση καλής λειτουργίας ενός χρόνου.
          </div>
          <br/>
        </div>
      </div>
      <div class="row">
        <div v-for="instrument in used_musical_instruments" v-bind:key="instrument.id"
             class="col-sm-6 col-md-4 portfolio-item">
          <img class="img-fluid" :src="instrument.image" :alt="instrument.description"/>
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
  name: "AppUsed",
  data() {
    return {
      used_musical_instruments: [
        {
          title: 'Bb Selmer CL300',
          description: 'Κλαρίνο Bb Selmer CL300',
          price: '300€',
          image: 'assets/img/used_musical_instruments/selmer_cl300.jpg'
        },
        {
          title: 'Buffer B12',
          description: 'Κλαρίνο Buffer B12',
          price: '300€',
          image: 'assets/img/used_musical_instruments/buffetB12.jpg'
        },
        {
          title: 'Musica Steyr',
          description: 'Σαξόφωνο άλτο Musica Steyr',
          price: '400€',
          image: 'assets/img/used_musical_instruments/Musica_Steyr.jpg'
        },
        {
          title: 'Amati ACL 342',
          description: 'Κλαρίνο Amati ACL 342',
          price: '600€',
          image: 'assets/img/used_musical_instruments/amati_acl342.jpg'
        },
        {
          title: 'La Kolhert',
          description: 'Κλαρίνο La Kolhert',
          price: '1000€',
          image: 'assets/img/used_musical_instruments/la_kolhert.jpg'
        },
        {
          title: 'Carl Fischer',
          description: 'Κλαρίνο Σι Ύφεση Carl Fischer',
          price: '1000€',
          image: 'assets/img/used_musical_instruments/carl_fischer.jpg'
        },
        {
          title: 'Jupiter JAS-565',
          description: 'Σαξόφωνο Jupiter JAS-565',
          price: '450€',
          image: 'assets/img/used_musical_instruments/jupiterJAS565.jpg'
        },
        {
          title: 'Selmer FL300',
          description: 'Φλάουτο Selmer FL300',
          price: '300€',
          image: 'assets/img/new_musical_instruments/selmerFL300.jpg'
        },
        {
          title: 'Bach TR300',
          description: 'Τρομπέτα Bach TR300',
          price: '350€',
          image: 'assets/img/new_musical_instruments/bachTR300.jpg'
        },
        {
          title: 'Δημοτικό Σιμπεμόλ',
          description: 'Κλαρίνο Δημοτικό Σιμπεμόλ',
          price: '300€',
          image: 'assets/img/used_musical_instruments/dimotiko_synempol.jpg'
        },
        {
          title: 'Λα Γαλλικό',
          description: 'Κλαρίνο Λα Γαλλικό',
          price: '1000€',
          image: 'assets/img/used_musical_instruments/la_galliko.jpg'
        },
        {
          title: 'Σι Ύφεση LeBlanc',
          description: 'Κλαρίνο Σι Ύφεση LeBlanc',
          price: '500€',
          image: 'assets/img/used_musical_instruments/si_ifesi_leblanc.jpg'
        },
        {
          title: 'Λα Keilwerth',
          description: 'Κλαρίνο Λα Keilwerth',
          price: '1200€',
          image: 'assets/img/used_musical_instruments/keilwerth.jpg'
        },
        {
          title: 'Stagg S77',
          description: 'Σαξόφωνο Stagg S77',
          price: '300€',
          image: 'assets/img/used_musical_instruments/stagg77.jpg'
        },
        {
          title: 'Ashton sx10',
          description: 'Σαξόφωνο Ashton sx10',
          price: '350€',
          image: 'assets/img/used_musical_instruments/sx10.jpg'
        },
        {
          title: 'Schilke',
          description: 'Τρομπέτα Schilke',
          price: '1000€',
          image: 'assets/img/used_musical_instruments/schilke.jpg'
        },
        {
          title: 'John Packer',
          description: 'Τρομπέτα John Packer',
          price: '150€',
          image: 'assets/img/used_musical_instruments/jhon_packer.jpg'
        },
        {
          title: 'Besson',
          description: 'Τρομπέτα Besson',
          price: '300€',
          image: 'assets/img/used_musical_instruments/besson.jpg'
        },
      ]
    }
  }
};
</script>

<style scoped></style>
