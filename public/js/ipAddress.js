var ip = sessionStorage.getItem("ip");
var country_name = sessionStorage.getItem("country_name");
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
  country_code2 = json.country_code2;
  latitude = json.latitude;
  longitude = json.longitude;

  sessionStorage.setItem("ip", ip);
  sessionStorage.setItem("country_name", country_name);
  sessionStorage.setItem("country_code2", country_code2);
  sessionStorage.setItem("latitude", latitude);
  sessionStorage.setItem("longitude", longitude);
}


console.log(country_name);
console.log(country_code2);
console.log(ip);
$(document).ready(function () {
  $("#ip-address").text(ip);
  $("#country").text(country_name);
  $("#country-code").text(country_code2);
  $("#latitude").text(latitude);
  $("#longitude").text(longitude);
});