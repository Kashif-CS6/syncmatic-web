import mongoose from "mongoose";

const analyticSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  avg: { type: Number, required: true },
  date_time: { type: Date, required: true },
});

const AnalyticModel = mongoose.models.analytics || mongoose.model("analytics", analyticSchema);

export default AnalyticModel;
