<template>
    <f7-page class="bg">
              <f7-navbar title="Ask"  sliding></f7-navbar>
              <!-- Page Content -->
        <div class="quote" v-for="question in questions">
        <img class="img-circle" src="../src/images/professional1.jpg"/>
        <div class="speech-bubble left">
          <p>
          {{question.customers_name}}
            <span class="time-ago">
                {{question.questions_created}}
            </span>
          </p>
          <blockquote>
         <h3>{{question.questions_content}} </h3>
          </blockquote>
          <f7-button v-bind:href="'/answers/'+question.questions_id" style="margin-left:15%;margin-right:15%;margin-top:2%;margin-bottom:2%">Reply</f7-button>
        </div>
      </div>
                              
                 <!--Bottom toolbar -->
        <btoolbar> </btoolbar>
    </f7-page>
</template>
<script>
import Vue from 'vue'
import VueLocalStorage from 'vue-localstorage'
import BottomToolbar from './bottom-toolbar.vue'
export default {
     data() {
          return {
            questions: [],
          }
      },
  components:{
    btoolbar: BottomToolbar,
  },
     created:function(){
  
    
    this.getQuestions();
    
  },
   methods:  {

     getQuestions: function()
     {
        Vue.axios.get('http://35.158.151.255/public/questions/').then((response) => {
        
        this.questions = response.data.data;
        console.log(this.questions);  

        });
     },


  },

}
</script>
<style>


</style>