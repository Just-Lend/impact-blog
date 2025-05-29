export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  content: string;
  coverImage: string;
  publishedAt: string;
}

export interface Article {
  id: number;
  title: string;
  content: string;
  image_urls: string[];
  slug: string;
  preview: string;
  categories: string[];
  tags: string[];
  campaign_categories: any[];
  sdgs: any[];
  external_campaign?: any;
}

export interface LocalAuthority {
  id: number;
  name: string;
  code: string;
  latitude?: string;
  longitude?: string;
}
