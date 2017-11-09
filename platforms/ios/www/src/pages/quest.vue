<template>
    <f7-page class="bg">
    <f7-navbar title="Quest" sliding></f7-navbar>
        
    <div class="top-image">
    
    
    </br>
    <f7-list form style="margin-left:10%;margin-right:10%;">
    <f7-list-item>
      <f7-input type="text" placeholder="Name"/>
    </f7-list-item>
    </f7-list>
    <f7-list form style="margin-left:10%;margin-right:10%;">
     <f7-list-item smart-select title="Category" smart-select-open-in="picker">
    <!-- Select with values inside -->
    <select name="category">
      <option value="apple" selected>Category 1</option>
    </select>
    
  </f7-list-item>
  </br>
  <f7-button href="/search" class="button active" style="margin-left:10%;margin-right:10%;margin-bottom:5%;">Search</f7-button>
  
  </f7-list>
  
    </div>

              
            
             <!-- List centers block -->
           <div style="clear: both">
              <p style="float: left; margin:5%;color:white;">CENTERS</p>
              <f7-link href="/search" style="float: right; margin:5%;color:white;">SEE ALL ></f7-link>
          </div>
          <div>
          </br>
          </br>
          </br>
            <carousel :paginationEnabled="false">
             <slide>                
            <div class="card demo-card-header-pic ">
                    <div v-bind:style="{ backgroundImage: 'url(' + '/src/images/center2.jpg' + ')' }" valign="bottom" class="card-header color-white no-border">{{this.center0.providers_name}}</div>
                    <div class="card-content">
                      <div class="card-content-inner">
                        <p class="color-gray">Short description ...</p>
                          <f7-link :href="'/center-profile/'+ this.cid0" link-view="#main-view" class="link">Read more</f7-link>
                      </div>
                    </div>
              </div>
               </slide>
               <slide>
               <div class="card demo-card-header-pic ">
                    <div v-bind:style="{ backgroundImage: 'url(' + '/src/images/center3.jpg' + ')' }" valign="bottom" class="card-header color-white no-border">{{this.center1.providers_name}}</div>
                    <div class="card-content">
                      <div class="card-content-inner">
                        <p class="color-gray">Short description ...</p>
                          <f7-link :href="'/center-profile/'+ this.cid1" link-view="#main-view" class="link">Read more</f7-link>
                      </div>
                    </div>
              </div>
               </slide>
               <slide>
               <div class="card demo-card-header-pic ">
                    <div v-bind:style="{ backgroundImage: 'url(' + '/src/images/center4.jpg' + ')' }" valign="bottom" class="card-header color-white no-border">{{this.center2.providers_name}}</div>
                    <div class="card-content">
                      <div class="card-content-inner">
                        <p class="color-gray">Short description ...</p>
                          <f7-link :href="'/center-profile/'+ this.cid2" link-view="#main-view" class="link">Read more</f7-link>
                      </div>
                    </div>
              </div>
               </slide>
              </carousel>
            </div>

          <!-- Read block -->
          <div style="clear: both">
              <p style="float: left; margin:5%;color:white;">READ</p>
              <f7-link href="/read" style="float: right; margin:5%;color:white;">SEE ALL ></f7-link>
          </div>
          </br>
          </br>
          </br>
            <carousel :paginationEnabled="false">
             <slide>                
            <div class="card demo-card-header-pic ">
                    <div v-bind:style="{ backgroundImage: 'url(' + '/src/images/professional1.jpg' + ')' }" valign="bottom" class="card-header color-white no-border">{{this.title0}}</div>
                    <div class="card-content">
                      <div class="card-content-inner">
                        <p class="color-gray">Short description ...</p>
                          <f7-link :href="'/article/'+ this.id0" link-view="#main-view" class="link">Read more</f7-link>
                      </div>
                    </div>
              </div>
               </slide>
               <slide>
               <div class="card demo-card-header-pic ">
                    <div v-bind:style="{ backgroundImage: 'url(' + '/src/images/professional2.jpg' + ')' }" valign="bottom" class="card-header color-white no-border">{{this.title1}}</div>
                    <div class="card-content">
                      <div class="card-content-inner">
                        <p class="color-gray">Short description ...</p>
                          <f7-link :href="'/article/'+ this.id1" link-view="#main-view" class="link">Read more</f7-link>
                      </div>
                    </div>
              </div>
               </slide>
               <slide>
               <div class="card demo-card-header-pic ">
                    <div v-bind:style="{ backgroundImage: 'url(' + '/src/images/professional3.jpg' + ')' }" valign="bottom" class="card-header color-white no-border">{{this.title2}}</div>
                    <div class="card-content">
                      <div class="card-content-inner">
                        <p class="color-gray">Short description ...</p>
                          <f7-link :href="'/article/'+ this.id2" link-view="#main-view" class="link">Read more</f7-link>
                      </div>
                    </div>
              </div>
               </slide>
              </carousel>

            <!--Ask block  -->
            <f7-block-title>Ask</f7-block-title>
                        <div class="card">
                          <div class="card-header">Have a question?</div>
                          <div class="card-content">
                            <div class="card-content-inner" ><f7-list><f7-list-item link="/ask-question">ASK QUESTION</f7-list-item></f7-list></div>
                          </div>
                        </div>

             <!--Most popular services block  -->
             <f7-block-title>Most popluar services</f7-block-title>
            <div class="card" style="margin-bottom:10%;">   
              <div class="card-content">
                  <div class="card-content-inner">
                      <div class="row">
                        <img class="circle" src="../src/images/professional1.jpg"/>
                        <img class="circle" src="../src/images/professional1.jpg"/>
                        <img class="circle" src="../src/images/professional1.jpg"/>
                        <img class="circle" src="../src/images/professional1.jpg"/>
                        <img class="circle" src="../src/images/professional1.jpg"/>
                        <img class="circle" src="../src/images/professional1.jpg"/>
                    </div>
               </div>
            </div>
        </div>
        </br>
        <!--Bottom Toolbar -->
          <btoolbar></btoolbar>
          
          </f7-page>
