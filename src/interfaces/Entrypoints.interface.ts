import { MenuItems } from './UxpMenuItems.interface';
import { UxpCommandInfo } from './UxpCommandInfo.interface';
import { UxpPanelInfo } from './UxpPanelInfo.interface';
import { UxpPluginInfo } from './UxpPluginInfo.interface';
import { RT } from './UxpRT.interface';

export interface ControllerProps {
  id: string;
  title?: string;
  size?: { width: number; height: number };
  menuItems?: MenuItems[];
}

export type ControllerComponent = (...args: any) => JSX.Element;

interface MenuItem {
  id: string;
  label: string;
  enabled: boolean;
  checked: boolean;
}

type PluginName = string;
type PannelMap = Record<
  PluginName,
  {
    create(this: UxpPanelInfo): RT;
    show?(this: UxpPanelInfo): RT;
    hide(this: UxpPanelInfo): RT;
    destroy(this: UxpPanelInfo): RT;
    invokeMenu?(this: UxpPanelInfo): RT;
    menuItems: (MenuItem & {
      submenu?: MenuItem[];
    })[];
  }
>;

type CommandMap = Record<PluginName, { run(this: UxpCommandInfo): RT }>;

/**
 * https://developer.adobe.com/photoshop/uxp/2022/uxp/reference-js/Modules/uxp/Entry%20Points/EntryPoints/
 */
export interface Entrypoints {
  plugin: ((this: UxpPluginInfo) => void) | { create(this: UxpPluginInfo): RT; destroy(this: UxpPluginInfo): void };
  commands: CommandMap;
  panels: PannelMap;
}
