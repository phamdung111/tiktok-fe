import type { VolumeInterface } from "~/interface/entity/volume/volume-interface";
import type { UiStoreStateInterface } from "~/interface/store/ui/ui-store-state.interface";
import type { NotificationDeleteDataInterface } from "~/interface/ui/notification/notification-delete-data.interface";

export const useUiStore = defineStore("ui", {
  state: (): UiStoreStateInterface => {
    return {
      isOpenOverlay: false,
      isDisplayMenuMobile: false,
      menuSelected: "/",
      popup: {
        isDisplayPopup: false,
        component: "",
        props: null,
      },
      isUploadPost: false,
      notificationDeleteData: [],
      globalVolume: 0,
    };
  },
  actions: {
    setMenuSelected(menu: string) {
      this.menuSelected = menu;
    },
    openPopup(component: any, props = Object.create(null)) {
      this.popup.props = props;
      this.popup.isDisplayPopup = true;
      this.popup.component = component;
    },
    closePopup() {
      this.popup.isDisplayPopup = false;
      this.popup.component = "";
      this.popup.props = null;
    },
    openNotificationDeleteData(item: NotificationDeleteDataInterface) {
      this.notificationDeleteData?.push(item);
    },
    closeNotificationDeleteData() {
      this.notificationDeleteData = [];
    },
    openMenuMobile() {
      this.isDisplayMenuMobile = true;
    },
    closeMenuMobile() {
      this.isDisplayMenuMobile = false;
    },
  },
});
