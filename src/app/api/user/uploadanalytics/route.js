import { NextResponse } from "next/server";
import connectDb from "../../../../../backend/middleware/db";
import AnalyticModel from "../../../../../backend/models/Analytics";
require("dotenv").config();

const uploadAnalyticsHandler = async (request) => {
  try {
    const { userId, avg, date_time } = await request.json();
    
    const newAnalytics = new AnalyticModel({
      userId,
      avg,
      date_time,
    });

    await newAnalytics.save();

    return NextResponse.json(
      {
        message: "Analytics data uploaded successfully",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error during analytics upload:", error);
    return NextResponse.json(
      {
        message: "Failed to upload analytics data",
      },
      {
        status: 500,
      }
    );
  }
};

export const POST = connectDb(uploadAnalyticsHandler);
