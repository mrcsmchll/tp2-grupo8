import User from "./User.js";
import Pet from "./Pet.js";

User.hasMany(Pet, {
  foreignKey: "userId",
});
Pet.belongsTo(User, {
  foreignKey: "userId",
});

export { User, Pet };
