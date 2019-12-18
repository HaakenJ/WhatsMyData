$(document).ready(() => {

  setTimeout(() => {
    const parser = new UAParser(),
      device = parser.getDevice(),
      parserCPU = parser.getCPU(),
      parserOS = parser.getOS(),
      parserBrowser = parser.getBrowser();
    let devType,
      vendor,
      model;

    if (device.type === undefined) {
      devType = "PC",
        vendor = null,
        model = null;
    } else {
      devType = device.type,
        vendor = device.vendor,
        model = device.model;
    }

    socialMediaLogins(addNetworkToList);

    const cpu = parserCPU.architecture,
      cores = navigator.hardwareConcurrency,
      screenHeight = window.screen.height * window.devicePixelRatio,
      screenWidth = window.screen.width * window.devicePixelRatio,
      ipAddress = $("#ip-address").text(),

      country = $("#country").text(),
      city = $("#city").text(),
      latitude = $("#Latitude").text(),
      longitude = $("#Longitude").text(),

      os = parserOS.name,
      browser = parserBrowser.name;

    let postData = {
      ipAddress: ipAddress,
      devType: devType,
      vendor: vendor,
      model: model,
      cpu: cpu,
      cores: cores,
      screenHeight: screenHeight,
      screenWidth: screenWidth,
      os: os,
      browser: browser,
      country: country,
      city: city
    };

    $("#media-logins li").each(function (index) {
      postData[$(this).text().toLowerCase()] = true;
    });

    $.ajax({
      type: "POST",
      url: "/api/userData",
      data: postData,
    }).then((response) => {
      console.log(response);
    });
  }, 1000);
});