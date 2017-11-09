<template>
  <f7-page>
    <f7-navbar title="Reservations" sliding></f7-navbar>
    </br>
     <vue-event-calendar :events="demoEvents">
      <template scope="props">
        <div style="margin-bottom:10%" v-for="(event, index) in props.showEvents" class="event-item">
        <h3 style="margin-bottom:5%">{{event.desc}} </h3>
        <p style="color:gray; margin-bottom:5%">{{event.date}}</p>
        <f7-button style="margin-left:20%;margin-right:20%">Cancel</f7-button>
        </div>
      </template>
    </vue-event-calendar>

    <!--Bottom Toolbar -->
        <btoolbar></btoolbar>

  </f7-page>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vueEventCalendar from 'vue-event-calendar'
import BottomToolbar from '../pages/bottom-toolbar.vue'
export default {
  data () {
    return {
      demoEvents: [{
        date: '2017/11/15',
        title: 'eat',
        desc: 'event 1'
      },
      {
        date: '2017/11/12',
        title: 'this is a title',
        desc: "drink",
      },
      {
        date: '2017/11/16',
        title: 'eat',
        desc: 'event 2'
      },
      {
        date: '2017/11/17',
        title: 'eat',
        desc: 'event 3'
      },
      ]
    }
  },
  components: {
    btoolbar: BottomToolbar,
  },
}
</script>