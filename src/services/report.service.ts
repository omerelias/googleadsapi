import { GoogleAdsApiClient } from "../utils/axios.config";
import { ReportResponse } from "../interfaces/ads.interface";

export class ReportService {
  async getCampaignPerformance(
    customerId: string,
    dateRange: {
      startDate: string;
      endDate: string;
    }
  ) {
    const response = await GoogleAdsApiClient.request<ReportResponse>({
      url: `/v14/customers/${customerId}/googleAds:searchStream`,
      method: "POST",
      data: {
        query: `
          SELECT 
            campaign.id,
            campaign.name,
            metrics.impressions,
            metrics.clicks,
            metrics.cost_micros
          FROM campaign
          WHERE segments.date BETWEEN '${dateRange.startDate}' AND '${dateRange.endDate}'
        `,
      },
    });

    return response.data;
  }
}