</template>
<script>

import BottomToolbar from '../pages/bottom-toolbar.vue'
import Vue from 'vue'
import { Carousel, Slide } from 'vue-carousel';
import axios from 'axios'
import VueAxios from 'vue-axios'
export default {
  components: {
    btoolbar: BottomToolbar,
    Carousel,
    Slide,
  },
  data: function()  {
          return {
            article0: [],
            id0: "",
            article1: [],
            id1: "",
            article2: [],
            id2: "",
            article3: [],
            id3: "",
            center0: [],
            cid0: "",
            center1: [],
            cid1: "",
            center2: [],
            cid2: "",
            center3: [],
            cid3: "",
          }
      },
  methods: {
    getAllArticles: function()
    {
      Vue.axios.get('https://guryou.com/wp-json/wp/v2/posts').then((response) => {
        
        this.article0 = response.data[0];

        this.title0 = response.data[0].title.rendered;
        this.id0 = response.data[0].id;
        this.article1 = response.data[1];
        this.title1 = response.data[1].title.rendered;
        this.id1 = response.data[0].id;
        this.article2 = response.data[2];
        this.title2 = response.data[2].title.rendered;
        this.id2 = response.data[0].id;
        this.article3 = response.data[3];
        this.title3 = response.data[3].title.rendered;
        this.id3 = response.data[0].id;
       
         });
    },
    getAllCenters: function()
    {
      Vue.axios.get('http://35.158.151.255/public/providers/').then((response) => {
       this.center0 = response.data.data[0];
      
       this.cid0 = response.data.data[0].providers_id;
       this.center1 = response.data.data[1];
       this.cid1 = response.data.data[1].providers_id;
       this.center2 = response.data.data[2];
       this.cid2 = response.data.data[2].providers_id;
       this.center3 = response.data.data[3];
       this.cid3 =response.data.data[3].providers_id;
          
        
        });
    },
  },
  created: function()
  {
    this.getAllArticles();
   
    this.getAllCenters();
  }


}
</script>
<style>
.top-image
{
   width:100%;
   height:40%;
   box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3); 
   background-image: url('/src/images/form-background.png');
   background-repeat: no-repeat;
}
.see-all-btn
{
  text-align: right;
}

</style>