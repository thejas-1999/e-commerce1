import Mongoose from "mongoose";

const userSchema = new Mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    about: {
        type: String,
        required: true,
      },
      role:{
        type:Number,
        default:0
      },
      history:{
        type:Array,
        default:[]
      }
  },
  {
    timestamps: true,
  }
);

export const User = Mongoose.model("User", userSchema);
