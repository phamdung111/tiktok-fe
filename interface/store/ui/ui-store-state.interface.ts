import type { NotificationDeleteDataInterface } from "~/interface/ui/notification/notification-delete-data.interface";

export interface UiStoreStateInterface {
  isOpenOverlay: boolean;
  menuSelected: string;
  popup: {
    isDisplayPopup: boolean;
    component: any;
    props: any;
  };
  isUploadPost: boolean;
  notificationDeleteData: NotificationDeleteDataInterface[] | null;
}
