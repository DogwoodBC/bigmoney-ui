import Vue from "vue";

var localURL = "http://localhost:8000/";
var donationsEndpoint = "api/donations/";
var contributorsEndpoint = "api/contributors/";
var donationsQuery = {
                  min: '2500'
                };
var contributorsQuery = {
                  limit: '10'
                };

$.getJSON(localURL+donationsEndpoint, donationsQuery)
  .done((data) => {
    document.getElementById('results').innerHTML = JSON.stringify(data, undefined, 2);
  })
  .fail((err) => {
    console.log(err);
  });

new Vue({
  el: '#test',
  data: {
    message: "This is a test"
  }
});


var topTen = $.getJSON(localURL+contributorsEndpoint, contributorsQuery);

new Vue({
  el: '#topTen',
  data: {
    topTen: topTen
  }
});
