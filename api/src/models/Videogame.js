const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValues: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    platforms: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      defaultValues: 'Unknown',
      allowNull: true,
    },
    released: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Unknown",
    },
    rating: {
      type: DataTypes.FLOAT,
      defaultValues: 'Unknown',
      allowNull: true,
    },
  });
};
