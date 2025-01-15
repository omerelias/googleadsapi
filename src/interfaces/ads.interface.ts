export interface GoogleAdsConfig {
  clientEmail: string;
  privateKey: string;
  developerToken: string;
  loginCustomerId?: string;
}

export interface AdGroup {
  resourceName: string;
  id: string;
  name: string;
  status: "ENABLED" | "PAUSED" | "REMOVED";
  campaignId: string;
  type: "SEARCH" | "DISPLAY" | "VIDEO" | "SHOPPING";
  cpcBidMicros?: string;
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
  adGroups?: AdGroup[];
}

export interface SearchGoogleAdsResponse {
  results: Array<{
    campaign?: Campaign;
    adGroup?: AdGroup;
  }>;
  nextPageToken?: string;
}

export interface ReportResponse {
  results: Array<{
    campaign: {
      id: string;
      name: string;
    };
    metrics: {
      impressions: string;
      clicks: string;
      costMicros: string;
    };
  }>;
}
