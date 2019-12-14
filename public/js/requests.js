$(document).ready(() => {
  const parser = new UAParser(),
    device = parser.getDevice(),
    parserCPU = parser.getCPU(),
    parserOS = parser.getOS(),
    parserBrowser = parser.getBrowser();

  if (device.type === undefined) {
    const devType = "PC",
      vendor = null,
      model = null;
  } else {
    const devType = device.type,
      vendor = device.vendor,
      model = device.model;
  }

  const cpu = parserCPU.architecture,
    cores = navigator.hardwareConcurrency,
    batteryLevel = navigator.getBattery().level * 100,
    screenHeight = window.screen.height * window.devicePixelRatio,
    screenWidth = window.screen.width * window.devicePixelRatio,
    ipAdd = "",
    continent = "",
    country = "",
    city = "",
    latitude = "",
    longitude = "",
    os = parserOS.name,
    osVersion = os.version,
    browser = parserBrowser.name,
    browserVersion = browser.version,
    logins = {};

  setTimeout(() => {
    $("#media-logins li").each(function(index) {
      logins[$(this).text()] = true;
    });
    console.log(logins);
  }, 1000);

  const postData = {
    hardware: {
      devType: devType,
      vendor: vendor,
      model: model,
      cpu: cpu,
      cores: cores,
      batteryLevel: batteryLevel,
      screenHeight: screenHeight,
      screenWidth: screenWidth
    },
    software: {
      os: os,
      osVersion: osVersion,
      browser: browser,
      browserVersion: browserVersion
    },
    
  }

});


// I will create an object with nested objects to be sent as the post request.url
// Each nested object will be titled as the table name the data goes to.
// Each nested object will contain the data for that table.