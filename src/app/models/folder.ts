import {Subscription} from "./subscription";

export interface Folder {
  id: number;
  name: string;
  user_id: number;
  created_at: Date;
  updated_at: Date;
  subscriptions: Subscription[];
}
