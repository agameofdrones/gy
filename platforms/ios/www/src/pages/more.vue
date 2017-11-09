<template>
    <f7-page class="bg">
              <f7-navbar title="More" sliding></f7-navbar>

                <f7-list class="list-items">
                <f7-list-item title="Login" link="/login/"></f7-list-item>
                </f7-list>
                </br>
                <f7-list class="list-items">
                <f7-list-item title="Register" link="/register/"></f7-list-item>
                </f7-list>
                </br>
                <f7-list class="list-items">
                <f7-list-item title="About" link="/about/"></f7-list-item>
                </f7-list>


                <!--Bottom Toolbar -->
                 <btoolbar></btoolbar>
    </f7-page>
</template>
<script>
import BottomToolbar from '../pages/bottom-toolbar.vue'
import Vue from 'vue'
export default {
  components: {
    btoolbar: BottomToolbar,
  },
  data: function(){
      return {

      }
  },
  methods: {

  }
}
</script>
<style>
.list-items
{
    margin:5%;
}
</style>