// The API url and the city we want to check...
var url = 'http://api.openweathermap.org/data/2.5/weather?callback=?';
var q = 'Toronto';
var units = 'metric';
var APPID = '6dec5fb891e6e243c9d8c20351998e67';

var send = {
  q: 'montreal',
  units: 'metric',
  APPID: '6dec5fb891e6e243c9d8c20351998e67',
};

// Go call the URL and pass 2 parameters (q=city, units=metric/imperial)
$.getJSON(url, send, function (result)
{

  console.log(result);

});
