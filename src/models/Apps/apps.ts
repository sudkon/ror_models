import mongoose, { Document, model, Schema } from "mongoose";
import { AppStatusTypes } from "../../objects/customTypes";
import { genetateNanoIdWithoutDash } from "../../objects/functions";

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
export const appSchema = new Schema(
  {
    appid: {
      type: String,
      required: true,
      default: () => {
        return genetateNanoIdWithoutDash();
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
      default:
        "https://www.rapidoreach.com/17bf13e3188bbb9ce763f750432acf3a.png",
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
      type: Schema.Types.ObjectId,
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
  },
  { timestamps: true }
)
  .index({
    appid: 1,
  })
  .index({
    api_key: 1,
  });

//Hide shareration property in FE apis
appSchema.methods.toJSON = function () {
  var obj: any = this.toObject();
  delete obj.ShareRatio;
  return obj;
};

// export const appsModel = model<IApps>("Apps", appSchema);
