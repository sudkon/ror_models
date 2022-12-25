"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appSchema = void 0;
const mongoose_1 = require("mongoose");
const functions_1 = require("../../objects/functions");
exports.appSchema = new mongoose_1.Schema({
    appid: {
        type: String,
        required: true,
        default: () => {
            return (0, functions_1.genetateNanoIdWithoutDash)();
        },
        //unique: true
    },
    app_name: {
        type: String,
        required: true,
    },
    vc_name: {
        type: String,
        required: true,
    },
    App_Platform: {
        type: String,
        required: false,
    },
    App_Category: {
        type: String,
        required: false,
    },
    App_Store_URL: {
        type: String,
        required: false,
    },
    vc_value: {
        type: Number,
        required: true,
    },
    callBackUrl: {
        type: String,
        default: "",
    },
    vc_mode: {
        type: String,
        required: true,
    },
    api_key: {
        type: String,
        required: true,
    },
    api_secret: {
        type: String,
        required: true,
    },
    offerwallColor: {
        type: String,
        required: false,
        default: "#2a41e8",
    },
    offerwallLogo: {
        type: String,
        required: false,
        default: "https://www.rapidoreach.com/17bf13e3188bbb9ce763f750432acf3a.png",
    },
    maximumLOI: {
        type: Number,
        required: false,
    },
    FingerprintCheckEnabled: {
        type: Boolean,
        default: true,
    },
    dqPointsByRorApplicable: {
        type: Boolean,
        default: true,
    },
    LucidSurveysEnabled: {
        type: Boolean,
        default: true,
    },
    RapidoReachSurveysEnabled: {
        type: Boolean,
        default: true,
    },
    InbrainSurveysEnabled: {
        type: Boolean,
        default: true,
    },
    DynataSurveysEnabled: {
        type: Boolean,
        default: true,
    },
    YourSurveysEnabled: {
        type: Boolean,
        default: true,
    },
    TolunaSurveysEnabled: {
        type: Boolean,
        default: true,
    },
    DQPoints: {
        type: Number,
        required: false,
        default: 0,
    },
    ShareRatio: {
        type: Number,
        default: 0.55,
    },
    status: {
        type: String,
        default: "PENDINGAPPROVAL",
        enum: [
            "PENDINGAPPROVAL",
            "REQUEST_SENT",
            "APPROVED",
            "BLOCKED",
            "REJECTED",
        ],
    },
    creator: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    test: {
        type: Boolean,
        default: true,
    },
    ResearchCategories: {
        type: Array,
        required: false,
    },
    ResearchIndustries: {
        type: Array,
        required: false,
    },
}, { timestamps: true })
    .index({
    appid: 1,
})
    .index({
    api_key: 1,
});
//Hide shareration property in FE apis
exports.appSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.ShareRatio;
    return obj;
};
// export const appsModel = model<IApps>("Apps", appSchema);
