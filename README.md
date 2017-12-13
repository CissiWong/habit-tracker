# Company Project: Habit Tracker

So far, in the companies, we've built a business site, an advent calendar, and an online store. We've yet to really flex our React muscles and build an app!

Your task this sprint is to build a "Habit tracker" - an app which users can store their goals in, and then keep track of whether they achieved the goal on a given day. A rough sketch of how the main screen could potentially look is something like this:

![Rough Sketch](https://i.imgur.com/VMMZzDl.png)

Unlike the previous tasks, the scope, app design, and general functionality of this app is very undefined, and down to your team to figure out! You definitely will need a planning session for this one.

## Design

The app will need a few "screens" at the least; a form to enter goals, some sort of calendar view to mark a day as either completed or not completed, and some sort of way of navigating through time in the calendar so the user can look at their history.

To be useful, it would be really good for the app to have some form of gamification—something to make the user feel good for completing a goal, and something to make them keep coming back and using the app.

You'll need to decide how you want the calendar view to be designed; should it show a week? A month? A year? How should the user complete a day?

This kind of habit tracker is fairly commonly seen in notebooks in a month-based format - [examples](https://www.pinterest.se/mikayladiane/bujo-habit-tracker/). Whereas mobile apps tend to take a more [week-based approach](https://www.buzzfeed.com/nicolenguyen/habit-tracking-apps?utm_term=.xvyrga39nv#.ie7OaLmKAz), perhaps because of the constraints of the screen.

## How to complete this project

### Tech Specifications

The project should be built in React. It should also be responsive and work well on mobile, tablet and desktop. Your code should conform to the Technigo eslint rules, too.

The code folder in this repository contains a copy of the Technigo React Starter project. You should use this as a base for your project.

## How to approach this as a team

The first step, as always, should be to sketch out your application and decide how things should look, but also what kind of components you'd like. *Give thought - as a team - as to what components you might need, and what naming you should use.*

Once you have an idea of the design of the app, and what kind of components you'll need, you should consider how the data should be stored. One idea to get you started (but is not necessarily the _correct_ way) is to have an object with the goal names as keys, and an array of completed dates as values. When the user completes a day, add it to the array. Then when building the calendar, you just need to check if that date is in the array or not to determine if the day is "complete" or not..

There will be no APIs for this project, instead you will store data locally in the browser, so that when the user comes back to the page, their data will still be there.

# :boom: Success!

At the end of this sprint, you and your team should be beginning to feel more comfortable with React, and feel more confident with coming up with app structure and components, from a blank slate.

You should also be really getting the hang of working in small teams on complex projects; from planning, to implementation and tracking down bugs.

Finally, on a more technical level, you should get a chance to work with some external libraries, persisting data locally with LocalStorage, and working with data in the context of calendars. Perhaps even a little data visualization, too!

# :runner: Stretch Goals

Done with the main task? Try to come up with some fun stretch goals within your company. Here's some ideas:

1. Build some sort of statistics page which shows how many tasks have been completed per week, or renders some charts
1. Package the app as a Chrome extension, or make it run as an electron app (Damien can help you with this!)
