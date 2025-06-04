export interface PatronUser {
  id: number;
  created_at: string;
  name: string;
  email: string;
  company_name?: string;
  telephone?: string;
  projects_of_interest?: string;
  projects_location?: string;
  social_value_budget?: string;
  ref_creator_id?: number;
  stripe_customer_id?: string;
  type?: string;
  patron_addresses?: any[];
  refs?: any[];
}
