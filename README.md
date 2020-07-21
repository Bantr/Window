<h1 align="center">
  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/Bantr/Koyi/Node.js%20CI">
 <img alt="Discord" src="https://img.shields.io/discord/626436103573864448?label=Discord">
  <br/>
  <a href="https://bantr.app">
    <img src="https://github.com/Bantr/Spawn/blob/master/public/static/assets/icon/4x/color-combo-2%404x.png" align="center" alt="Bantr" width="200"/>
  </a>
</h1>

<h3 align="center">Bantr is free to use. But not to operate. Please consider supporting our service!</h3>
<p align="center">The repository contains the frontend of the application and is completely written in <strong>React</strong>.</p>

## What is Bantr?
Originally Bantr started as a [CSGO](https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/) ban notifier. We often found ourselves frustrated playing against cheaters. As a player there is nothing more you can do than report them. It often remained unknown if that player received a ban or just continued cheating or maybe he just had a good day. Bantr tracks all the players you played against and will keep track of their ban record. When they receive a ban, Bantr will notify you.

To get the data (players) you played against we need to parse the game demos. These demos contains lots more data. The idea grew and we decided to extract that data and create a data analytics platform. 

Bantr is a data analytics platform that processes match data from Counterstrike Global Offensive player's. 
### Our vision
Currently we are just working and learning as much as we can, the goal is to create a very extensive, fast, good looking data analytics platform that is free for everyone. 

### Status
Bantr is currently mainly developed by 2 college students since the beginning of 2020. You can see our current priorities and what we are working on in the main project board. We have recently released the first alpha version and are working hard on a feature rich beta version.

#### Technologies
Here is a list of the largest technologies we use in this repository. If you are not familier with one of them, no problem. We do recommend reading the docs before diving into the code, otherwise you might feel overwhelmed.

- [**React**](https://reactjs.org/)- Frontend React app
- [**Cypress**](https://www.cypress.io/) - Regression tests (mocked)
- [**Storybook**](https://storybook.js.org/) - Isolates components. Easier for creating and testing its behavior.

## Contributing
We heartily welcome any and all contributions! Feel free to create a pull request and we are looking forward to review your code.

### Folder structure
```sh
Bantr/Spawn
├── cypress       # Cypress mocked tests
├── lib           # Shared functions & reusable components
├── public        # files that are served 
├── scripts       # Scripts 
├── src           # Frontend SPA
├── stories       # Global storybook
```

### Installation
```sh
npm install # Install dependencies
npm start  # Starts the application using webpack's dev server
```

### Secrets
on the root of the repo you can find an example .env file ([.env.example](https://github.com/Bantr/Spawn/blob/master/.env.example)). Create a new .env file on the root of the repository and add the following 3 variables
- **HOSTNAME** - The address the webpack-dev-server should start the application (default: localhost)
- **PORT** - The port the webpack-dev-server should start the application (default: 8080)
- **HASURA_GRAPHQL_USER_SECRET** - Required to download the get the graphql types (runs before dev-server).
- **API_ROOT** - The address of the api. This should be set to **api.bantr.app*

How do you obtain the **HASURA_GRAPHQL_USER_SECRET**? <br/> Go to the current Bantr.app and login with your steam account (create one if you don't have one, they are free). When authenticated open a new tab and surf to https://api.bantr.app/auth/session. This will return your session object. One of the keys will be **'graphQLKey'**. This is the key you need.

