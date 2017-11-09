<template>
    <f7-page name="login" style="background-color:white">
              <f7-navbar title="Login" sliding></f7-navbar>


<!-- LOGIN SCREEN -->
        </br>
            <f7-login-screen-title>Welcome</f7-login-screen-title>
            <!-- Text inputs -->
    <div class="list-block" style="margin:5%">
          <ul>
            <li>
              <div class="item-content">
                <div class="item-media"><i class="icon f7-icons">email</i></div>
                <div class="item-inner">
                  <div class="item-title label">Email</div>
                  <div class="item-input">
                    <input type="text" placeholder="Your Email" v-model="loginEmail">
                  </div>
                </div>
              </div>
            </li>
          </br>
          </br>
           <li>
            <div class="item-content">
              <div class="item-media"><i class="icon f7-icons">lock</i></div>
              <div class="item-inner">
                <div class="item-title label">Password</div>
                <div class="item-input">
                  <input type="password" placeholder="Your Password" v-model="loginPassword">
                </div>
              </div>
            </div>
          </li>
        </ul>
    </div>          
      <p style="text-align:center;margin-top:15%;">Forgot your password?</p>
      <!-- Submit Button -->
      <f7-button style="margin:10%" v-on:click="checkLoginInfo()">Submit</f7-button>
      <div id="wrapper">
      <f7-link href="/register" style="text-align:center;margin-top:15%;">Don't have an account?</f7-link>
      </br>
       </br>
        </br>
         </br> 
      <f7-link href="/quest" style="text-align:center;margin-top:15%;">Or click here to continue without logging in</f7-link>
      </div>
  </f7-page>
</template>

<script>
// Imports
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
var myApp = new Framework7();
var $$ = Dom7;

export default {
  data() {
    return {
      loginEmail: '',
      loginPassword: '',
      userLoggedIn: false,
  }

},
  

  methods:  {
     checkLoginInfo: function()
      {
       
        var loginInfo = 'customers_email='+this.loginEmail+'&customers_password='+this.loginPassword;
        console.log(loginInfo);

        Vue.axios.post('http://35.158.151.255/customer/account/auth/',loginInfo)
            .then(function (response) {
              console.log(response);
              myApp.alert("Sucessfully Logged In, Redirecting");
              // FINALLY FOUND THE WORKING REDIRECT
              f7.mainView.router.load({url: '/quest', animatePages: true})
             
            })
            .catch(function (error) {
              console.log(error);
              myApp.alert(error);
             
            });
         
      },
  },


}
</script>
<style>
/* webkit solution */
::-webkit-input-placeholder { text-align:right; }
/* mozilla solution */
input:-moz-placeholder { text-align:right; }
#wrapper
{
  text-align:center;
  margin-bottom:15%;
}
</style>