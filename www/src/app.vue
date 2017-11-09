<template>
  <!-- App -->
  <div id="app">
  
    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>



    <!-- Right Panel -->
    <f7-panel right cover layout="light">
      <f7-view id="right-panel-view" navbar-through :dynamic-navbar="true">
        <f7-navbar v-if="$theme.ios" title="Guryou" sliding></f7-navbar>
        <f7-pages>
          <f7-page>
            <f7-navbar v-if="$theme.material" title="Guryou" sliding></f7-navbar>
            <f7-block>
              <p>Right panel content goes here</p>
            </f7-block>
            
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" v-if="!this.userLoggedIn" main url="/login/" navbar-through :dynamic-navbar="true" main></f7-view>
      <f7-view id="main-view" v-if="this.userLoggedIn" main url="/quest/" navbar-through :dynamic-navbar="true" main></f7-view>
    </f7-views>


    

    <!-- Login Screen -->
    <f7-login-screen id="login-screen">
      <f7-view>
        <f7-pages>
          <f7-page login-screen>
            <f7-login-screen-title>Login</f7-login-screen-title>
            <f7-list form>
              <f7-list-item>
                <f7-label>Username</f7-label>
                <f7-input name="username" placeholder="Username" type="text"></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-label>Password</f7-label>
                <f7-input name="password" type="password" placeholder="Password"></f7-input>
              </f7-list-item>
            </f7-list>
            <f7-list>
              <f7-list-button title="Sign In" close-login-screen></f7-list-button>
              <f7-list-label>
                <p>Click Sign In to close Login Screen</p>
              </f7-list-label>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-login-screen>
    
  </div>
  
</template>

<script>

import BottomToolbar from './pages/bottom-toolbar.vue'
import Vue from 'vue'
import Carousel from 'vue-carousel'
import axios from 'axios'
import VueAxios from 'vue-axios'
export default {
  data: function(){
    return {
      userLoggedIn: false,
    }
  }


}
</script>
<style>
input[type="text"]:-moz-placeholder {
    text-align: right;
}
input[type="text"]:-ms-input-placeholder {
    text-align: right;
}
input[type="text"]::-webkit-input-placeholder {
    text-align: right;
}
.input-margins
{
  margin-top:5%;
  margin-bottom:5%;
  
}
div.polaroid {
  width: 250px;
  margin-top:5%;
  margin-bottom:5%;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  text-align: center;
}
.card
{
  
  
  
}
.card-header
{
  color:white;
  text-shadow: 2px 2px #000;
}

div.container {
  padding: 10px;
}
.img-circle {
   
    width: 60px;
    height: 60px;
    border-radius: 50%;    
    box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3); 
    float:left;
}
.ask-cards
{
  text-align:center;
}
.circle {
  margin-right:20%;
  margin-top:5%;
  margin-bottom:5%;
  display: block;
  width: 100px;
  height: 100px;
  margin: 1em auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-border-radius: 99em;
  -moz-border-radius: 99em;
  border-radius: 99em;
  border: 5px solid #eee;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3);  
}
.row
{
  margin-left:2%;
  margin-right:2%;
}
.slider-margins
{
  margin-right:2%;
}
.demo-card-header-pic .card-header {
    height: 40vw;
    background-size: cover;
    background-position: center;
  }
.image { 
   position: relative; 
   width: 100%; /* for IE 6 */
   

}

h2 span { 
   color: white; 
   font: bold 22px/45px Helvetica, Sans-Serif; 
   letter-spacing: 1px;  
   background: rgb(0, 0, 0); /* fallback color */
   background: rgba(0, 0, 0, 0.4);
   padding: 10px; 
}
.bg.page {
 
  background-image: url("/src/images/lightblue.jpg");
  background-size:     cover;                     
  background-repeat:   no-repeat;
  background-position: center center; 

  
}
.content-block-title
{
  color:white;
}
</style>