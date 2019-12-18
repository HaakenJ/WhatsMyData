var ip = sessionStorage.getItem("ip");
var country_name = sessionStorage.getItem("country_name");
var city = sessionStorage.getItem("ccity");


    var ip = sessionStorage.getItem("ip");
    var country_name = sessionStorage.getItem("country_name");
    var city = sessionStorage.getItem("city");
    var latitude = sessionStorage.getItem("latitude");
    var longitude = sessionStorage.getItem("longigtude");

    if (!ip || !country_name || !city ||!latitude ||!longitude) {
        setAsync(false);
        setFieldsParameter("country_name,city,latitude,longitude");
        getGeolocation(handleGeolocationResponse, "93434439bff2436bba87545501a9a061");
    }

    function handleGeolocationResponse(json) {
        ip = json.ip;
        country_name = json.country_name;
        city = json.city;
        latitude = json.latitude;
        longitude = json.longitude;

        sessionStorage.setItem("ip", ip);
        sessionStorage.setItem("country_name", country_name);
        sessionStorage.setItem("city", city);
        sessionStorage.setItem("latitude", latitude);
        sessionStorage.setItem("longitude", longitude);
    }

    
    console.log(country_name);
    console.log(city);
    console.log(ip); 
    console.log(latitude);
    console.log(longitude);
    $(document).ready(function() {
        $("#ip-address").text(ip);
        $("#city").text(city);
        $("#country").text(country_name);
        $("#Latitude").text(latitude);
        $("#Longitude").text(longitude);
        
    });
