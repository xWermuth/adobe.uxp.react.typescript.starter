import { RT } from './UxpRT.interface';

export interface MenuItems {
  id: string;
  label: string;
  enabled: boolean;
  checked: boolean;
  oninvoke(): RT;
}
