# Weightlifting-Tracker

Deployed app: https://weightlifting-tracker.herokuapp.com/

Current web applications for tracking strength progression (strengthlevel.com, symmetricstrength.com) do not account for the user's complete training history, but rather calculate a 1 rep max for a given lift using a single set.

This project will create a site that allows users to track their progress in weightlifting and powerlifting. The user can input information about each of their workouts (what exercises they did, sets, repetitions, RPE etc.). The site will track the users progress over time on their most important lifts (squat, deadlift, press, etc.), as well as their rate of progress (1st derivative with respect to time).

Rate of Perceived Exertion (RPE) has become a very popular tool in powerlifting programming as an alternative to percentage-based programming. Users can rate sets according to RPE, and this will be incorporated into determining the user's current 1RMs and rate of progress using charts to convert RPE to 1RM.

HIGH LEVEL OVERVIEW
The app starts at the login screen, where the user can enter their name and password or create an account if they don't already have one. They will then be redirected to the user hub (URL will end with "/users/id#", where they can view their history for each lift, add new information, remove information, or log out.

HOW TO INPUT INFORMATION
From the user hub, click "Enter New Lift Information".

You must enter the year, month, and day in the given boxes. Under "Select Lift:", click on the lift for which you would like to enter information. Enter the number of sets, the reps per set, and the weight at which the sets/reps were performed. In order for the information to be converted to a 1 rep max and included in the graph, THE NUMBER OF REPS MUST BE AN INTEGER BETWEEN 1 AND 10, as these are the only values for which we can accurately calculate a 1 rep max. The app will not break if you enter another number, and the information will still be included in your history, but the data point will not be included in the plot on the view screen.

You can also enter an RPE value for the sets. This value is OPTIONAL. In order for the program to calculate and graph 1RM data on the view screen, THE RPE VALUE MUST BE A NUMBER BETWEEN 6.5 AND 10 (going up in intervals of 0.5), as these are the only values for which we can accurately calculate a 1 rep max. The app will not break if you enter another number, and the information will still be included in your history, but the data point will not be included in the plot on the view screen.

Note that you can input as many data pieces as you want from this screen, and you can input multiple pieces of data for a single date.

HOW TO VIEW HISTORY FOR A LIFT
From the user hub, simply click a lift for which you would like to view your entire history. The following page will present your entire history, as well as a graph of your estimates 1 rep max over time (blue line), and the rate of change of your max (green line).

HOW TO REMOVE HISTORY FOR A LIFT
From the user hub, click "Remove a Session". Enter the date (year, month, and day) for the data you would like to remove, and choose the lift for which you would like to remove data. Click "submit" and that information will be removed from your history.
