"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    FirstName: {
        type: String,
        required: false,
    },
    LastName: {
        type: String,
        required: false,
    },
    PublisherType: {
        type: String,
        required: false,
    },
    token: {
        type: String,
        required: false,
    },
    resetPasswordExpires: {
        type: Date,
        required: false,
    },
    status: {
        type: String,
        default: "INACTIVE",
        enum: ["ACTIVE", "INACTIVE", "BLOCKED", "PENDINGAPPROVAL"],
    },
    AccessLevel: {
        type: [String],
        // enum: ["PUBLISHER", 'FRAUDSERVICESUSER', "ADVERTISER", "ADMIN"]
    },
    apps: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Apps",
        },
    ],
    campaigns: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "campaign",
        },
    ],
    ReferralAdvertiserId: {
        type: String,
    },
    TypeOfSupplier: {
        type: String,
    },
}, { timestamps: true });
exports.userModel = (0, mongoose_1.model)("User", exports.userSchema);
//export default userModel;
