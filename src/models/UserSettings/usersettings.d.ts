/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document, Schema } from 'mongoose';
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
export declare const userSettingsSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    creator: import("mongoose").Types.ObjectId;
    companyName?: string | undefined;
    phonenumber?: string | undefined;
    Business_Type?: string | undefined;
    Tax_Status?: string | undefined;
    websiteUrl?: string | undefined;
    companyAddress?: {
        address?: string | undefined;
        address2?: string | undefined;
        city?: string | undefined;
        zipcode?: string | undefined;
        state?: string | undefined;
        country?: string | undefined;
    } | undefined;
    contactInfo?: {
        email?: string | undefined;
        name?: string | undefined;
    } | undefined;
    bankInfo?: {
        paymentMode?: string | undefined;
        PaypalID?: string | undefined;
        bankName?: any;
        nameOnAccount?: string | undefined;
        accountType?: "CHECKING" | "CURRENT" | "SAVINGS" | undefined;
        accountNumber?: string | undefined;
        routingNumber?: string | undefined;
    } | undefined;
}>;
