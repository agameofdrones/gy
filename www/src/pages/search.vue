<template>
  <f7-page class="bg">
    <f7-navbar title="Search" back-link="Back" sliding>
      <f7-nav-right>
       <a href="/search-map/" class="link"> <i class="f7-icons" >compass</i></a>   
      </f7-nav-right>
    </f7-navbar>

        <div class="top-image">
            </br>
            <f7-list form style="margin-left:10%;margin-right:10%;">
            <f7-list-item>
            <f7-input type="text" placeholder="Name"/ v-model="filterInput">
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
          
           
            <!-- Search Results -->
                <f7-block-title>Search Results</f7-block-title>
                

                    <div class="card demo-card-header-pic" v-for="center in centers,filterInput">
                        <div style="background-image:url(../src/images/center3.jpg)" valign="bottom" class="card-header color-white no-border">{{center.providers_name}}</div>
                            <div class="card-content">
                                <div class="card-content-inner">
                                <p class="color-gray">Center services</p>
                                <p>{{center.providers_description}}</p>
                                </div>
                            </div>
                                <div class="card-footer">
                                     <f7-link v-bind:href="'/center-profile/'+ center.providers_id" link-view="#main-view" class="link">Read more</f7-link>                                
                        </div>
                    </div>

                 </f7-block>


  </f7-page>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
var myApp = new Framework7({});
var $$ = Dom7;

export default {

      data: function() {
          return {

            centers:[],
            
          }
       },

  methods:{
      listCenters: function()
          {
              Vue.axios.get('http://35.158.151.255/public/providers/').then((response) => {
              console.log(response.data);
              this.centers = response.data.data;
              });
          },

  },
  created:function(){
      this.listCenters();
    },


}
</script>
<style>
  .demo-card-header-pic .card-header {
    height: 40vw;
    background-size: cover;
    background-position: center;
  }
</style>