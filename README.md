# Budget Tracker

### Unit 18 PWA Homework: Online/Offline Budget Trackers

### User Story
* AS AN avid traveller
* I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
* SO THAT my account balance is accurate when I am traveling

## Description
For this assignment, I was given the base code for this application and I added functionality to allow for offline access and functionality as well as add functionality to make this a Progressive Web App (PWA).

Access the deployed Heroku app here: https://budget-tracker-32087.herokuapp.com/ 

Access the git repo here: https://github.com/cbayley-edu/budget-tracker


## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Questions](#questions)

## Installation 

Since this is a Heroku app, there is no installation required however, if you want to clone or fork my github repo, feel free to do so. After cloning my repo you will have to update information in the package.json as well as setup your own MongoDB.  You will need to run a few commands in the terminal as well:
* npm i
* npm run build
* npm start  (this application is built to run locally on port 3005, which can be changed in server.js)


## Usage

Visit the Heroku app URL to use the application: https://budget-tracker-32087.herokuapp.com/ 

You will start with a balance of $10,000.

![start-page](./assets/start-page.png)

You can add an adjusting entry to correct the balance, if needed.

![adjust-balance](./assets/adjust-balance.png)

$5,000 was subtracted from the opening balance leaving a balance of $5,000. The total is updated and your entry is added to your Transactions.

![updated-starting-balance](./assets/updated-starting-balance.png)

While online, you can continue to make entries and add and subtract from the total as needed.

![add-transaction-online](./assets/add-transaction-online.png)

Your total and transaction list will immediately update upon selecting Add Funds or Subtract Funds.

![updated-balance-1](./assets/updated-balance-1.png)

You can also add entries while your offline.

![add-transaction-offline](./assets/add-transaction-offline.png)

Even offline, your total and transaction list will immediately update upon selecting Add Funds or Subtract Funds.

![updated-balance-2](./assets/updated-balance-2.png)

When you go back online the update is seemless. In the background, the application is listening for an internet connection and as soon as you're connected, your local storage will update the online database.

Also included with the application is a graph showing a visual of your balance over time.

![online-update-graph](./assets/online-update-graph.png)

In the address bar, on the far right, next to the favorites icon you'll see another icon that will allow you to install the app locally.

![add-app](./assets/add-app.png)

Once you click the icon you will be asked to install the app.

![local-install](./assets/local-install.png)  ![heroku-install](./assets/heroku-install.png)

The local application looks and functions the same as accessing the application through the website but it allows you access the application without launching your web browser.

![budget-tracker-app](./assets/budget-tracker-app.png)

You can access the app now at anytime from the shortcut added to your desktop (or your phone, if you use the app on your mobile device).

![pwa-shortcut](./assets/pwa-shortcut.png)


## License 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is covered by the above license(s). Click on the badge for more information.


## Questions 

GitHub username: cbayley-edu
GitHub profile link: https://github.com/cbayley-edu

Please email me at christinabayley@comcast.net with any questions you have or any issues you come across.

