import { NextResponse } from "next/server";
import connectDb from "../../../../../backend/middleware/db";
import AnalyticModel from "../../../../../backend/models/Analytics";
require("dotenv").config();

const fetchUserAnalyticsHandler = async (request) => {
  try {
    const { userId } = await request.json();

    const userAnalytics = await AnalyticModel.find({ userId });

    if (!userAnalytics || userAnalytics.length === 0) {
      return NextResponse.json(
        {
          message: "No analytics found for the user",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        message: "User analytics found",
        analytics: userAnalytics,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error fetching user analytics:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch user analytics",
      },
      {
        status: 500,
      }
    );
  }
};

export const POST = connectDb(fetchUserAnalyticsHandler);
