var ip = sessionStorage.getItem("ip");
var country_name = sessionStorage.getItem("country_name");
var city = sessionStorage.getItem("city");
var latitude = sessionStorage.getItem("latitude");
var longitude = sessionStorage.getItem("longigtude");
var country_code2 = sessionStorage.getItem("country_code2");
var latitude = sessionStorage.getItem("latitude");
var longitude = sessionStorage.getItem("longitude");

if (!ip || !country_name || !country_code2 || !latitude || !longitude) {
  setAsync(false);
  setFieldsParameter("country_name,country_code2,latitude,longitude");
  getGeolocation(handleGeolocationResponse, "93434439bff2436bba87545501a9a061");
}

function handleGeolocationResponse(json) {
  ip = json.ip;
  country_name = json.country_name;
  city = json.city;
  latitude = json.latitude;
  longitude = json.longitude;
  country_code2 = json.country_code2;
  latitude = json.latitude;
  longitude = json.longitude;

  sessionStorage.setItem("ip", ip);
  sessionStorage.setItem("country_name", country_name);
  sessionStorage.setItem("city", city);
  sessionStorage.setItem("latitude", latitude);
  sessionStorage.setItem("longitude", longitude);
  sessionStorage.setItem("country_code2", country_code2);
  sessionStorage.setItem("latitude", latitude);
  sessionStorage.setItem("longitude", longitude);
}

$(document).ready(function() {
  $("#ip-address").text(ip);
  $("#city").text(city);
  $("#country").text(country_name);
  $("#latitude").text(latitude);
  $("#longitude").text(longitude);
  $("#country-code").text(country_code2);
  $("#latitude").text(latitude);
  $("#longitude").text(longitude);
});
