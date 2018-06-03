import {Folder} from "./folder";

export interface Dashboard {
  name: string;
  user_id: number;
  folders: Folder;
  no_subscription_folders: string[];
  playlist_id: number;
}
