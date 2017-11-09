<template>
  <f7-page class="bg" @page:beforeremove="pageRemoved" >
    <f7-navbar title="Read" sliding>
    <f7-nav-right>
       <a class="link"> <i class="f7-icons" id="toggle-icon">photos</i></a>   
      </f7-nav-right>
    </f7-navbar>

  <!-- Show select category div -->
    <div id='select-category'>
    <img class='cbutton' id="all" v-on:click="changeToAll" src="/src/images/all.png"/>
    </br>
    <img class='cbutton' id="health" v-on:click="changeToHealth" src="/src/images/health.png"/>
    </br>
    <img class='cbutton' id="moves" v-on:click="changeToMoves" src="/src/images/moves.png"/>
    </br>
    <img class='cbutton' id="mindset" v-on:click="changeToMindset" src="/src/images/mindset.png"/>
    </br>
    <img class='cbutton' id="wellbeing" v-on:click="changeToWellbeing" src="/src/images/wellbeing.png"/>
    </br>
    <img class='cbutton' id="travel" v-on:click="changeToTravel" src="/src/images/travel.png"/>
    </br>
    <img class='cbutton' id="technology" v-on:click="changeToTechnology" src="/src/images/technology.png"/>  
    </br>
    </div>  

        <!-- PAGE CONTENT -->
    
      </br>
      <div class="content-block-title article-block" id='article-type'>ALL ARTICLES</div>

              <div class="card demo-card-header-pic" v-for="post in category"> 
              <div v-bind:style="{ backgroundImage: 'url(' + post.image + ')' }" style="color:#fff;  text-shadow: 2px 2px #000;" valign="bottom" class="card-header color-white no-border">{{post.title.rendered}}</div>
              <div class="card-content">
              <div class="card-content-inner">
              <p class="color-gray">{{post.date }}</p>
              <div id='article-content'></div>
              </div>
              </div>
              <div class="card-footer">
              <f7-link :href="'/article/'+ post.id" link-view="#main-view" class="link">Read more</f7-link>
              </div>
              </div>
            </div>  



    <btoolbar></btoolbar>
  </f7-page>
</template>

