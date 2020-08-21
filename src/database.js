const dbUser = process.env.DB_USER || "postgres";
const dbPassword = process.env.DB_PASSWORD || "azerty";
const dbHost = process.env.DB_HOST || "db:5432";
const dbName = process.env.DB_NAME || "postgres";

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`)