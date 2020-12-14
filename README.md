# Calorie Bookie
Obsido is a web application for budgeting/investing. Obsido means "invest" in latin. Users can input any amount of money they spend and see that data dynamically in visually dynamic charts. This project was made with React, Redux, Chart.js, Semantic-UI, and Rails API back end. 

Calorie Bookie is a web application where a user can log their daily calorie intake and bet against the calorie bookie on whether or not they reach their goal for 30 days. A user will create an account and then set a bet. The bet will be placed by putting in the amount of weight per week they would like to lose (1-2 lbs), then they will be given thier daily calorie intake limit (1200-1300 cal). Once the daily calorie goal is set, a user will bet a minimum of $100 and start a 30 day log. At the end of the 30 days, the user will win if they have completed at least 90% of their 30 day log entries and heve reached their daily goal of at least 90% during the 30 days. If the user wins, they get to keep the amount they bet. If the user loses, the calorie bookie keeps the money.

A user can log their daily calorie intake and bet on whether or not they reach their goal for 30 days.
Calorie Bookie is a React application with a Ruby on Rails Backend. React Hooks was used to manage state and PostgreSQL for the database. Nutritionix API was integrated to get get food data. A user can log their daily calorie intake and bet on whether or not they reach their goal for 30 days.

![Calorie Bookie](frontend/frontend/src/Calorie Bookie Logo transparent.png)
<!-- ![Calorie Bookie](https://github.com/DevDave0/obsido-frontend/blob/master/Screen%20Shot%202020-10-06%20at%2012.42.16%20PM.png) -->

## Project Details 

Obsido is a web application that allows a user to:
1. Log any amount of money a user spends in 6 different categories.
2. Have the amounts of money spent shown in a dynamic doughnut chart. 
3. Click on the categories within the doughnut chart and see more specific spending within the category. 
4. See a spending log of the current user of every amount inputed in each category. 
5. Delete a transaction from the spending log. 
6. See information about how the user spends money on cards that changes with spending.
7. See daily spending in a line graph. 

Libraries used: 

* React
* React-Router-Dom
* Redux and React-Redux
* Chart.js
* Semantic-UI
* Moment.js

Video demo link: https://youtu.be/SYQzvOHRVDw

Project backend: https://github.com/DevDave0/obsido-backend

## Installation Instructions

1. Fork the front and back end repositories and run `git clone <repository link here>`.
2. Run `bundle install` on the backend repository to install the required gems. 
3. Must have PostgreSQL installed. 
4. Run `rails db:create` then `rails db:migrate` to create database and migrate schema. 
5. Run `rails s` to start up the backend server. 
6. Run `npm install` on this repository to install all libraries and dependencies. 
7. Run `npm start` to run the server. 

## Contact

If you want to contact me, you can reach me at dbchung24@gmail.com

## License

This project uses the following license: MIT License