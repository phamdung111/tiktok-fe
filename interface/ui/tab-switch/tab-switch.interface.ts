import type { Raw } from "vue";

export interface TabSwitchInterface {
  value: string;
  icon: string;
  component: Raw<any> | string;
}
