import Sequelize from 'sequelize';
import readModels from './utils/read-models';

let sequelize;

interface db {
  sequelize: string,
  Sequelize: string,
};


const {
  DATABASE_URL, DB_NAME, DB_PASSWORD, DB_URL, DB_USERNAME,
} = process.env;

if (DATABASE_URL) {
  sequelize = new Sequelize(DATABASE_URL);
} else {
  sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_URL,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  });
}

const db = {
  sequelize: sequelize,
  Sequelize: Sequelize,
}

readModels(db, `${__dirname}/models`, sequelize);


export default db;
