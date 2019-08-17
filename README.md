# Weightlifting-Tracker
MVP: {
This project will create a site that allows users to track their progress in weightlifting and powerlifting. The site will track daily, weekly, and monthly progress on basic lifts, and recommend a program based on the user's stated goal (strength maintenance, general strength, powerlifting, Olympic lifting) and current rate of progress.
    What I know how to do:
        1. Create a database in SQL or Mongo for each user, update each database, add to each database
        2. Create a database of programs that are associated with different user goals and rates of progress
    What I need to know how to do:
        1. Use data to calculate rate of progress and store this as an dynamic object that updates automatically when the user adds to their progress database
        2. Get functions that calculate 1 rep max for any given number of reps, add that number to the database as a 1RM snapshot value

The site will display graphs of the user's progress over time, and their current "level" (novice, intermediate, advanced, or elite) based on charts from exrx.net, strengthlevel.com, and/or symmetricstrength.com.
    What I know how to do:
        1. Get user's current best performance on each lift, set to a variable
        2. Associate that variable with a given level, display user's level and where they stand on the charts
    What I need to know how to do:
        1. Display the user's progress over time on a graph (look into chart.js)
}

Because users are unlikely to enter their information after every workout, the site will interpolate data to figure out how fast they are progressing.

Each recommended program can be rated by users, and the generated listed of recommended programs can be listed in descending order of rating. That way, the user can get an idea of which programs other lifters are having success with, and which programs are less successful.

The site will also provide information on the user's relative strengths and weaknesses, and recommend accessory lifts to bring up his or her weaknesses.

The user's progress can be extrapolated to predict future progress.

The user can have a history of programs attempted and information on their progress (or lack thereof) on each program.

Folder structure and workflow:
-config folder with config.js file that contains: module.exports{"development{}", "test{}", "production{}"
-models folder that holds backend database
    -schema.sql, seeds.sql
-Public folder for front-end logic (including JQuery and AJAX calls) and assets (e.g. CSS, icons)
-Routes folder for handling API and HTML routing and back-end logic
-Views folder to hold HTML content