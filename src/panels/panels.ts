import { ControllerProps } from '../interfaces/Entrypoints.interface';
import { Demos } from './Demos';

interface Panels extends ControllerProps {
  component(): JSX.Element;
}

export const panels: Readonly<Panels[]> = [
  {
    id: 'demos',
    component: Demos,
    menuItems: [{ id: 'reload2', label: 'Reload Plugin', enabled: true, checked: false, oninvoke: () => location.reload() }],
  },
];