<script>
var $ = window.jQuery = require('jquery')
import BottomToolbar from '../pages/bottom-toolbar.vue'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
var myApp = new Framework7();
var $$ = Dom7;
myApp.onPageInit('*', function (page) {
  console.log(page.name + ' initialized'); 
});
export default {
  
  components: {
    btoolbar: BottomToolbar,

  },

  data() {
          return {
            category: [],
            description: [],
          
          }
  },
   methods:  {

      // Make buttons gray
      changeToAll: function()
      {
       
       
        Vue.axios.get('https://guryou.com/wp-json/wp/v2/posts').then((response) => {
        console.log(response.data);
        this.category = response.data;
       
         });
        document.getElementById("article-type").innerHTML = "All Articles";
        document.getElementById("all").style.opacity = 1;
        document.getElementById("health").style.opacity = 1;
        document.getElementById("moves").style.opacity = 1;
        document.getElementById("mindset").style.opacity = 1;
        document.getElementById("wellbeing").style.opacity = 1;
        document.getElementById("travel").style.opacity = 1;
        document.getElementById("technology").style.opacity = 1;
         
      },
       changeToHealth: function()
      {
       
        Vue.axios.get('https://guryou.com/wp-json/wp/v2/posts?categories=102').then((response) => {
        console.log(response.data);
        this.category = response.data;
         });
        document.getElementById("article-type").innerHTML = "Health";
        document.getElementById("all").style.opacity = 0.2;
        document.getElementById("health").style.opacity = 1;
        document.getElementById("moves").style.opacity = 0.2;
        document.getElementById("mindset").style.opacity = 0.2;
        document.getElementById("wellbeing").style.opacity = 0.2;
        document.getElementById("travel").style.opacity = 0.2;
        document.getElementById("technology").style.opacity = 0.2;
      },
       changeToMoves: function()
      {
       
        Vue.axios.get('https://guryou.com/wp-json/wp/v2/posts?categories=100').then((response) => {
        console.log(response.data);
        this.category = response.data;
         });
        document.getElementById("article-type").innerHTML = "Moves";
        document.getElementById("all").style.opacity = 0.2;
        document.getElementById("health").style.opacity = 0.2;
        document.getElementById("moves").style.opacity = 1;
        document.getElementById("mindset").style.opacity = 0.2;
        document.getElementById("wellbeing").style.opacity = 0.2;
        document.getElementById("travel").style.opacity = 0.2;
        document.getElementById("technology").style.opacity = 0.2;
      },
       changeToMindset: function()
      {
       
        Vue.axios.get('https://guryou.com/wp-json/wp/v2/posts?categories=105').then((response) => {
        console.log(response.data);
        this.category = response.data;
         });
         document.getElementById("article-type").innerHTML = "Mindset";
        document.getElementById("all").style.opacity = 0.2;
        document.getElementById("health").style.opacity = 0.2;
        document.getElementById("moves").style.opacity = 0.2;
        document.getElementById("mindset").style.opacity = 1;
        document.getElementById("wellbeing").style.opacity = 0.2;
        document.getElementById("travel").style.opacity = 0.2;
        document.getElementById("technology").style.opacity = 0.2;
      },
       changeToWellbeing: function()
      {
       
        Vue.axios.get('https://guryou.com/wp-json/wp/v2/posts?categories=109').then((response) => {
        console.log(response.data);
        this.category = response.data;
         });
        document.getElementById("article-type").innerHTML = "Wellbeing";
        document.getElementById("all").style.opacity = 0.2;
        document.getElementById("health").style.opacity = 0.2;
        document.getElementById("moves").style.opacity = 0.2;
        document.getElementById("mindset").style.opacity = 0.2;
        document.getElementById("wellbeing").style.opacity = 1;
        document.getElementById("travel").style.opacity = 0.2;
        document.getElementById("technology").style.opacity = 0.2;
      },
       changeToTravel: function()
      {
      
        Vue.axios.get('https://guryou.com/wp-json/wp/v2/posts?categories=118').then((response) => {
        console.log(response.data);
        this.category = response.data;
         });
         document.getElementById("article-type").innerHTML = "Travel & Tourism";
        document.getElementById("all").style.opacity = 0.2;
        document.getElementById("health").style.opacity = 0.2;
        document.getElementById("moves").style.opacity = 0.2;
        document.getElementById("mindset").style.opacity = 0.2;
        document.getElementById("wellbeing").style.opacity = 0.2;
        document.getElementById("travel").style.opacity = 1;
        document.getElementById("technology").style.opacity = 0.2;
      },
       changeToTechnology: function()
      {
       
       
        Vue.axios.get('https://guryou.com/wp-json/wp/v2/posts?categories=117').then((response) => {
        console.log(response.data);
        this.category = response.data;
         });
         document.getElementById("article-type").innerHTML = "Technology";
        document.getElementById("all").style.opacity = 0.2;
        document.getElementById("health").style.opacity = 0.2;
        document.getElementById("moves").style.opacity = 0.2;
        document.getElementById("mindset").style.opacity = 0.2;
        document.getElementById("wellbeing").style.opacity = 0.2;
        document.getElementById("travel").style.opacity = 0.2;
        document.getElementById("technology").style.opacity = 1;
      },
      pageRemoved: function()
      {
        console.log("Page is removed");
      }
      
    },
    
  mounted: function()
  {
    $(function() {
      $('#select-category').hide();
      $("#toggle-icon").click(function(){
      $("#select-category").fadeToggle("fast");
        });
    });
    
  },


  created:function()
  {
    this.changeToAll();
  }
  
}
</script>
<style>
#select-category
{
  float:right;
  text-align: right;
  z-index: 5;
  position: relative;

}
.cbutton
{
    
  margin-top:5%;
  width:35%;
  height:35%;

}
.demo-card-header-pic .card-header {
  height: 40vw;
  background-size: cover;
  background-position: center;
}
.article-block
{
  z-index: 3;
  
}
</style>