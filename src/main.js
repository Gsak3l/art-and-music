import DefaultLayout from '~/layouts/Default.vue'

import '~/assets/fonts/fontawesome-all.min.css'
import '~/assets/bootstrap/css/bootstrap.min.css'
import '~/assets/fonts/font-awesome.min.css'
import '~/assets/fonts/fontawesome5-overrides.min.css'
import '~/assets/css/purecookie.css'

import '~/assets/js/main.js'
// import '~/assets/js/jquery.min.js'
// import '~/assets/bootstrap/js/bootstrap.min.js'
// import '~/assets/js/purecookie.js'
// import '~/assets/js/agency.js'

export default function (Vue, {router, head, isClient}) {
    head.link.push({rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Aclonica'})
    head.link.push({rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Kaushan+Script'})
    head.link.push({rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700'})
    head.link.push({rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700'})
    head.link.push({rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'})
    head.link.push({rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700'})
    head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic'
    })


    // External CDNs
    head.script.push({
        src: 'https://code.jquery.com/jquery-3.6.0.min.js',
        body: true
    })
    head.script.push({
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js',
        body: true
    })
    head.script.push({
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-159914484-1',
        body: true
    })
    head.script.push({
        src: 'https://unpkg.com/vue/dist/vue.jsgr',
        body: true
    })
    head.script.push({
        src: 'https://unpkg.com/vue-cookies@1.8.1/vue-cookies.js',
        body: true
    })


    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
}
