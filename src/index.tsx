import React from 'react';
import './styles.css';
import { entrypoints } from 'uxp';
import { PanelController } from './controllers/PanelController';
import { CommandController } from './controllers/CommandController';
import { CommandMap, Commands } from './commands/commands';
import { Panels } from './panels/panels';
import { MenuItems } from './interfaces/UxpMenuItems.interface';
import { RT } from './interfaces/UxpRT.interface';

const commands = Commands.reduce<CommandMap>((acc, { component, ...command }) => {
  acc[command.id] = new CommandController(component, command);
  return acc;
}, {} as CommandMap);

const panels = Panels.reduce((acc, { component, menuItems, ...panel }) => {
  const _menuItems = menuItems.reduce<MenuItems[]>((acc, menuItem) => {
    const oninvoke = (): RT => menuItem.oninvoke(commands);
    acc.push({ ...menuItem, oninvoke });
    return acc;
  }, []);
  acc[panel.id] = new PanelController(component, { ...panel, menuItems: _menuItems });
  //
  return acc;
}, {});

entrypoints.setup({
  plugin: {
    create(plugin) {
      /* optional */ console.log('created', plugin);
    },
    destroy() {
      /* optional */ console.log('destroyed');
    },
  },
  commands,
  panels,
});
