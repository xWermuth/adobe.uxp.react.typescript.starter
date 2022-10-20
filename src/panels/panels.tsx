import React from 'react';
import { RT } from '../interfaces/UxpRT.interface';
import { ControllerComponent, ControllerProps } from '../interfaces/Entrypoints.interface';
import { MenuItems } from '../interfaces/UxpMenuItems.interface';
import { Demos } from './Demos';
import { MoreDemos } from './MoreDemos';
import { CommandMap } from '../commands/commands';

type InvokeFn = (controllers: CommandMap) => RT;

export type Panels = Omit<ControllerProps, 'menuItems'> & {
  menuItems?: (Omit<MenuItems, 'oninvoke'> & { oninvoke: InvokeFn })[];
} & {
  component: ControllerComponent;
};

export const PANNEL_IDS = Object.freeze({
  DEMOS: 'demos',
  MORE_DEMOS: 'moreDemos',
});

export const Panels: Readonly<Panels[]> = [
  {
    id: PANNEL_IDS.DEMOS,
    component: () => <Demos />,
    menuItems: [
      { id: 'reload1', label: 'Reload Plugin', enabled: true, checked: false, oninvoke: () => location.reload() },
      {
        id: 'dialog1',
        label: 'About this Plugin',
        enabled: true,
        checked: false,
        oninvoke: (controller) => controller.showAbout.run(),
      },
    ],
  },
  {
    id: PANNEL_IDS.MORE_DEMOS,
    component: () => <MoreDemos />,
    menuItems: [{ id: 'reload2', label: 'Reload Plugin', enabled: true, checked: false, oninvoke: () => location.reload() }],
  },
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};
