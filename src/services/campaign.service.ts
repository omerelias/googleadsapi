import { GoogleAdsApiClient } from "../utils/axios.config";
import { Campaign, SearchGoogleAdsResponse } from "../interfaces/ads.interface";

export class CampaignService {
  async listCampaigns(customerId: string): Promise<Campaign[]> {
    const response = await GoogleAdsApiClient.request<SearchGoogleAdsResponse>({
      url: `/v14/customers/${customerId}/campaigns`,
      method: "GET",
    });

    return response.results.map((r) => r.campaign);
  }
}
