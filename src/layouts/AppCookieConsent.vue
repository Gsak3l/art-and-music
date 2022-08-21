<template>
  <div id="cookie-div">

    <div class="cookieConsentContainer" id="cookieConsentContainer">
      <div class="cookieTitle">
        <a>{{ pureCookieTitle }}</a>
      </div>
      <div class="cookieDesc">
        <p>{{ pureCookieDesc }}<a :href="pureCookieLink" target="_blank">{{ pureCookieLinkText }}</a>
        </p>
      </div>
      <div class="cookieButton">
        <a @click="pureCookieDismiss">{{ pureCookieButton }}</a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "AppCookieConsent",
  data() {
    return {
      pureCookieTitle: 'Cookies.',
      pureCookieDesc: "Η ιστοσελίδα μας χρησιμοποιεί cookies και άλλες τεχνολογίες για να μπορέσουμε " +
          "να βελτιώσουμε την εμπειρία σας κατά την επίσκεψη σας. Συνεχίζοντας την περιήγηση στον " +
          "ιστότοπό μας, συμφωνείτε με τη χρήση τους. ",
      pureCookieLink: "/cookies",
      pureCookieLinkText: "Για ποιο λόγο;",
      pureCookieButton: 'Καταλαβαίνω',
    }
  },
  methods: {
    pureFadeIn(elem) {
      let el = document.getElementById(elem);
      el.style.opacity = 0;
      el.style.display = "block";

      (function fade() {
        let val = parseFloat(el.style.opacity);
        if (!((val += .02) > 1)) {
          el.style.opacity = val;
          requestAnimationFrame(fade);
        }
      })();
    },

    pureFadeOut(elem) {
      const el = document.getElementById(elem);
      el.style.opacity = 1;

      (function fade() {
        if ((el.style.opacity -= .02) < 0) {
          el.style.display = "none";
        } else {
          requestAnimationFrame(fade);
        }
      })();
    },

    setCookie(name, value, days) {
      let expires = "";
      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },

    getCookie(name) {
      const nameEQ = name + "=";
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    },

    cookieConsent() {
      if (!this.getCookie('pureCookieDismiss')) {
        this.pureFadeIn("cookieConsentContainer");
      }
    },

    pureCookieDismiss() {
      this.setCookie('pureCookieDismiss', '1', 7);
      this.pureFadeOut("cookieConsentContainer");
    },
  },

  mounted: function () {
    this.cookieConsent();
  },
}

</script>

<style>

.cookieConsentContainer {
  z-index: 999;
  width: 350px;
  min-height: 20px;
  box-sizing: border-box;
  padding: 30px 30px 30px 30px;
  background: #353A40;
  overflow: hidden;
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: none;
}

.cookieConsentContainer .cookieTitle a {
  color: #FED136;
  font-size: 22px;
  line-height: 20px;
  display: block;
}

.cookieConsentContainer .cookieDesc p {
  margin: 0;
  padding: 0;
  color: #FFFFFF;
  font-size: 13px;
  line-height: 20px;
  display: block;
  margin-top: 10px;
}

.cookieConsentContainer .cookieDesc a {
  color: #FFFFFF;
  text-decoration: underline;
}

.cookieConsentContainer .cookieButton a {
  display: inline-block;
  color: #353A40;
  font-size: 14px;
  font-weight: bold;
  margin-top: 14px;
  background: #FED136;
  box-sizing: border-box;
  padding: 15px 24px;
  text-align: center;
  transition: background 0.3s;
}

.cookieConsentContainer .cookieButton a:hover {
  cursor: pointer;
  background: #fff;
  color: #25221E;
}

.cookieTitle a:hover {
  color: #fff !important;
}

@media (max-width: 980px) {
  .cookieConsentContainer {
    bottom: 0px !important;
    left: 0px !important;
    width: 100% !important;
  }
}


</style>