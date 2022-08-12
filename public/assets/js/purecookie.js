// --- Config --- //
const pureCookieTitle = "Cookies."; // Title
const pureCookieDesc = "Η ιστοσελίδα μας χρησιμοποιεί cookies και άλλες τεχνολογίες για να μπορέσουμε να βελτιώσουμε την εμπειρία σας κατά την επίσκεψη σας. Συνεχίζοντας την περιήγηση στον ιστότοπό μας, συμφωνείτε με τη χρήση τους."; // Description
const pureCookieLink = '<a href="/cookies" target="_blank">Για ποιο λόγο;</a>'; // Cookiepolicy link
const pureCookieButton = "Καταλαβαίνω"; // Button text
// ---        --- //


function pureFadeIn(elem, display) {
    let el = document.getElementById(elem);
    el.style.opacity = 0;
    el.style.display = display || "block";

    (function fade() {
        let val = parseFloat(el.style.opacity);
        if (!((val += .02) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
}

function pureFadeOut(elem) {
    const el = document.getElementById(elem);
    el.style.opacity = 1;

    (function fade() {
        if ((el.style.opacity -= .02) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

function cookieConsent() {
    if (!getCookie('pureCookieDismiss')) {
        document.getElementById('cookie-div').innerHTML = '<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><a>' + pureCookieTitle + '</a></div><div class="cookieDesc"><p>' + pureCookieDesc + ' ' + pureCookieLink + '</p></div><div class="cookieButton"><a onClick="pureCookieDismiss();">' + pureCookieButton + '</a></div></div>';
        pureFadeIn("cookieConsentContainer");
    }
}

function pureCookieDismiss() {
    setCookie('pureCookieDismiss', '1', 7);
    pureFadeOut("cookieConsentContainer");
}

window.onload = function () {
    cookieConsent();
};