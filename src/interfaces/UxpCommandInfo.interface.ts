export interface UxpCommandInfo {
  id: string;
  label: string;
  description: string;
  shortcut: {
    shortcutKey: string;
    commandKey: boolean;
    altKey: boolean;
    shiftKey: boolean;
    ctrlKey: boolean;
  };
}
