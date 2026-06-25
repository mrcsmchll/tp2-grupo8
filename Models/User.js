import { DataTypes, Model } from "sequelize";
import sequelize from "../connection/sequelize.js";

import bcrypt from "bcrypt";

class User extends Model {

  static isValidPassword = async (passwordPlain, passwordHash) => {
    const isValid = await bcrypt.compare(passwordPlain, passwordHash);
    return isValid;
  };
}

User.init(
  {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [3, 50],
        is: /^[a-z]+$/i,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: "User",
  },
);

User.beforeCreate(async(user)=>{
  const salt= await bcrypt.genSalt(10)
  const hash= await bcrypt.hash(user.password, salt)
  user.password=hash
})

export default User;
