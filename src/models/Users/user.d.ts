import mongoose, { Document } from "mongoose";
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
export declare const userSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: "PENDINGAPPROVAL" | "BLOCKED" | "INACTIVE" | "ACTIVE";
    email: string;
    password: string;
    AccessLevel: string[];
    apps: mongoose.Types.ObjectId[];
    campaigns: mongoose.Types.ObjectId[];
    FirstName?: string | undefined;
    LastName?: string | undefined;
    PublisherType?: string | undefined;
    token?: string | undefined;
    resetPasswordExpires?: Date | undefined;
    ReferralAdvertiserId?: string | undefined;
    TypeOfSupplier?: string | undefined;
}>;
