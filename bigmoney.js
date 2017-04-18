import Vue from "vue";

var localURL = "http://localhost:8000/";
var stagingURL = "http://bigmoney-staging.bhga6ezash.us-west-2.elasticbeanstalk.com/";
var endpoint = localURL;
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
  var withDecimal = /(\.)/g.test(value) ? value : value + '.00';
  var formatted = withDecimal.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  return '$' + formatted;
});

$.getJSON(endpoint+contributorsEndpoint, contributorsQuery)
  .done((data) => {
    new Vue({
      el: '#contributors-list',
      data: {
        contributors: data.results
        },
      }
    );
  })
  .fail((err) => {
    console.log(err);
  });
