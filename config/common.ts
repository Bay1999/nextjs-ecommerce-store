export interface CommonConfig {
  API_BASE_URL: string;
  APP_ENV: string;

  BREADCRUMBS: {
    title: string;
  }[]
}

const config: CommonConfig = {
  API_BASE_URL: process.env.API_BASE_URL || "http://localhost:8000",
  APP_ENV: process.env.NEXT_PUBLIC_APP_ENV || "development",
  BREADCRUMBS: [{
    title: "Admin"
  }]
}

export const {
  API_BASE_URL,
  APP_ENV,
  BREADCRUMBS
} = config