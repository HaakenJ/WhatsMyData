$(document).ready(() => {
    $.ajax({
        type: "GET",
        url: "https://api.ipify.org?format=json"
    }).then((response) => {
        $("#ip-address").text(response.ip);
    })
})