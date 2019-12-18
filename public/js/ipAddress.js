var ip = sessionStorage.getItem("ip");
var country_name = sessionStorage.getItem("country_name");
var country_code2 = sessionStorage.getItem("country_code2");

if (!ip || !country_name || !country_code2) {
    setAsync(false);
    setFieldsParameter("country_name,country_code2");
    getGeolocation(handleGeolocationResponse, "93434439bff2436bba87545501a9a061");
}

function handleGeolocationResponse(json) {
    ip = json.ip;
    country_name = json.country_name;
    country_code2 = json.country_code2;

    sessionStorage.setItem("ip", ip);
    sessionStorage.setItem("country_name", country_name);
    sessionStorage.setItem("country_code2", country_code2);
}


console.log(country_name);
console.log(country_code2);
console.log(ip);
$(document).ready(function () {
    $("#ip-address").text(ip);
    $("#country").text(country_name);
    $("#country-code").text(country_code2);
});
