<template>
  <f7-page>
    <f7-navbar title="Map" back-link="Back" sliding></f7-navbar>
    
     <div id="map"></div>
    
  

    
  </f7-page>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
export default {
    data() {
        return {
            centers: [],
        }
    },
    mounted: function() {
        this.initMap();
},
    methods: {
        initMap: function() {
        Vue.axios.get('http://35.158.151.255/public/providers/').then((response) => {
            console.log(response.data.data);
            this.centers = response.data.data;

            var myLatLng = [];
            var contentString = '<p id="content">Hello world</p>'
            for(var i = 0; i < this.centers.length; i++)
            {
            var obj = {
                ['lat']: +this.centers[i].providers_latitude,
                ['lng']: +this.centers[i].providers_longitude, 
            }
            myLatLng.push(obj);
            console.log(obj);

            }
            
         

            this.map = new google.maps.Map(document.getElementById('map'), {
            center: myLatLng[0],
            streetViewControl: false,
            fullscreenControl: false,
            mapTypeControl: false,
            zoom: 7,
            });
            var infowindow = new google.maps.InfoWindow();
           
             /* Adding Markers  */
            for( var i = 0; i < myLatLng.length; i++)
            {
                /* Adding Markers  */
                var marker = new google.maps.Marker({
                position: myLatLng[i],
                map: this.map,
                info: `<h3>`+this.centers[i].providers_name+`</h3>`+
                `<p>`+this.centers[i].providers_description+`</p>`+
                `<a href="/center-profile/1">`+`SEE CENTER</a> `,

                });
                
                
                 google.maps.event.addListener(marker, 'click', function () {
                infowindow.setContent(this.info);
                infowindow.open(map, this);
                });
                
            }
        });
            
        }
    }
}
</script>
<style>
#map 
{
height:100%;
width:100%;

}


</style>