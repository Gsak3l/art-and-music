<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-4"><span class="copyright">Copyright&nbsp;© Art and Music 2022</span></div>
        <div class="col-md-4">
          <ul class="list-inline social-buttons">
            <li class="list-inline-item">
              <a href="https://www.facebook.com/ArtAndMusicLamprinidisDimitris">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="mailto:lamprinidis@artandmusic.gr"><i class="far fa-envelope"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="tel:6934690502"><i class="fa fa-phone"></i></a>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <ul class="list-inline quicklinks">
            <li class="list-inline-item"><a href="/terms">Όροι Χρήσης</a></li>
            <li class="list-inline-item"><a href="/policy">Πολιτική Απορρήτου</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>


<script>
export default {
  name: "AppFooter"
}
</script>

<style scoped>
.list-inline.quicklinks  a{
  color: #353a40;
  font-weight: 100;
}
</style>