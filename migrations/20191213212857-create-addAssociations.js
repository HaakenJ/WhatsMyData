'use strict';
module.exports = {
  // Add the foreign keys when db:migrate is called
  up: (queryInterface, Sequelize) => {
    // Add IDid to Hardware table
    return queryInterface.addColumn(
        "Hardware", // Name of the source model (to add key to)
        "IPid", // Name of the key we are adding
        {
          type: Sequelize.INTEGER,
          references: {
            model: "IP", // Target model
            key: "id" // Key in the target model we are referencing
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL"
        },
      )
      // We can call .then() and chain these queryInterface methods because
      // they return promises.
      .then(() => {
        // Add IDid to Software table
        return queryInterface.addColumn(
            "Software",
            "IPid", {
              type: Sequelize.INTEGER,
              references: {
                model: "IP",
                key: "id"
              },
              onUpdate: "CASCADE",
              onDelete: "SET NULL"
            }
          )
          .then(() => {
            return queryInterface.addColumn(
                "Locations",
                "IPid", {
                  type: Sequelize.INTEGER,
                  references: {
                    model: "IP",
                    key: "id"
                  },
                  onUpdate: "CASCADE",
                  onDelete: "SET NULL"
                }
              )
              .then(() => {
                return queryInterface.addColumn(
                    "Logins",
                    "IPid", {
                      type: Sequelize.INTEGER,
                      references: {
                        model: "IP",
                        key: "id"
                      },
                      onUpdate: "CASCADE",
                      onDelete: "SET NULL"
                    }
                  )
                  .then(() => {
                    return queryInterface.addColumn(
                        "IP",
                        "HardwareId", {
                          type: Sequelize.INTEGER,
                          references: {
                            model: "Hardware",
                            key: "id"
                          },
                          onUpdate: "CASCADE",
                          onDelete: "CASCADE"
                        }
                      )
                      .then(() => {
                        return queryInterface.addColumn(
                            "IP",
                            "SoftwareId", {
                              type: Sequelize.INTEGER,
                              references: {
                                model: "Software",
                                key: "id"
                              },
                              onUpdate: "CASCADE",
                              onDelete: "CASCADE"
                            }
                          )
                          .then(() => {
                            return queryInterface.addColumn(
                                "IP",
                                "LocationsId", {
                                  type: Sequelize.INTEGER,
                                  references: {
                                    model: "Locations",
                                    key: "id"
                                  },
                                  onUpdate: "CASCADE",
                                  onDelete: "CASCADE"
                                }
                              )
                              .then(() => {
                                return queryInterface.addColumn(
                                  "IP",
                                  "LoginsId", {
                                    type: Sequelize.INTEGER,
                                    references: {
                                      model: "Logins",
                                      key: "id"
                                    },
                                    onUpdate: "CASCADE",
                                    onDelete: "CASCADE"
                                  }
                                )
                              });
                          });
                      });
                  });
              });
          });
      });
  },
  down: (queryInterface, Sequelize) => {
    // Remove the new columns when db:migrate:undo is called
    return queryInterface.removeColumn(
        "Hardware", // Name of source model
        "IPid" // Key we want to remove
      )
      .then(() => {
        return queryInterface.removeColumn(
            "Software",
            "IPid"
          )
          .then(() => {
            return queryInterface.removeColumn(
                "Locations",
                "IPid"
              )
              .then(() => {
                return queryInterface.removeColumn(
                  "Logins",
                  "IPid"
                ).then(() => {
                  return queryInterface.removeColumn(
                    "IP",
                    "HardwareId"
                  )
                  .then(() => {
                    return queryInterface.removeColumn(
                      "IP",
                      "SoftwareId"
                    )
                    .then(() => {
                      return queryInterface.removeColumn(
                        "IP",
                        "LocationsId"
                      )
                      .then(() => {
                        return queryInterface.removeColumn(
                          "IP",
                          "LoginsId"
                        );
                      });
                    });
                  });
                });
              });
          });
      });
  }
};