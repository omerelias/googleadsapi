import { GoogleAdsApiClient } from "../utils/axios.config";
import { Campaign, SearchGoogleAdsResponse } from "../interfaces/ads.interface";

export class CampaignService {
  async listCampaigns(customerId: string): Promise<Campaign[]> {
    const response = await GoogleAdsApiClient.request<SearchGoogleAdsResponse>({
      url: `/v14/customers/${customerId}/campaigns`,
      method: "GET",
    });

    return response.data.results.map((r) => r.campaign);
  }
  async getCampaign(customerId: string, campaignId: string): Promise<Campaign> {
    const response = await GoogleAdsApiClient.request<SearchGoogleAdsResponse>({
      url: `/v14/customers/${customerId}/campaigns/${campaignId}`,
      method: "GET",
    });

    return response.data.results[0].campaign;
  }
  async createCampaign(customerId: string, campaign: Campaign): Promise<Campaign> {
    const response = await GoogleAdsApiClient.request<SearchGoogleAdsResponse>({
      url: `/v14/customers/${customerId}/campaigns`,
      method: "POST",
      data: {
        campaign,
      },
    });

    return response.data.results[0].campaign;
  }
}
