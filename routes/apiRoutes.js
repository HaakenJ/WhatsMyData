const db = require("../models");

module.exports = function(app) {
  // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // Create a new example
  app.post("/api/userData", function(req, res) {
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
      group: ["browser"]
    }).then(browserInfo => {
      res.json(browserInfo);
    });
  });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
