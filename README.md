# Bot Verse

The Bot Verse App is a web application built with React.js that allows users to manage their army of bots. Users can enlist bots into their army, release bots from their army, and permanently discharge bots from both the app and the server. The app also provides details about each bot, such as their class, health, damage, armor, catchphrase, creation date, and last update date.

# Getting Started

# Prerequisites

Before running the Bot Army Management App, you need to have the following installed on your machine:

Node.js

npm or yarn (Node Package Managers)

# Installation

Fork and git clone this app's repository

To install the required dependencies, run the following command in the project directory:

npm install

# Running the App

To start the development server and run the app, use the following command:

npm start

The app will be accessible at http://localhost:3000 in your web browser.

# Features

View a collection of bots available for enlistment.

Enlist a bot into your army by clicking the "Enlist" button.

View your enlisted bots in the "Bot Army" section.

Release a bot from your army by clicking the "Release" button.

Discharge a bot permanently from both the app and the server by clicking the "X" button.

See detailed information about each bot, including their class, health, damage, armor, catchphrase, creation date, and last update date.

# Technologies Used

React.js: Front-end JavaScript library for building user interfaces.

HTML: Basic web structure

CSS: Cascading Style Sheets for styling the components.

# API Endpoint

The app interacts with a server to fetch the bot data and perform deletion requests. The server endpoint for bot data is:

https://bots-server.onrender.com/bots

To delete a bot permanently, the app sends a DELETE request to the server endpoint:

https://bots-server.onrender.com/bots/{bot-id}

# Usage

When you open the app, you will see a collection of available bots displayed in cards. Each card shows the bot's image, name, class, health, damage, and armor.

To enlist a bot into your army, click the "Enlist" button on the bot's card. If the bot is already enlisted, you will see an alert indicating that the bot is already enlisted.

To view detailed information about a bot, click on the bot's card. It will take you to the "Bot Details" page where you can see additional information about the bot, including their catchphrase, creation date, and last update date.

From the "Bot Details" page, you can either enlist the bot into your army by clicking the "Enlist" button or go back to the bot collection by clicking the "Back to List" button.

To release a bot from your army, go to the "Bot Army" section at the bottom of the page. Click the "Release" button on the bot's card to remove it from your army.

If you want to permanently discharge a bot from both the app and the server, click the "X" button on the bot's card in the "Bot Army" section. The bot will be deleted from both your army and the server.

# Contributing

Contributions are welcome! If you have any suggestions, find any issues, or want to add new features to the app, please feel free to open an issue or create a pull request.

# License

This project is licensed under the CAK License.