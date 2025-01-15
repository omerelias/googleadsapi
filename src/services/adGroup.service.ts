import { GoogleAdsApiClient } from "../utils/axios.config";
import { AdGroup, SearchGoogleAdsResponse } from "../interfaces/ads.interface";

export class AdGroupService {
  async listAdGroups(
    customerId: string,
    campaignId: string
  ): Promise<AdGroup[]> {
    const response = await GoogleAdsApiClient.request<SearchGoogleAdsResponse>({
      url: `/v14/customers/${customerId}/campaigns/${campaignId}/adGroups`,
      method: "GET",
    });

    return response.data.results.map((r) => r.adGroup);
  }
  // ... CRUD operations
}
