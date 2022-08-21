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

      <iframe name="dummy-form" id="dummy-form" style="display: none;"></iframe>

      <div class="row" id="contact-div">
        <div class="col-lg-12">
          <form id="contactForm" name="contactForm" method="POST" target="dummy-form" @submit="replace_div()">

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
                <button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton"
                        type="submit" ref="submit">αποστολη
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

  methods: {
    replace_div() {
      document.getElementById('contact-div').innerHTML = '<div id="myModal"> <div class="modal-dialog modal-confirm"> <div class="modal-content" style="padding: 20px; font-size: 16px; border-radius: 5px; border: none;"> <div class="modal-header" style="background: #FED136; border-bottom: none; position: relative; text-align: center; margin: -20px -20px 0; border-radius: 5px 5px 0 0; padding: 35px;"> <div class="icon-box" style="color: #fff; width: 95px; height: 95px; display: inline-block; border-radius: 50%; z-index: 9; border: 5px solid #fff; padding: 15px; text-align: center;"> <i class="fa-solid fa-check" style="font-size: 64px; margin: -4px 0 0 -4px;"></i> </div> </div> <div class="modal-body text-center"> <h4 style="text-align: center; font-size: 36px; margin: 10px 0;">Τέλεια!</h4> <p>Το email σας στάλθηκε με επιτυχία</p> <a href="/"></a></div></div></div></div>';
    }
  }
}


</script>

<style scoped>
#contact {
  background-image: url("../../../public/assets/img/greeceHigh.svg");
}

.section-subheading {
  color: #fff
}


</style>
