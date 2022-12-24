export type SupportedDevices = 'DESKTOP' | 'MOBILE' | 'TABLET';
export type SurveyByUserStatusType =
  | 'started'
  | 'completed'
  | 'disqualified'
  | 'quotacompleted'
  | 'attempted'
  | 'ovrquta'
  | 'qterm'
  | 'seqterm';
export type QuestionTypes = "Single Punch" | "Multi Punch";
export type campaignRedirectStatus = "completed" | "ovrquta" | "qterm" | "seqterm";
export type offerTypes = "1" /* Survey */ | "2" /* Offer */;
export type offerStatus = "C" | "P" | "F" | "UNDEFINED";
export type PartnerCodes = "RAPIDOREACH" | "PURESPECTRUM" | "PURESPECTRUMFUSION" | "DALIA" | "SAMPLICIO" | "YOURSURVEYS" | "DYNATA" | "INBRAIN" | "LUCIDLINK" | "UNDEFINED" | "TOLUNA"
export type url_security_encryption_types = "enc_sha1" | "enc_sha2" | "enc_sha3" | "None";
export type api_url_security_encryption_types = "api_enc_sha1" | "api_enc_sha2" | "api_enc_sha3";
export type shaAlgorithms = "sha1" | "sha256" | "sha3-256" | undefined;
export type PaymentStatusTypes = "PENDING" | "COMPLETED" | "PARTIAL"
export type ControlStateTypes = "cs_accept" | "cs_reject"
export type QuestionTypeType = "open_ended" | "single_punch"
export type redirectTypes = "complete" | "termination" | "quotafull"
export type SurveyInventoryTypes = "Campaign" | "FinalSurvey" | "NoInventory" | undefined;
export type SenderEventTypes = "cbUpdate" | "cbAdded" | "cbNotUpdated" | "removeSurvey" | "surveyStatusForRating";
export type AppStatusTypes = "PENDINGAPPROVAL" | "REQUEST_SENT" | "APPROVED" | "BLOCKED" | "REJECTED";
export type CampaignTypes = "MARKETRESEARCH" | "BRANDTRACKING"
