import mongoose, { Document } from "mongoose";
import { AppStatusTypes } from "../objects/customTypes";
export interface IApps extends Document {
    _id: mongoose.Types.ObjectId;
    app_name: string;
    vc_name: string;
    vc_value: number;
    vc_mode: string;
    App_Category: string;
    App_Platform: string;
    App_Store_URL: string;
    callBackUrl: string;
    creator: mongoose.Types.ObjectId;
    api_key: string;
    api_secret: string;
    appid: string;
    offerwallColor: string;
    offerwallLogo: string;
    maximumLOI: number;
    /**
     * Non block good publishers from fingerprint check
     */
    FingerprintCheckEnabled: boolean;
    /**
     * Give free dq point equivalent to 0.01 USD if true
     */
    dqPointsByRorApplicable: boolean;
    /**
     * Check for lucid surveys availability app wise
     */
    LucidSurveysEnabled: boolean;
    /**
     * Check for inbrain surveys availability app wise
     */
    InbrainSurveysEnabled: boolean;
    /**
     * Check for dynata surveys availability app wise
     */
    DynataSurveysEnabled: boolean;
    /**
     * Check for rapidoreach surveys availability app wise
     */
    RapidoReachSurveysEnabled: boolean;
    /**
     * Check for yoursurveys availability app wise
     */
    YourSurveysEnabled: boolean;
    /**
     * Check for yoursurveys availability app wise
     */
    TolunaSurveysEnabled: boolean;
    /**
     * Disqualification points
     * VC Amount which will be rewarded if user has attempted the survey but disqualified due
     * user profile didnot match the requirement
     */
    DQPoints: number;
    /**
     * Share ratio
     * if ROR gets 100 USD then share for publisher will be calculated as
     * Publisher's earnings = ROR Earnings x Share Ratio
     * Share ratio will be usually in decimals and always less than 1
     * ie 0.55, 0.65, 0.75 etc
     */
    ShareRatio: number;
    /**
     * PENDINGAPPROVAL:
     *    live surveys will not be shown and .test will be true
     * REQUEST_SENT:
     *    live surveys will not be shown and .test will be true
     * APPROVED:
     *    Live surveys will be available and .test will be false
     *
     */
    status: AppStatusTypes;
    /**
     * App SDK microservice testing
     * true: Test rewards will be sent to SDK
     * false: Actual rewards will be sent to SDK
     */
    test: boolean;
    /**
     * Resrarch category list for which app  is configured
     */
    ResearchCategories: mongoose.Types.ObjectId[];
    ResearchIndustries: mongoose.Types.ObjectId[];
}
export declare const appsModel: mongoose.Model<IApps, {}, {}, {}, any>;
