// Import Vue
import Vue from 'vue'

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './app.vue'




import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLocalStorage from 'vue-localstorage'
import VueCarousel from 'vue-carousel'
import vueEventCalendar from 'vue-event-calendar'
Vue.use(vueEventCalendar, {locale: 'en'}) // locale = language
Vue.use(VueAxios, axios)
// Init F7 Vue Plugin
Vue.use(Framework7Vue)
Vue.use(VueCarousel)
Vue.use(VueLocalStorage)

var $$ = Dom7;

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: Routes,
    

  },
  // Register App Component
  components: {
    app: App
  }
});
