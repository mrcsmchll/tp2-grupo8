import { DataTypes, Model } from "sequelize";
import sequelize from "../connection/sequelize.js";

class Pet extends Model {}

Pet.init(
  {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        is: /^[a-z]+$/i,
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "Pet",
  },
);

export default Pet;