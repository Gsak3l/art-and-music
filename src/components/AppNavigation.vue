<template>
  <nav class="navbar navbar-dark navbar-expand-lg fixed-top bg-dark" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="/">Art and Music</a>
      <button
          data-toggle="collapse"
          data-target="#navbarResponsive"
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toogle="collapse"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
      >
        <i class="fa fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="nav navbar-nav ml-auto text-uppercase">
          <li class="nav-item" role="presentation"><a class="nav-link js-scroll-trigger"
                                                      href="/#about">ποιοι ειμαστε</a>
          </li>
          <li class="nav-item" role="presentation"><a class="nav-link js-scroll-trigger" href="/#services">υπηρεσιεσ</a>
          </li>

          <li class="nav-item dropdown">
            <a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">πωληση</a>
            <div class="dropdown-menu" role="menu">
              <a class="dropdown-item" role="presentation" href="/#new-musical-instruments"
                 style="font-size: 13px; font-family: Montserrat, sans-serif"
              >καινουργια μουσικα</a
              ><a class="dropdown-item" role="presentation" href="/#used-musical-instruments"
                  style="font-size: 13px; font-family: Montserrat, sans-serif"
            >μεταχειρισμενα μουσικα οργανα</a
            >
            </div>
          </li>

          <li class="nav-item dropdown">
            <a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">ανταλλακτικα</a>
            <div class="dropdown-menu" role="menu">
              <a class="dropdown-item" role="presentation" href="/#spare-parts"
                 style="font-size: 13px; font-family: Montserrat, sans-serif">εξαρτηματα</a
              ><a class="dropdown-item" role="presentation" href="/#consumables"
                  style="font-size: 13px; font-family: Montserrat, sans-serif">αναλωσιμα</a>
            </div>
          </li>

          <li class="nav-item" role="presentation"><a class="nav-link js-scroll-trigger" href="/tutorials">οδηγιεσ</a>
          </li>
          <li class="nav-item" role="presentation"><a class="nav-link js-scroll-trigger" href="/#contact">επικοινωνια</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: "AppNavigation",
};
</script>

<style scoped></style>
