// Import necessary modules
import { NextResponse } from "next/server";
import UserModel from "../../../../../backend/models/User";
import connectDb from "../../../../../backend/middleware/db";

const fetchAllUsersHandler = async () => {
  try {
    const allUsers = await UserModel.find({}, { password: 0 }); 

    return NextResponse.json(
      {
        users: allUsers,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error while fetching users:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch users",
      },
      {
        status: 500,
      }
    );
  }
};

export const GET = connectDb(fetchAllUsersHandler);
