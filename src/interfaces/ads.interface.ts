export interface GoogleAdsCredentials {
  clientEmail: string;
  privateKey: string;
  developerToken: string;
  loginCustomerId?: string;
}

export interface Campaign {
  resourceName: string;
  id: string;
  name: string;
  status: "ENABLED" | "PAUSED" | "REMOVED";
  advertisingChannelType: string;
  budget: {
    resourceName: string;
    amountMicros: string;
  };
  targetSpend?: {
    cpcBidCeilingMicros: string;
  };
}

export interface SearchGoogleAdsResponse {
  results: Array<{
    campaign: Campaign;
  }>;
  nextPageToken?: string;
}
