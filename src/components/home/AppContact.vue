<template>
  <section id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="text-uppercase section-heading">επικοινωνηστε</h2>
          <h3 class="section-subheading">
            Στείλτε μας email μέσω της παρακάτω φόρμας επικοινωνίας <br/>
            ή κάλεστε μας στο
            <a href="tel:23102336652">2310-2336652</a> & <a href="tel:6934690502">693 469 0502</a>
          </h3>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <form action="/success" id="contactForm" name="contactForm" method="POST">

            <input type="hidden" name="form-name" value="contactForm"/>

            <div class="form-row">

              <div class="col col-md-6">

                <div class="form-group">
                  <input name="Όνομα" class="form-control" type="name" placeholder="Όνομα *" required>
                  <small class="form-text text-danger help-block lead"></small>
                </div>

                <div class="form-group">
                  <input name="Επώνυμο" class="form-control" type="surname" placeholder="Επώνυμο *" required>
                  <small class="form-text text-danger help-block lead"></small>
                </div>

                <div class="form-group">
                  <input name="Εmail" class="form-control" type="email" placeholder="Email *" required>
                  <small class="form-text text-danger help-block lead"></small>
                </div>

              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <textarea name="Μήνυμα" class="form-control" id="message" placeholder="Μήνυμα *" required></textarea>
                  <small class="form-text text-danger help-block lead"></small>
                </div>
              </div>

              <div class="col">
                <div class="clearfix"></div>
              </div>

              <div class="col-lg-12 text-center">
                <div id="success"></div>
                <button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">αποστολη
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppContact",
};
</script>

<style scoped>
#contact {
  background-image: url("../../../public/assets/img/greeceHigh.svg");
}

.section-subheading {
  color: #fff
}
</style>
