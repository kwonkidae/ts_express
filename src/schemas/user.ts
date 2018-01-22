import { Document, Schema, Model, model, Mongoose} from "mongoose";
import * as mongoose from "mongoose";
import { IUser } from "../interfaces/user";

export interface IUserModel extends IUser, Document {
}

export var UserSchema: Schema = new Schema({
  email: String,
  firstName: String,
  lastName: String
});

<<<<<<< HEAD
export const User: Model<IUserModel> = mongoose.model<IUserModel>("Kkdosk", UserSchema);
=======
export const User: Model<IUserModel> = model<IUserModel>("User", UserSchema);
>>>>>>> 2712ed269879a28e94b4fe6feffd9f3207fbe7b8
