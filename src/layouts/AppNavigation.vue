<template>
  <nav
      class="navbar navbar-dark navbar-expand-lg fixed-top bg-dark"
      id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="/#">Art and Music</a>
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
          <div v-for="item in menu_items" :key="item.id">
            <li class="nav-item" role="presentation" v-if="!item.drop">
              <a class="nav-link js-scroll-trigger" :href="item.link">{{
                  item.text
                }}</a>
            </li>
            <li class="nav-item dropdown" v-else>
              <a
                  class="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  :href="item.link"
              >{{ item.text }}</a
              >
              <div class="dropdown-menu" role="menu">
                <a
                    v-for="drop_item in item.drop_items"
                    :key="drop_item.id"
                    class="dropdown-item"
                    role="presentation"
                    :href="drop_item.link"
                    style="font-size: 13px; font-family: Montserrat, sans-serif"
                >{{ drop_item.text }}</a
                >
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      menu_items: [
        {text: "ποιοι ειμαστε", link: "/#about", drop: false},
        {
          text: "υπηρεσιεσ",
          link: "#",
          drop: true,
          drop_items: [
            {
              text: "επισκευη",
              link: "/repairs",
              drop: false,
            },
            {
              text: "συντηρηση & σερβις",
              link: "/maintenance",
              drop: false,
            },
            {
              text: "τεχνικη εργασια",
              link: "/technical",
              drop: false,
            },
          ],
        },
        {
          text: "πωληση",
          link: "#",
          drop: true,
          drop_items: [
            {
              text: "καινουργια μουσικα",
              link: "/#new-musical-instruments",
              drop: false,
            },
            {
              text: "μεταχειρισμενα μουσικα οργανα",
              link: "/#used-musical-instruments",
              drop: false,
            },
          ],
        },
        {
          text: "ανταλλακτικα",
          link: "#",
          drop: true,
          drop_items: [
            {text: "εξαρτηματα", link: "/#spare-parts", drop: false},
            {text: "αναλωσιμα", link: "/#consumables", drop: false},
          ],
        },
        {text: "οδηγιεσ", link: "/tutorials", drop: false},
        {text: "επικοινωνια", link: "/#contact", drop: false},
      ],
    };
  },
};
</script>


<style scoped></style>