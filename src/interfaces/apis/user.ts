export type DeviceInfo = {
  fcmToken: string;
  duId: string;
  os: string;
};

export type EmailBody = {
  email: string;
};
// #region Registration
export type CheckUserParams = {
  email?: string;
  mobile?: string;
  username?: string;
};

export type CheckUserResult = {
  userExists?: boolean;
  registerType?: string;
};

export type RegisterBody = {
  registerType?: string;
  username?: string;
  email?: string;
  mobile?: string;
  password?: string;
};
export type UserResult = {
  providers: unknown[];
  images: unknown[];
  isRegisterCompleted: boolean;
  isVerified: boolean;
  likedPosts: unknown[];
  viewCount: number;
  deletedAt: Date;
  "_id ": string;
  mobile: string;
  referCode: string;
  createdAt: number;
};

export type VerifyResultType = {
  success: boolean;
  result: {
    statusCode: number;
    success: boolean;
    result: [
      {
        success: boolean;
        result: {
          deletedAt: Date;
          _id: string;
          to: string;
          body: string;
          from: string;
          userId: string;
          providerResponse: {
            body: string;
            numSegments: string;
            direction: string;
            from: string;
            to: string;
            dateUpdated: string;
            price: number;
            errorMessage: unknown;
            uri: string;
            accountSid: string;
            numMedia: string;
            status: string;
            messagingServiceSid: unknown;
            sid: string;
            dateSent: unknown;
            dateCreated: string;
            errorCode: unknown;
            priceUnit: string;
            apiVersion: string;
            subresourceUris: {
              media: string;
            };
          };
          providerName: string;
          createdAt: Date;
        };
      }
    ];
  };
};

export type SendResultType = {
  success: boolean;
  result: {
    statusCode: number;
    success: boolean;
    result: [
      {
        success: boolean;
        result: {
          deletedAt: Date;
          _id: string;
          userId: string;
          messageId: string;
          from: string;
          to: string;
          title: string;
          body: string;
          providerResponse: {
            statusCode: 202;
            body: string;
            headers: {
              server: string;
              date: string;
              "content-length": string;
              connection: string;
              "x-message-id": string;
              "access-control-allow-origin": string;
              "access-control-allow-methods": string;
              "access-control-allow-headers": string;
              "access-control-max-age": string;
              "x-no-cors-reason": string;
            };
          };
          providerName: string;
        };
      }
    ];
  };
};

export type RegisterResult = {
  user?: UserResult;
  verifyResult?: VerifyResultType;
  sendResult?: SendResultType;
};

export type VerifyResendBody = {
  email?: string;
  mobile?: string;
  code?: string;
};

// #endregion

//#region Login

export type LoginBody = {
  username: string;
  password: string;
  registerType: string;
};

export type LoginByAccountBody = {
  provider: "google";
};

export interface ISettingUser {
  notifications: {
    web: {
      isActive: boolean;
      marketing: boolean;
      social: boolean;
      updates: boolean;
    };
    sms: {
      isActive: boolean;
      marketing: boolean;
      social: boolean;
      updates: boolean;
    };
    email: {
      isActive: boolean;
      marketing: boolean;
      social: boolean;
      updates: boolean;
    };
  };
  oneClickTrading: boolean;
  volatilityAlert: boolean;
}
export type LoginOTPResult = {
  isVerified: boolean;
  isActive: boolean;
  isBlocked: boolean;
  role: string;
  privacy: string;
  isKYCVerified: boolean;
  isProfileCompleted: boolean;
  address: string;
  deletedAt: number;
  _id: string;
  mobile: string;
  registerType: string;
  referCode: string;
  createdAt: Date;
  settings: ISettingUser;
  updatedAt: Date;
  twoFactorAuth: boolean;
};

export type LoginNormalResult = {
  providers: unknown[];
  images: unknown[];
  isRegisterCompleted: boolean;
  isVerified: boolean;
  likedPosts: unknown[];
  viewCount: number;
  deletedAt: Date;
  _id: string;
  email: string;
  referCode: string;
  createdAt: Date;
  updatedAt: Date;
  birthDate: string;
  fullName: string;
  gender: string;
  username: string;
};

export type LoginByAccountResult = {
  provider: string;
  url: string;
};

//#endregion

//#region Token

export type RefreshTokenBody = {
  deviceInfo: DeviceInfo;
};

export type RefreshTokenResult = {
  success: boolean;
};
//#endregion

export type SucessResult = {
  success: boolean;
};
