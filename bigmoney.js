stagingURL = "http://bigmoney-staging.bhga6ezash.us-west-2.elasticbeanstalk.com/";
localURL = "http://localhost:8000/"
endpoint = "api/donations/"
queryData = {
  min: '2500',
}
$.getJSON(localURL+endpoint, queryData)
  .done((data) => {
    $('#results').html(JSON.stringify(data));
  })
  .fail((err) => {
    console.log(err);
  })
