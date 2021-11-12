# ECommerce Backend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

A backend application that creates a database with MySQL and the Sequelize ORM. An API created using node and Express.js allows the database to be manipulated via http requests.

## Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To run this project locally, you'll need to install the following:

- [MySQL](https://dev.mysql.com/downloads/installer/)
- [node.js](https://nodejs.org/)
- Any program that can send http requests, such as Insomnia or PostMan

You'll also need to install all the necessary dependancies by opening the project and running the command 'npm i'.
Finally, edit the environment variables in the .env file to match your MySQL username and password.

## Usage

The project requires a bit of setup before it can be interacted with.

- First, you'll need to log in to mysql via the terminal using the command `mysql -u [username] -p` and create the database 'ecommerce_db' with the command `SOURCE ./db/schema.sql`. This creates the db with the name the rest of the program expects.
- Next, you can seed the database with some filler data. In a new terminal (not the mysql shell) run `node ./seeds/index.js`.
- Finally, start running the the server. In a new terminal (not the mysql shell) run `node server.js`.

You can now send requests to the database using the routes defined in routes folder. Most routes are of the form http://localhost:###/api/[modelname]/[id#]; examples of all routes can be seen [here](https://youtu.be/i2PUTG6BCV8).

## Questions

If you have any questions about using the project, you can contact me via email or though github:

- Email: jkohrt7@gmail.com
- Github: [@jkohrt](https://github.com/jkohrt)

## Credits

- Alper Gokcehan (https://github.com/alperg) for Product POST Route, Seeds, and comments

## License

[MIT](https://opensource.org/licenses/MIT)
