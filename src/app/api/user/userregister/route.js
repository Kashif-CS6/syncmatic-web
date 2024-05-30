import { NextResponse } from "next/server";
import UserModel from "../../../../../backend/models/User";
import connectDb from "../../../../../backend/middleware/db";
require("dotenv").config();

const userRegisterHandler = async (request) => {
  try {
    const { firstName, lastName, email, password } = await request.json();

    // Check if the user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        {
          message: "User already exists",
        },
        {
          status: 400,
        }
      );
    }

    // Create a new user
    const newUser = new UserModel({
      firstName,
      lastName,
      email,
      password,
    });

    await newUser.save();

    return NextResponse.json(
      {
        message: "User registered successfully",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json(
      {
        message: "Failed to register user",
      },
      {
        status: 500,
      }
    );
  }
};

export const POST = connectDb(userRegisterHandler);
