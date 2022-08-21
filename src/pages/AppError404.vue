<template>
  <a href="/">
    <header class="top-header">
    </header>
    <div class="lamp__wrap">
      <div class="lamp">
        <div class="cable"></div>
        <div class="cover"></div>
        <div class="in-cover">
          <div class="bulb"></div>
        </div>
        <div class="light"></div>
      </div>
    </div>
    <section class="error">
      <!-- Content -->
      <div class="error__content">
        <div class="error__message message">
          <h2 class="message__title">404</h2>
          <p class="message__text">
            Λυπούμαστε, η σελίδα που αναζητάτε δεν βρίσκεται εδώ. Ο σύνδεσμος που ακολουθήσατε μπορεί να είναι
            λάθος ή να μην υπάρχει πλέον. Παρακαλώ προσπαθήστε ξανά.
          </p>
        </div>
      </div>
    </section>
  </a>
</template>

<script>
export default {
  name: "AppError404",
}


</script>


<style scoped>
label {
  cursor: pointer;
}

a {
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  background: transparent;
  text-decoration: none;
  color: #000;
}

input, select, button, textarea {
  margin: 0;
  font-size: 100%;
}


.top-header:before {
  background-color: #000;
}

.top-header:before {
  content: '';
  display: block;
  width: 100%;
  height: 4px;
  background-repeat: repeat-x;
  background-size: contain;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
}

/* Error */
.error {
  min-height: 100vh;
  position: relative;
  padding: 240px 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 70px;
}

.message__title {
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 5.6rem;
  padding-bottom: 40px;
  max-width: 960px;
  margin: 0 auto;
}

.message__text {
  line-height: 42px;
  font-size: 18px;
  padding: 0 60px;
  max-width: 680px;
  margin: auto;
}

/* Lamp */
.lamp {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  margin: 0px auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform-origin: center top;
  animation-timing-function: cubic-bezier(0.6, 0, 0.38, 1);
  animation: move 5.1s infinite;
}

@keyframes move {
  0% {
    transform: rotate(40deg);
  }
  50% {
    transform: rotate(-40deg);
  }
  100% {
    transform: rotate(40deg);
  }
}

.cable {
  width: 8px;
  height: 248px;
  background-image: linear-gradient(rgb(52, 58, 64), rgb(52, 58, 64)), linear-gradient(rgb(52, 58, 64), rgb(52, 58, 64)), linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
}

.cover {
  width: 200px;
  height: 80px;
  background: #343a40;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  position: relative;
  z-index: 200;
}

.in-cover {
  width: 100%;
  max-width: 200px;
  height: 20px;
  border-radius: 100%;
  background: #808080;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: 0px auto;
  bottom: -9px;
  z-index: 100;
}

.in-cover .bulb {
  width: 50px;
  height: 50px;
  background-color: #fed136;
  border-radius: 50%;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: -20px;
  margin: 0px auto;
  -webkit-box-shadow: 0 0 15px 7px rgb(52, 58, 64), 0 0 40px 25px rgb(52, 58, 64), -75px 0 30px 15px rgb(52, 58, 64);
  box-shadow: 0 0 25px 7px rgb(52, 58, 64), 0 0 64px 47px rgb(52, 58, 64), 0px 0 30px 15px rgb(52, 58, 64);
}

.light {
  width: 200px;
  height: 0px;
  border-bottom: 900px solid rgb(254, 209, 54);
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 270px;
  margin: 0px auto;
  z-index: 1;
  border-radius: 90px 90px 0px 0px;
}

/* Responsive */
.error {
  overflow: hidden;
  max-height: 100vh;
}

@media (max-width: 1400px) {
  .lamp {
    zoom: .5;
  }

  .error__content {
    top: 55%;
  }

  .message__title {
    font-size: 3.5rem;
  }
}

@media (max-width: 900px) {

  .message__title {
    font-size: 34px;

  }

  .error__content {
    top: 55%;
  }
}

@media (max-width: 950px) {
  .lamp__wrap {
    max-height: 100vh;
    overflow: hidden;
    max-width: 100vw;
  }
}

@media (max-width: 750px) {
  body, html {
    max-height: 100vh;
  }

  .error__content {
    position: static;
    margin: 0 auto;
    transform: none;
    padding-top: 300px;
  }

  .error {
    padding-top: 0;
    padding-bottom: 100px;
    height: 100vh;
  }
}

@media (max-width: 650px) {
  .message__title {
    font-size: 36px;
    padding-bottom: 20px;
  }

  .message__text {
    font-size: 16px;
    line-height: 2;
    padding-right: 20px;
    padding-left: 20px;
  }

  .lamp {
    zoom: .6;
  }

  .error__content {
    padding-top: 180px;
  }
}

@media (max-width: 480px) {

  .message__title {
    font-size: 30px;
  }

  .message__text {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 15px;
  }

  .error__nav {
    margin-top: 20px;
  }
}


</style>