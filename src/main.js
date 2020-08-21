const dbUser = process.env.DB_USER || "postgres";
const dbPassword = process.env.DB_PASSWORD || "azerty";
const dbHost = process.env.DB_HOST || "db:5432";
const dbName = process.env.DB_NAME || "postgres";

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`)

class User extends Model {}
User.init({
  username: DataTypes.STRING,
  birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

(async () => {
  await sequelize.sync();
  const jane = await User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
  console.log(jane.toJSON());
})();