<template>
  <f7-page>
    
     <!-- NAVBAR TOP -->
    <f7-navbar title="Article" back-link="Back" sliding></f7-navbar>

    <f7-block inner>
      <div>
      <h2>{{this.title}}</h2>
      </br>
      </br>
      <p>{{this.date}}</p>
      <div id='article-content'></div>
      </div>
    </f7-block>
  </f7-page>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
var myApp = new Framework7();

export default {
data() {
  return {
    article: [],
    date: '',
    content: '',
    title: '',
    
  }


},

created:function(){
  this.getPosts();
},

methods: {
   getPosts: function()
      {
        Vue.axios.get('https://guryou.com/wp-json/wp/v2/posts/'+this.$route.params.id).then((response) => {
        console.log(response.data);
        console.log(this.$route.params.id);
        this.article = response.data;
        /* var html =this.article.content.rendered;
        var div = document.createElement("div");
        div.innerHTML = html;
        this.content = div.innerText; */
       
        this.date = this.article.date;
        this.title = this.article.title.rendered;
        var contentString = this.article.content.rendered;
        var div = document.getElementById('article-content');
        div.innerHTML += 'contentString';
       
        });

      },
},



}
</script>