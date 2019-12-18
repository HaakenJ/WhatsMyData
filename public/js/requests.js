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
      osVersion = os.version,
      browser = parserBrowser.name,
      browserVersion = browser.version;

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
      osVersion: osVersion,
      browser: browser,
      browserVersion: browserVersion,
      country: country,
      city: city,
      latitude: latitude,
      longitude: longitude
    };

    $("#media-logins li").each(function (index) {
      postData[$(this).text().toLowerCase()] = true;
    });

    console.log(postData);

    $.ajax({
      type: "POST",
      url: "/api/userData",
      data: postData,
    }).then((response) => {
      console.log(response);
    });
  }, 1000);
});