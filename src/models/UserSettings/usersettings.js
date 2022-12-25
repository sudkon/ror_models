"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSettingsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.userSettingsSchema = new mongoose_1.Schema({
    companyName: {
        type: String,
        required: false,
    },
    phonenumber: {
        type: String,
        required: false,
    },
    Business_Type: {
        type: String,
        required: false,
    },
    Tax_Status: {
        type: String,
        required: false,
    },
    websiteUrl: {
        type: String,
        required: false,
    },
    companyAddress: {
        address: {
            type: String,
            required: false,
        },
        address2: {
            type: String,
            required: false,
        },
        city: {
            type: String,
            required: false,
        },
        zipcode: {
            type: String,
            required: false,
        },
        state: {
            type: String,
            required: false,
        },
        country: {
            type: String,
            required: false,
        },
    },
    contactInfo: {
        name: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: false,
        },
    },
    bankInfo: {
        paymentMode: {
            type: String,
            required: false,
        },
        PaypalID: {
            type: String,
            required: false,
        },
        bankName: {
            type: Object,
            required: false,
        },
        nameOnAccount: {
            type: String,
            required: false,
        },
        accountType: {
            type: String,
            required: false,
            default: 'CHECKING',
            enum: ['CHECKING', 'CURRENT', 'SAVINGS'],
        },
        accountNumber: {
            type: String,
            required: false,
        },
        routingNumber: {
            type: String,
            required: false,
        },
    },
    creator: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, { timestamps: true });
