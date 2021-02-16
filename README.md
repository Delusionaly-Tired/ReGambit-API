# ReGambi-API

The API for the ReGambit database! This API has models for `Users`, `Openings`, `Posts`, and `Comments` and connects the relationship between `Users` and `Openings`.

### Relevant links

- [Deployed Client](https://delusionaly-tired.github.io/ReGambit-client/)
- [Deployed API](https://aqueous-shelf-72255.herokuapp.com/)
- [Client Repository](https://github.com/Delusionaly-Tired/ReGambit-client)

### List of Technologies Used
- HTML/CSS
- Bootstrap
- Javascript
- React
- React Router

### User Stories

- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change my password.
- As a signed in user, I would like to sign out.
- As an unregistered user, I would like to see all user’s blog posts of openings and possible moves.
- As an unregistered user, I would like to see comments on those blog posts.
- As a signed in user, I would like to be able to create blog posts.
- As a signed in user, I would like to comment on other users' blog posts.
- As a signed in user, I would like to update my blog posts and comments.
- As a signed in user, I would like to delete my blog posts and comments.


### ERD

![ReGambit API ERD](https://imgur.com/h8pqd7k)

### Planning

1/26

Today was spent planning for the project. Initially as a team we had a stand-up in order review the project template, goals, wireframing, user stories and the ERD. This allowed use to create a culture of code, create a team relationship/responsibilities, and reviewed SCRUM/Agile framework.  Once a plan was established two teams of two, Henry/James(Team Alpha) & Julius/Conner(Team Charlie), who were assigned to begin creating the front-end and back-end. Team Alpha was able to create the front-end foundation that established a stable point for User creation. They also completed the initial styling that will give our application a unique and professional design and layout while maintaining functionality. Team Charlie focused on creating the database that the user would be calling on. This included creation of curl-scripts, authenticated/unauthenticated routes and creating the different models and schemas. To conclude the day, as a group we reviewed the final products of coding and merged them to the Master branch, first deployment completed.

1/27
The majority of the day was spent continuing on the previous days work. We began the morning with a morning scrum to discuss our goals/objectives for the day.
We split into our teams and throughout the day we completed the authentication process for the user and front-end styling. Hurdles of the day were power/technical issues that were overcome with communication between the team.


1/28
Today we began the day with our morning meetings and decided to focus our efforts on the openings portion of our back and front ends. Today our group was able to stay on task and complete our goals while also managing a medical hurdle.
With our proper planning before each day of work, we have been able to handle this unexpected issues seamlessly.

1/29
Today was spent finalizing the portions we wanted to complete for our V1 and presentation on Monday. We managed to complete everything and it was all working correctly locally. However, we ran into in issue with our deployment that is preventing our application from working.

2/1-2/5
Debugged error preventing application from working/connecting with API. Style updates and blog post CRUD and functionality added!

2/7-2/15
Creating and debugging our Post curl-scripts/CRUD functionality for our application. Our group as a whole struggled with this. With the help of GA teachers and our cohort we were able to get it working. We are proud of what we
were able to accomplish here, but we all have our goals set on improving our skill set and continuing to improve the application for real world use.

### Unfinished
- Interactive gameboard and pieces for user play.
- Update/Delete functionality for our Posts. 
