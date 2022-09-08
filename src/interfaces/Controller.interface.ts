export interface ControllerProps {
  id: string;
  title?: string;
  size?: { width: number; height: number };
  menuItems?: {
    id: string;
    label: string;
    enabled: boolean;
    checked: boolean;
    oninvoke(): void | Promise<void>;
  }[];
}
