"use strict";

require('dotenv').config();
var config = {
  development: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    protocol: 'postgres',
    timezone: "+07:00",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
  test: {
    username: "postgres",
    password: "123456",
    database: "test_db",
    host: "127.0.0.1",
    port: 5432,
    dialect: "postgres"
  },
  production: {
    username: "postgres",
    password: "123456",
    database: "prod_db",
    host: "127.0.0.1",
    port: 5432,
    dialect: "postgres"
  }
};
module.exports = config;