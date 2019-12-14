$(document).ready(() => {
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
    ipAdd = "",
    continent = "",
    country = "",
    city = "",
    latitude = "",
    longitude = "",
    os = parserOS.name,
    osVersion = os.version,
    browser = parserBrowser.name,
    browserVersion = browser.version;

  let currentLogins = socialMediaLogins(addNetworkToList);

  let postData = {
    devType: devType,
    vendor: vendor,
    model: model,
    cpu: cpu,
    cores: cores,
    batteryLevel: batteryLevel,
    screenHeight: screenHeight,
    screenWidth: screenWidth,
    os: os,
    osVersion: osVersion,
    browser: browser,
    browserVersion: browserVersion,
    continent: continent,
    country: country,
    city: city,
    latitude: latitude,
    longitude: longitude
  };

  // currentLogins.forEach((network) => {
  //   postData[network] = true;
  // });

  // setTimeout(() => {
  //   $("#media-logins li").each(function (index) {
  //     postData[$(this).text()] = true;
  //   });
  //   console.log(logins);
  // }, 1000);

  console.log(postData);

  $.post("/api/userData", postData)
    .then(function () {
      console.log("Logged the data");
    });

});


// I will create an object with nested objects to be sent as the post request.url
// Each nested object will be titled as the table name the data goes to.
// Each nested object will contain the data for that table.