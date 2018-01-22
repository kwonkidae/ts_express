import { Document, Schema, Model, model, Mongoose} from "mongoose";
import * as mongoose from "mongoose";
import { IUser } from "../interfaces/user";

export interface IUserModel extends IUser, Document {
    fullName(): string;
}

export var UserSchema: Schema = new Schema({
  createdAt: Date,
  email: String,
  firstName: String,
  lastName: String
});
UserSchema.pre("save", function(next) {
  let now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});
UserSchema.methods.fullName = function(): string {
  return (this.firstName.trim() + " " + this.lastName.trim());
};

export const User: Model<IUserModel> = mongoose.model<IUserModel>("Kkdosk", UserSchema);