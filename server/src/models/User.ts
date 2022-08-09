import { Schema, model, Model } from "mongoose";
import { NextFunction } from "express";
import { compare, hash } from "bcrypt";

/* 
Added the basic fields that define our Users. We will likely need to add
additional fields, such as friends, friend count, polls, etc.
*/

interface IUser {
  username: string;
  email: string;
  password: string;
}

interface IUserMethods {
  isCorrectPassword(password: string): boolean;
}

type UserModel = Model<IUser, {}, IUserMethods>;

const UserSchema = new Schema<IUser, UserModel, IUserMethods>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 8 },
});

// Hash the password when User is created or modified
UserSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await hash(this.password, saltRounds);
  }
  next();
});

// Add method that validates the user password
UserSchema.method(
  "isCorrectPassword",
  async function isCorrectPassword(password) {
    return compare(password, this.password);
  }
);

export const User = model<IUser, UserModel>("User", UserSchema);
