import mongoose from "mongoose";

const leaveApplicationSchema = new mongoose.Schema({
    employeeId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true
    },
    type: {
        type: String,
        eneum: ["SICK", "CASUAL", "ANNUAL"],
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["PENDING","APPROVED","REJECTED"],
        default: "PENDING"
    },

},{timestamps: true})

export const LeaveApplication = mongoose.model("LeaveApplication", leaveApplicationSchema);

