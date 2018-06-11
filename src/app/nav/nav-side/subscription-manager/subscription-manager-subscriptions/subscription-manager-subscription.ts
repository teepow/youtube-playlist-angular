export interface SubscriptionManagerSubscription {
  id: number;
  channel_id: string;
  folder_id: number;
  user_id: number;
  title: string;
  created_at: Date;
  updated_at: Date;
}
