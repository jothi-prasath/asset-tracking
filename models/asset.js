const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asset extends Model {}
  Asset.init({
    serialNumber: DataTypes.STRING,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Asset',
  });
  return Asset;
};