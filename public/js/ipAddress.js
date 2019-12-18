var ip = sessionStorage.getItem("ip");
var country_name = sessionStorage.getItem("country_name");
var city = sessionStorage.getItem("ccity");

if (!ip || !country_name || !city) {
    setAsync(false);
    setFieldsParameter("country_name,city");
    getGeolocation(handleGeolocationResponse, "93434439bff2436bba87545501a9a061");
}

function handleGeolocationResponse(json) {
    ip = json.ip;
    country_name = json.country_name;
    city = json.city;

    sessionStorage.setItem("ip", ip);
    sessionStorage.setItem("country_name", country_name);
    sessionStorage.setItem("city", city);
}


console.log(country_name);
console.log(city);
console.log(ip);
$(document).ready(function () {
    $("#ip-address").text(ip);
    $("#city").text(city);
    $("#country").text(country_name);

});