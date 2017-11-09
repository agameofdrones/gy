<template>
  <f7-page>
    <f7-navbar title="Map" back-link="Back" sliding></f7-navbar>
     <div id="map"></div>



    
  </f7-page>
</template>
<script>
import Vue from 'vue'   
export default {
    data() {
        return {
            cards: [],
            latitude: '',
            longitude: '',
        }
    },
    mounted: function() {
      
        this.initMap();
},
    methods: {

        initMap: function() {
            Vue.axios.get('http://35.158.151.255/public/providers/'+this.$route.params.id).then((response) => {
            console.log(response.data.data[0]);
            this.cards = response.data.data[0];
            this.latitude = this.cards.providers_latitude;
            this.longitude = this.cards.providers_longitude;

          
            console.log("Lat: ",this.latitude, "Long: ",this.longitude);
            var myLatLng = {lat: 0, lng: 0};
            myLatLng.lat = +this.latitude;
            myLatLng.lng = +this.longitude;
            console.log(myLatLng.lat);
            this.map = new google.maps.Map(document.getElementById('map'), {
            center: myLatLng,
            streetViewControl: false,
            fullscreenControl: false,
            
            mapTypeControl: false,
            zoom: 12,
            });
            var marker = new google.maps.Marker({
            position: myLatLng,
            map: this.map,

            });
              });
        }
    }
}
</script>
<style>
#map {

    height:100%;
    width:100%;
    
    }
</style>