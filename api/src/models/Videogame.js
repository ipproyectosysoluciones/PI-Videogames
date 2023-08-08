const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Videogame = sequelize.define("videogame", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    platforms: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Unknown",
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
      allowNull: true,
      defaultValue: null,
    },
  });
  return Videogame;
};
