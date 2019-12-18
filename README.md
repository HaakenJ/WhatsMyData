# What's My Data?

What's My Data?  Is an educational website where users can visit and learn about all the data that every website and gather about them.
The website also logs the basic information about each user and displays charts displaying this data.

https://whatsmydata.herokuapp.com/


### Installing

In order to get this project up and running on your own system for development purposes:

First clone the database and run npm install from the root folder to install the dependencies.

```
npm install
```

Enter the file config/config.json and enter your own database's information.

```
"development": {
    "username": "yourUsername",
    "password": "yourPassword",
    "database": "databaseName",
    "host": "HOST",
    "dialect": "mysql"
  }
```

Run the Sequelize migrations to create the models in your database.

```
sequelize db:migrate
```

If you would like to populate your database with random data. Run:

```
node seeds/seeder.js {number_of_records_to_create}
```

You're all set up!


## Deployment

If you would like to get this project deployed you will need to visit Heroku or your favorite cloud application platform and 
get the project set up with a live database.

## Built With

* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [MySQL](https://www.mysql.com/) - Relational database management system
* [Express](https://expressjs.com/) - Node.js web framework
* [jQuery](https://jquery.com/) - Front-End JavaScript library
* [Materialize](https://materializecss.com/) - Front-End web framework
* [SASS](https://sass-lang.com/) - A CSS preprocessor
* [Sequelize](https://sequelize.org/) - Promise-based Node.js ORM
* [ua-parser-js](https://github.com/faisalman/ua-parser-js) - User agent string parser
* [Google-Charts](https://developers.google.com/chart) - Interactive chart library
* [ip-geolocation-API](https://ipgeolocation.io/) - IP address geolocation API
* [country-list](https://www.npmjs.com/package/country-list) - An npm package that provides a list of world countries

## Authors

* **gklee001** - [Github](https://github.com/gklee001)
* **HaydenWampach** - [Github](https://github.com/HaydenWampach)
* **Ghostyinhaut** - [Github](https://github.com/Ghostyinhaut)
* **HaakenJ** - [Github](https://github.com/HaakenJ)

See also the list of [contributors](https://github.com/HaakenJ/WhatsMyData/contributors) who participated in this project.

## Acknowledgments

* Hat tip to [RobinLinus](https://github.com/RobinLinus) you're a legend!
