const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {}
  Employee.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};