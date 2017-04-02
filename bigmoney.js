import Vue from "vue";

var localURL = "http://localhost:8000/";
var donationsEndpoint = "api/donations/";
var contributorsEndpoint = "api/contributors/";
var donationsQuery = {
                  min: '2500'
                };
var contributorsQuery = {
                  ordering: '-contributions_total',
                  limit: '10'
                };

Vue.component('contributor', {
  template: "#contributor-template",
  props: ['contributor']
});

$.getJSON(localURL+contributorsEndpoint, contributorsQuery)
  .done((data) => {
    new Vue({
      el: '#contributors-list',
      data: {
        contributors: data.results
      }
    });
  })
  .fail((err) => {
    console.log(err);
  });
