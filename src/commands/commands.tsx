import React from 'react';
import { ControllerComponent } from '../interfaces/Entrypoints.interface';
import { About } from '../components/About';
import { ControllerProps } from '../interfaces/Entrypoints.interface';
import { CommandController } from '../controllers/CommandController';

type CommandId = typeof COMMAND_IDS[keyof typeof COMMAND_IDS];
export type CommandMap = Record<CommandId, CommandController>;

interface Commands extends ControllerProps {
  component: ControllerComponent;
}

export const COMMAND_IDS = Object.freeze({
  SHOW_ABOUT: 'showAbout',
});

export const Commands: Readonly<Commands[]> = [
  {
    id: COMMAND_IDS.SHOW_ABOUT,
    title: 'React Starter Plugin Demo',
    size: { width: 480, height: 480 },
    component: ({ dialog }) => <About dialog={dialog} />,
  },
];
