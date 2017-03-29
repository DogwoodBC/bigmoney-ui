import Vue from "vue";

var localURL = "http://localhost:8000/";
var donationsEndpoint = "api/donations/";
var donationsQuery = {
                  min: '2500'
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
      message: "This is a test!",
    }
  });
