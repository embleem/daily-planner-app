# Third-Party APIs: Work Day Scheduler

## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Day.js](https://day.js.org/docs/en/display/format) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Day.js in the browser.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

The app should:

* Display the current day at the top of the calender when a user opens the planner.
 
* Present timeblocks for standard business hours when the user scrolls down.
 
* Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
* Allow a user to enter an event when they click a timeblock

* Save the event in local storage when the save button is clicked in that timeblock.

* Persist events between refreshes of a page

The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./images/05-third-party-apis-homework-demo.gif)


## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * Uses a date utility library to work with date and time

### Deployment: 32%

* Application deployed at live URL

* Application loads with no errors

* Application GitHub URL submitted

* GitHub repo contains application code

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate

* Application user interface style is clean and polished

* Application resembles the mock-up functionality provided in the homework instructions

### Repository Quality: 13%

* Repository has a unique name

* Repository follows best practices for file structure and naming conventions

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages

* Repository contains quality README file with description, screenshot, and link to deployed application

## Review

You are required to submit the following for review:

* The URL of the deployed application

* The URL of the GitHub repository, with a unique name and a README describing the project

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

## Libraries Used

1. Bootstrap Link:
https://getbootstrap.com/

2. JQuery Link:
https://jquery.com/

3. JavaScript Day.js:
https://day.js.org/docs/en/display/format

## References/Research

1. CSS grids:
https://www.w3schools.com/css/css_grid.asp

2. Scheduler Example with code:
https://codesandbox.io/p/sandbox/work-day-scheduler-zozvj?file=%2Fsrc%2Findex.js

3. Youtube Tutorial on similar scheduler project works:
https://www.youtube.com/watch?v=sm6py49QNto

4. Bootstrap Grids information:
https://getbootstrap.com/docs/5.3/layout/grid/

5. Bootstrap Scheduler Examples:
https://demos.devexpress.com/Bootstrap/Scheduler/ViewTypes.aspx

6. JavaScript Date() Constructor - 
https://www.w3schools.com/jsref/jsref_constructor_date.asp

7. JavaScript getDay() Method - 
https://www.w3schools.com/jsref/jsref_getday.asp

## Acknowledgements

1. Thank you to ThomasCalle (www.github/ThomasCalle) for sharing a youtube tutorial on how the scheuler works.

2. Thank you to Rockey Willemse for the support and help with code when I got stuck!