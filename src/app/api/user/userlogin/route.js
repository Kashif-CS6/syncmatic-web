import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import UserModel from "../../../../../backend/models/User";
import connectDb from "../../../../../backend/middleware/db";
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;
const userLoginHandler = async (request) => {
  try {
    const { userEmail, userPassword } = await request.json();

    const existingUser = await UserModel.findOne({ email: userEmail });
    if (!existingUser) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    if (existingUser.password !== userPassword) {
      return NextResponse.json(
        {
          message: "Invalid credential",
        },
        {
          status: 401,
        }
      );
    }

    const payload = {
      userId: existingUser._id,
      userEmail: existingUser.email,
    };

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "9h" });

    return NextResponse.json(
      {
        message: "Login successful",
        token: token,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json(
      {
        message: "Failed to perform login",
      },
      {
        status: 500,
      }
    );
  }
};

export const POST = connectDb(userLoginHandler);
