const db = require("../models");
const countries = require("country-list");

let numOfRecords = process.argv[2];

createSeeds(numOfRecords);

function createSeeds(numOfRecords) {
    let countryList = countries.getCodes();
    for (let i = 0; i < numOfRecords; i++) {

        function randomIndex(num) {
            return Math.floor(Math.random() * num);
        };

        let ipAddress = `${randomIndex(100)}.${randomIndex(100)}.${randomIndex(100)}.${randomIndex(100)}`,
            devType = ["tablet", "mobile", "PC"][randomIndex(3)],
            vendor = ["Apple", "Samsung", "Google", "Amazon", "LG"][randomIndex(5)],
            cores = [4, 8, 12, 16, 24, 32][randomIndex(6)],
            screenHeight = [1920, 1334, 1440, 800, 1136, 2048, 1024, 720][randomIndex(8)],
            screenWidth = [1080, 750, 2960, 480, 640, 2732, 768, 1440][randomIndex(8)],
            os = ["Windows", "iOS", "Android", "Linux"][randomIndex(4)],
            browser = ["Chrome", "Firefox", "Mobile Safari", "Opera"][randomIndex(8)],
            // Took out less common browsers to make data seem more logical.
            // "Chrome WebView", "Internet Explorer", "Edge", "Silk",
            country = countryList[randomIndex(countryList.length + 1)];

        let postData = {
            ipAddress: ipAddress,
            devType: devType,
            vendor: vendor,
            model: null,
            cpu: null,
            cores: cores,
            screenHeight: screenHeight,
            screenWidth: screenWidth,
            os: os,
            browser: browser,
            country: country,
            city: null,
            square: Math.round(Math.random()),
            instagram: Math.round(Math.random()),
            twitter: Math.round(Math.random()),
            facebook: Math.round(Math.random()),
            google: Math.round(Math.random()),
            googlePlus: Math.round(Math.random()),
            skype: Math.round(Math.random()),
            spotify: Math.round(Math.random()),
            reddit: Math.round(Math.random()),
            tumblr: Math.round(Math.random()),
            expedia: Math.round(Math.random()),
            dropbox: Math.round(Math.random()),
            amazon: Math.round(Math.random()),
            pinterest: Math.round(Math.random()),
            netflix: Math.round(Math.random()),
            foursquare: Math.round(Math.random()),
            battleNet: Math.round(Math.random()),
            steam: Math.round(Math.random()),
            stackOverflow: Math.round(Math.random()),
            blogger: Math.round(Math.random())
        };

        db.userdata.create(postData).then(result => {});
    }
};