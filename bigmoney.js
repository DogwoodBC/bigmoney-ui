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

Vue.filter('currency',  function(value) {
  value = value.toString();
  var withDecimal = /(\.)/g.test(value) ? value : value + '.00'
  var formatted = withDecimal.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  return '$' + formatted
});

$.getJSON(localURL+contributorsEndpoint, contributorsQuery)
  .done((data) => {
    new Vue({
      el: '#contributors-list',
      data: {
        contributors: data.results
        },
      }
    });
  })
  .fail((err) => {
    console.log(err);
  });
