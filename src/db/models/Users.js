const UsersSchema = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    username: DataTypes.STRING,
    salt: DataTypes.INTEGER,
    hash: DataTypes.STRING,
  });

  User.hasMany(models.recipe);
};
