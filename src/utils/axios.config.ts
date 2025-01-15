import axios, { GaxiosOptions, request } from "gaxios";
import { GoogleAuth } from "google-auth-library";

export class GoogleAdsApiClient {
  private static auth: GoogleAuth;

  static async initialize(credentials: {
    clientEmail: string;
    privateKey: string;
    developerToken: string;
  }) {
    this.auth = new GoogleAuth({
      credentials: {
        client_email: credentials.clientEmail,
        private_key: credentials.privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/adwords"],
    });
  }

  static async request<T>(options: GaxiosOptions): Promise<T> {
    const authClient = await this.auth.getClient();
    const token = await authClient.getAccessToken();

    const defaultOptions: GaxiosOptions = {
      baseURL: "https://googleads.googleapis.com",
      headers: {
        Authorization: `Bearer ${token.token}`,
        "developer-token": process.env.GOOGLE_ADS_DEVELOPER_TOKEN,
        "Content-Type": "application/json",
      },
    };

    return request<T>({
      ...defaultOptions,
      ...options,
    });
  }
}
