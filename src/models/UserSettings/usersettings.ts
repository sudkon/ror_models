import { Document, model, Schema } from 'mongoose';
import { IUser } from '../Users';

export interface IUsersettings extends Document {
  companyName: String;
  phonenumber: String;
  Business_Type: String;
  Tax_Status: String;
  websiteUrl: String;
  companyAddress: ICompanyAddress;
  contactInfo: IContactInfo;
  bankInfo: IBankInfo;
  creator: IUser;
}
export interface IBankInfo extends Document {
  bankName: String;
  nameOnAccount: String;
  accountType: String;
  accountNumber: String;
  routingNumber: String;
  paymentMode: String;
  PaypalID: String;
}

export interface IContactInfo extends Document {
  name: String;
  email: String;
}

export interface ICompanyAddress extends Document {
  address: String;
  address2: String;
  city: String;
  zipcode: String;
  state: String;
  country: String;
}

export const userSettingsSchema = new Schema(
  {
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
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);