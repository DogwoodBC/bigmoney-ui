"use strict";

var stagingURL = "http://bigmoney-staging.bhga6ezash.us-west-2.elasticbeanstalk.com/";
var localURL = "http://localhost:8000/";
var endpoint = "api/donations/";
var queryData = {
  min: '2500'
};

$.getJSON(localURL + endpoint, queryData).done(function (data) {
  document.getElementById('results').innerHTML = JSON.stringify(data, undefined, 2);
}).fail(function (err) {
  console.log(err);
});
