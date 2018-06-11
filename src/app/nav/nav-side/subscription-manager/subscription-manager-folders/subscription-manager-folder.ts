import {SubscriptionManagerSubscription} from "../subscription-manager-subscriptions/subscription-manager-subscription";

export interface SubscriptionManagerFolder {
  id: number;
  name: string;
  user_id: number;
  created_at: Date;
  updated_at: Date;
  subscriptions: SubscriptionManagerSubscription[];
}
