import { request } from "express";

$(document).ready(() => {
  let devType,
    vendor,
    model,
    cpu,
    cores,
    batteryLevel,
    ipAdd,
    continent,
    country,
    city,
    latitude,
    longitude,
    logins,
    os,
    osVersion,
    browser,
    browserVersion;  
})


// I will create an object with nested objects to be sent as the post request.url
// Each nested object will be titled as the table name the data goes to.
// Each nested object will contain the data for that table.