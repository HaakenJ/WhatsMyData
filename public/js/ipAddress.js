
$(document).ready(() => {
var ip = sessionStorage.getItem("ip");
var country_name = sessionStorage.getItem("country_name");
var country_code2 = sessionStorage.getItem("country_code2");
        
if (!ip || !country_name || !country_code2) {
    setAsync(false);
    setFieldsParameter("country_name,country_code2");
    getGeolocation(handleGeolocationResponse, "YOUR_API_KEY");
}

function handleGeolocationResponse(json) {
    ip = json.ip;
    country_name = json.country_name;
    country_code2 = json.country_code2;

    sessionStorage.setItem("ip", ip);
    sessionStorage.setItem("country_name", country_name);
    sessionStorage.setItem("country_code2", country_code2);
}
console.log(ip);
    $("#ip-address").text(ip);
})