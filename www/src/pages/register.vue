<template>
    <f7-page style="background-color:white">
    <f7-navbar title="Register" back-link="Back" sliding></f7-navbar>
        <!-- Register SCREEN -->  
        </br>
            <f7-login-screen-title>Register</f7-login-screen-title>

                    <!-- Text inputs -->
    <div class="list-block" style="margin:5%">
          <ul>
            <li>
              <div class="item-content">
                <div class="item-media"><i class="icon f7-icons">person</i></div>
                <div class="item-inner">
                  <div class="item-title label">Name</div>
                  <div class="item-input">
                    <input type="text" placeholder="Your Name" v-model='registerName'>
                  </div>
                </div>
              </div>
            </li>
          </br>
           <li>
            <div class="item-content">
              <div class="item-media"><i class="icon f7-icons">home</i></div>
              <div class="item-inner">
                <div class="item-title label">Address</div>
                <div class="item-input">
                  <input type="text" placeholder="Your Address" v-model='registerAddress'>
                </div>
              </div>
            </div>
          </li>
          </br>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon f7-icons">paper_plane</i></div>
              <div class="item-inner">
                <div class="item-title label">City</div>
                <div class="item-input">
                  <input type="text" placeholder="Your City" v-model='registerCity'>
                </div>
              </div>
            </div>
          </li>
          </br>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon f7-icons">box</i></div>
              <div class="item-inner">
                <div class="item-title label">Postcode</div>
                <div class="item-input">
                  <input type="number" placeholder="Your Postcode" v-model='registerPostcode'>
                </div>
              </div>
            </div>
          </li>
          </br>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon f7-icons">world</i></div>
              <div class="item-inner">
                <div class="item-title label">Country</div>
                <div class="item-input">
                  <input type="text" placeholder="Your Country" v-model='registerCountry'>
                </div>
              </div>
            </div>
          </li>
           </br>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon f7-icons">phone</i></div>
              <div class="item-inner">
                <div class="item-title label">Phone</div>
                <div class="item-input">
                  <input type="number" placeholder="Your Phone" v-model='registerPhone'>
                </div>
              </div>
            </div>
          </li>
           </br>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon f7-icons">email</i></div>
              <div class="item-inner">
                <div class="item-title label">Email</div>
                <div class="item-input">
                  <input type="email" placeholder="Your Email" v-model='registerEmail'>
                </div>
              </div>
            </div>
          </li>
           </br>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon f7-icons">lock</i></div>
              <div class="item-inner">
                <div class="item-title label">Password</div>
                <div class="item-input">
                  <input type="password" placeholder="Your Password" v-model='registerPassword'>
                </div>
              </div>
            </div>
          </li>
        </ul>
    </div> 
       <f7-button style="margin:10%;" v-on:click='checkRegisterInfo'>Register</f7-button>

  </f7-page>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
var myApp = new Framework7();
var $$ = Dom7;

export default {
 data() {
    return {
      registerName: '',
      registerAddress: '',
      registerCity: '',
      registerPostcode: '',
      registerCountry: '',
      registerTags: '',
      registerPhone: '',
      registerEmail: '',
      registerPassword: '',

  }

},
  methods: {
      checkRegisterInfo: function(){
        var registerInfo = 'customers_name='+this.registerName+'&customers_address='+this.registerAddress+'&customers_city='+this.registerCity+'&customers_postcode='+this.registerPostcode+'&customers_country='+this.registerCountry+'&customers_tags='+this.registerTags+'&customers_phone='+this.registerPhone+'&customers_email='+this.registerEmail+'&customers_password='+this.registerPassword;
        console.log(registerInfo);
        if(!this.registerName || !this.registerAddress || !this.registerCity || !this.registerPostcode || !this.registerCountry || !this.registerTags || !this.registerPhone || !this.registerPhone || !this.registerEmail || !this.registerPassword)
        {
          myApp.alert("Please fill in all the required fields");
        }
        Vue.axios.post('http://35.158.151.255/public/customers',registerInfo)
            .then(function (response) {
              
              myApp.alert("Sucessfully Registered, , Redirecting");
              // FINALLY FOUND THE WORKING REDIRECT
              f7.mainView.router.load({url: '/quest', animatePages: true})
            })
            .catch(function (error) {
              console.log(error);
              if(error == 400)
              {
                  myApp.alert("400 ERROR");
              }
              
             
            });
      },
  },


}
</script>