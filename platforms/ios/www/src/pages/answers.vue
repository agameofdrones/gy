<template>
  <f7-page class="bg">

     <!-- NAVBAR TOP -->
     <f7-navbar title="Ask" back-link="Back"  sliding></f7-navbar>
      <div class="quote">
        <img class="img-circle" src="../src/images/professional1.jpg"/>
        <div class="speech-bubble left">
          <p>
           {{this.askedby}}
            <span class="time-ago">
              {{this.dateasked}}
            </span>
          </p>
          <blockquote>
            {{this.question}} 
          </blockquote>
        </div>
      </div>

   <!-- REPLIES -->
    <h1 style="color:white; margin-left:5%;" id="replies">REPLIES</h1>

     <div class="quote" v-for="answer in answers">
        <img class="img-circle" src="../src/images/professional1.jpg"/>
        <div class="speech-bubble left">
          <p>
           First Name,Last Name
            <span class="time-ago">
              {{answer.answers_created}}
            </span>
          </p>
          <blockquote>
            {{answer.answers_content}}
          </blockquote>
        </div>
      </div>
  <!-- CUSTOMER REPLY -->
  <h1 style="color:white; margin-left:5%;">REPLY</h1>
   <div class="quote">
   <img class="img-circle" src="../src/images/professional1.jpg"/>
    <div class="speech-bubble left">

    <f7-list >
        <f7-list-item>
        <f7-input type="textarea" placeholder="Enter reply"></f7-input>
        </f7-list-item>
        <f7-button style="margin:10%">Submit</f7-button>
    </f7-list>
    </div>
  </div>
       
  </f7-page>
</template>

<script>
import Vue from 'vue'
import VueLocalStorage from 'vue-localstorage'
var myApp = new Framework7();
var $$ = Dom7;
export default {
     data() {
          return {
            answers: [],
            question: '',
            askedby: '',
            dateasked:'',
          }
      },
 
    created:function(){
  
    this.getQuestions();
    this.getAnswers();
    
  },
   methods:  {

     getAnswers: function()
     {
        
        Vue.axios.get('http://35.158.151.255/public/questions/'+this.$route.params.id+'/answers/').then((response) => {
        this.answers = response.data.data; 
        
        })
        .catch(function (error) {
             document.getElementById("replies").innerHTML = "NO REPLIES YET :(";
            });
     },
     getQuestions: function()
     {
        Vue.axios.get('http://35.158.151.255/public/questions/').then((response) => {
       
        this.questions = response.data.data;
        
        for(let i = 0 ; i < this.questions.length; i++)
        {
            if(this.$route.params.id == this.questions[i].questions_id)
            {
               
                this.question = this.questions[i].questions_content;
                
                this.askedby = this.questions[i].customers_name;
                this.dateasked = this.questions[i].questions_created;
            }
        }

        });
     },


  },

}
</script>
<style>
.quote {
  display: inline-block;
  margin-top:5%;
  margin-left:5%;
  width:100%;
  
}
.quote p {
  font-weight: 500;
}
.quote p .time-ago {
  margin-left:5%;
  font-size: 80%;
  color: #818d98;
}
.quote blockquote {
  color: #576776;
  margin: 0;
  word-wrap: break-word;

}
.quote .round-avatar {
  border-radius: 50%;
  border: 1px solid #E0E8ED;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  float: left;
  margin-right: 0.5em;

}
.quote .speech-bubble {
  float: left;

}
.quote .speech-bubble.left {
  border: 1px solid #E0E8ED;
  border-radius: 6px;
  position: relative;
  margin-left: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  margin-right: 4px;
  margin-bottom: 4px;
  padding: 1ex 1em;
  background: #FDFDFE;
  width: 60%;
}
.quote .speech-bubble.left:after, .quote .speech-bubble.left:before {
  content: "";
  display: block;
  position: absolute;
  
  
}
.quote .speech-bubble.left:after {
  top: 16px;
}
.quote .speech-bubble.left:before {
  top: 14px;
}
.quote .speech-bubble.left:after {
  border: 8px solid transparent;
  border-right: 8px solid #FDFDFE;
  left: -8px;
  border-left: none;
}
.quote .speech-bubble.left:before {
  border: 10px solid transparent;
  border-right: 10px solid #E0E8ED;
  left: -10px;
  border-left: none;
}
.quote .speech-bubble.top {
  border: 1px solid #E0E8ED;
  border-radius: 6px;
  position: relative;
  margin-top: 9px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  margin-bottom: 4px;
  margin-bottom: 4px;
  padding: 1ex 1em;
  background: #FDFDFE;
  clear: both;
  margin-left: 0;
  margin-top: 2ex;
  
}
.quote .speech-bubble.top:after, .quote .speech-bubble.top:before {
  content: "";
  display: block;
  position: absolute;
}
.quote .speech-bubble.top:after {
  left: 16px;
}
.quote .speech-bubble.top:before {
  left: 14px;
}
.quote .speech-bubble.top:after {
  border: 8px solid transparent;
  border-bottom: 8px solid #FDFDFE;
  top: -8px;
  border-top: none;
}
.quote .speech-bubble.top:before {
  border: 10px solid transparent;
  border-bottom: 10px solid #E0E8ED;
  top: -10px;
  border-top: none;
}
.quote .speech-bubble p {
  line-height: 1.3em;
  margin: 0;
  width:95%;
}
.text-area
{
  margin-left:10%;
  margin-right:10%;
}
</style>