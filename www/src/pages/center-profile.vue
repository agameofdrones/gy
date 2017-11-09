<template>

 
  <f7-page class="center-bg">
    <f7-navbar v-bind:title="this.profile_name" back-link="Back" sliding>
    <f7-nav-right>
       <f7-link :href="'/map/'+ this.$route.params.id" class="link"> <i class="f7-icons">compass</i></f7-link>   
      </f7-nav-right>
    </f7-navbar>
   
      <div class="image">        
                      <img src="../src/images/center3.jpg" class="image-binder">
                        <h2 class="new title"><span>{{this.profile_name}}</span></h2>
      </div>
  
      <f7-block-title>About</f7-block-title>
      <f7-card v-bind:content="this.profile_description"></f7-card>

      <f7-block-title>Services</f7-block-title>
      <div class="card" v-for='categ in category'>
        <div class="card-header">{{categ.categories_name}}</div>
        <div class="card-content">
          <div class="card-content-inner">{{categ.services_name}} </br>Duration: {{categ.services_resolution}} {{categ.services_time_unit}}s</div>
        </div>
        <div class="card-footer"><f7-button>Reserve</f7-button></div>
      </div>
      </br>


      <f7-block-title>Reviews</f7-block-title>
       <f7-card >
       <div class="star-card">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
       </div>
       </f7-card>
      
  </f7-page>

</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLocalStorage from 'vue-localstorage'
export default {
  data() {
   return {
     cards: [],
     category: [],
     profile_name:'',
     profile_description: '',
     profile_image: '',
     profile_latitude: '',
     profile_longitude: '',    
     profile_working_hours: '',
     profile_email: '',
     profile_phone: '',
    
         
   }

  },

  created:function()
  {
    this.getProviderInfo();
    this.getServices();
  },

  methods: {
    getProviderInfo: function()
     {
        Vue.axios.get('http://35.158.151.255/public/providers/'+this.$route.params.id).then((response) => {
        console.log(response.data.data[0]);
        this.cards = response.data.data[0];

                this.profile_name = this.cards.providers_name;
                this.profile_description = this.cards.providers_description;
                this.profile_working_hours = this.cards.providers_time;
                this.profile_email = this.cards.providers_email;
                this.profile_image = '../images/center3.jpg';
                this.profile_phone = this.cards.providers_phone;
                Vue.localStorage.set('Platitude', this.cards.providers_latitude);
                Vue.localStorage.set('Plongitude', this.cards.providers_longitude);
        });
     },

      getServices: function()
     {
        Vue.axios.get('http://35.158.151.255/public/providers/'+this.$route.params.id+'/services/').then((response) => {
       
        this.category = response.data.data;
         

        });
     },

  },

}
</script>
<style>
.image { 
   position: relative; 
   width: 100%; /* for IE 6 */
  
}
.image-binder
{
  width:100%;
  
}
.center-bg.page {
 
  background-image: url("/src/images/lightblue.jpg");
  background-size:     cover;                     
  background-repeat:   no-repeat;
  background-position: center center; 

  
}
.checked {
   
    color: orange;
}
.star-card
{
  margin-left:5%;
}
.title { 
   position: absolute; 
   top: 0px; 
   left: 0; 
   width: 100%; 
}
</style>