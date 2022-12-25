import mongoose, { Document, model, Schema } from "mongoose";

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  email: String;
  password: string;
  FirstName: String;
  LastName: String;
  PublisherType: String;
  status: String;
  apps: mongoose.Types.ObjectId[];
  campaigns: mongoose.Types.ObjectId[];
  token: String;
  resetPasswordExpires: Date;
  AccessLevel: [String];
  createdAt: Date;
  updatedAt: Date;
  ReferralAdvertiserId: string;
  TypeOfSupplier: string;
}

export const userSchema = new Schema(
  {
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
        type: Schema.Types.ObjectId,
        ref: "Apps",
      },
    ],
    campaigns: [
      {
        type: Schema.Types.ObjectId,
        ref: "campaign",
      },
    ],
    ReferralAdvertiserId: {
      type: String,
    },
    TypeOfSupplier: {
      type: String,
    },
  },
  { timestamps: true }
);

// export const userModel = model<IUser>("User", userSchema);
//export default userModel;
