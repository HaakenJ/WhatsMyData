const db = require("../models");

module.exports = function(app) {
  app.post("/api/userData", (req, res) => {
    console.log(req.body);
    db.userdata.create(req.body).then(dbuserdata => {
      res.json(dbuserdata);
    });
  });

  app.get("/api/devtype", (req, res) => {
    db.userdata.findAll({
      attributes: ["devType", [db.sequelize.fn("COUNT", db.sequelize.col("devType")), "no_devType"]],
      group: ["devType"]
    }).then(deviceTypes => {
      res.json(deviceTypes);
    });
  });

  app.get("/api/browser", (req, res) => {
    db.userdata.findAll({
      attributes: ["devType", "browser", [db.sequelize.fn("COUNT", db.sequelize.col("browser")), "no_browser"]],
      where: {devType: "PC"},
      group: ["browser"]
    }).then(pcBrowsers => {
      db.userdata.findAll({
        attributes: ["devType", "browser", [db.sequelize.fn("COUNT", db.sequelize.col("browser")), "no_browser"]],
        where: {devType: "tablet"},
        group: ["browser"]
      }).then(tabBrowsers => {
        db.userdata.findAll({
          attributes: ["devType", "browser", [db.sequelize.fn("COUNT", db.sequelize.col("browser")), "no_browser"]],
          where: {devType: "mobile"},
          group: ["browser"]
        }).then(mobBrowsers => {
          let response = {
            pcBrowsers: pcBrowsers,
            tabBrowsers: tabBrowsers,
            mobBrowsers: mobBrowsers
          };
          res.json(response);
        });
      });
    });
  });

  app.get("/api/location", (req, res) => {
    db.userdata.findAll({
      attributes: ["country", [db.sequelize.fn("COUNT", db.sequelize.col("country")), "no_country"]],
      group: ["country"]
    }).then(countryInfo => {
      res.json(countryInfo);
    });
  });
};
