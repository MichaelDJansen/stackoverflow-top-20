export interface UsersResponse {
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
  items: Array<User>;
}

interface User {
  account_id: number;
  badge_counts: {
    bronze: number; 
    silver: number;
    gold: number;
  }
  creation_date: number;
  display_name: string;
  is_employee: boolean;
  last_access_date: number;
  last_modified_date: number;
  link: string;
  location: string;
  profile_image: string;
  reputation: number;
  reputation_change_day: number;
  reputation_change_month: number;
  reputation_change_quarter: number;
  reputation_change_week: number;
  reputation_change_year: number;
  user_id: number;
  user_type: string;
  website_url: string;
}