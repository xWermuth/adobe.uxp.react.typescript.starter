import { UxpCommandInfo } from './UxpCommandInfo.interface';

interface Dimensions {
  width: number;
  height: number;
}

export interface UxpPanelInfo {
  _manifestPanel: {
    type: string;
    panelId: string;
    id: string;
    title: string;
    label: string;
    description: string;
    hideFromMenu: boolean;
    hideFromPluginsPanel: boolean;
    initialLocation: string;
    maximumSize: Dimensions;
    minimumSize: Dimensions;
    preferredDockedSize: Dimensions;
    preferredFloatingSize: Dimensions;
    triggerEvents: any[];
    icons: {
      path: string;
      scaledPathList: {
        scale: number;
        path: string;
      }[];
      size: Dimensions;
      species: string[];
      theme: string[];
    }[];
  };
}
