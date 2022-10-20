# React Starter Plugin

This plugin is a good place to get started when building a Photoshop plugin using React. It comes defined with all the dependencies that you'll need to get started. As this is a React project, you'll need to do some initial configuration before this will be usable in Photoshop.

## Inspired by [thejustinwalsh](https://github.com/thejustinwalsh/react-uxp-spectrum)


## Debugging

UXP is used for debugging the application. There is both at UI interface in Adobe Creative Cloud Store and a CLI. This application uses the CLI script to run the application in watch mode (*hot reload*). You can either choose to use the UXP gui to show logs or debug **or** use the CLI to show logs. The two does the same - it is just matter of preference.

## UXP CLI

**[Windows](https://github.com/adobe-uxp/devtools-cli/blob/main/packages/uxp-devtools-cli/README.md#getting-started)**

**``MAC``**

```bash
# Install yarn
sudo npm install yarn  --location=global

# Add yarn to path
export PATH="$(yarn global bin):$PATH"
```

### UXP commands

```bash
# Start service server - REQUIRED
uxp service start

# Enable devtools - REQUIRED
uxp devtools enable

# Disable devtools
uxp devtools disable

# Loading
uxp plugin load --manifest "dist/manifest.json"

#unloading
cd dist && uxp plugin unload && cd ..
```

## Install dependencies

### Node modules

First, make sure that `npm` is installed on your system.

After you ensure that your terminal is in the root of this project, use `npm` to install the various dependencies needed:

```bash
npm install
```

## Developing

Remember to open Photoshop.
First run in one terminal:

```bash
# Starts the dev service for photoshop
npm run service
```

Then in another terminal run:

```bash
# Loads the plugin into photoshop and devtools
npm run init
```

Then for hot reload run:

```bash
npm run watch 
```

Below is what `npm run watch` consists of:

```bash
# Hot reload for when files in the src folder changes
npm run ts:watch

# Watches when files in dist folder changes and notifies Photoshop
npm run uxp:watch
```

## Build Process

* `npm build` will build a production version of the plugin and place it in `dist` folder. It will not update every time you make a change to the source files.

> You **must** run either `watch` or `build` prior to trying to use within Photoshop!

### Using UXP UI

## Specify dest folder

Remember to specify dest folder inside the UXP Developer Tools application

**```••• button more > advanced > Plugin Dest folder```**

**```Path to dest```**

```text
../dist
```

## Launching in Photoshop

You can use the UXP Developer Tools to load the plugin into Photoshop.

If the plugin hasn't already been added to your workspace in the UXP Developer Tools, you can add it by clicking "Add Plugin...". You can either add the `manifest.json` file in the `dist` folder or the `plugin` folder.
* If you add the one in the `plugin` folder, then you need to update the relative path to the plugin build folder ( `dist` ) by clicking the ••• button > "Options" > "Advanced" > "Plugin build folder".
* During development, it is recommended to build the plugin using `yarn watch` and load the `manifest.json` in the (plugin build) `dist` folder. 

Once added, you can load it into Photoshop by clicking the ••• button on the corresponding row, and clicking "Load". Switch to Photoshop and you should see the starter panels.

- Here you can enable ```Watch``` mode, which offers hot reload while developing inside Photoshop

## UI library

The app uses [Spectrum](https://developer.adobe.com/xd/uxp/uxp/reference-spectrum/User%20Interface/sp-action-button/). It is not component based yet, so we have to make our own. In the future the web widget will be accesible in UXP [Spectrum CSS](https://react-spectrum.adobe.com/react-spectrum/index.html).

## What this plugin does

This plugin doesn't do much, but does illustrate how to create two panels in Photoshop with `entrypoints.setup`, and how to create flyout menus. It also demonstrates the use of several Spectrum UXP widgets to create a simple color picker in the primary panel.

### Common Issues

If you're getting errors with `npm install`, we can reinstall the project dependencies. Let's first make sure to delete `node_modules/*` from the `template` folder as well as the `package-lock.json` and `yarn.lock` file. Staying in the `template` directory, run `npm install` again and this will regenerate your `package-lock.json` file. 

PS Version : 23.2.0 or higher
UXP Version : 5.6 or higher

```bash
Failed to load script file: index.js
Failed to invoke the stat. File Path: /Desktop/tmp react uxp/plugin/index.js
```

**Remember to specify the dist folder for Adobe UXP Developer tool by pressing ```more > advanced > Plugin Dest folder```**
