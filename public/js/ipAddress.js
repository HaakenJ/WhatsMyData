// $(document).ready(() => {
//     var ip = sessionStorage.getItem("ip");
//     var country_name = sessionStorage.getItem("country_name");
//     var country_code2 = sessionStorage.getItem("country_code2");

//     if (!ip || !country_name || !country_code2) {
//         setAsync(false);
//         setFieldsParameter("country_name,country_code2");
//         getGeolocation(handleGeolocationResponse, "93434439bff2436bba87545501a9a061");
//     }

//     function handleGeolocationResponse(json) {
//         ip = json.ip;
//         country_name = json.country_name;
//         country_code2 = json.country_code2;

//         sessionStorage.setItem("ip", ip);
//         sessionStorage.setItem("country_name", country_name);
//         sessionStorage.setItem("country_code2", country_code2);

//         console.log(ip, country_name, country_code2);
//     }

//     // console.log(ip);
//     // $("#ip-address").text(ip);
// })

$(document).ready(() => {
    $.ajax({
        type: "GET",
        url: "https://api.ipify.org?format=json"
    }).then((ipResponse) => {
        $("#ip-address").text(ipResponse.ip);
        let url = `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}&ip=${ipResponse.ip}&fields=country_code2,country_name,city`;
        $.ajax({
            type: "GET",
            url: url
        }).then(locationInfo => {
            $("#city").text(locationInfo.city);
            $("#country").text(locationInfo.country_name);
        });
    });
});