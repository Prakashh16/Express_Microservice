'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Key extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Key.init({
    userId: DataTypes.INTEGER,
    publicKey: DataTypes.STRING,
    privateKey: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Key',
  });
  return Key;
};