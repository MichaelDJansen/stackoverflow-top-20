# Getting Started with StackOverflow Top 20 App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Estimates for categories
Review - 15m
Design - 20m
Implementation - 2h
Testing - 30m
Documentation - 15m

## Design Decisions
- To begin with I used CRA to bootstrap the app as it came with a few tools that I wanted to use out of the box such as React, Jest, TypeScript, React Test Library
- I used TypeScript as I feel type safety is very important for a more robust application and it provides a better developer experience as the application scales
- I structured my components into their own folders with their own .css and .test.tsx file in order to keep them modular
- I used React Testing Library as it provides great test helpers which mimics the user interface well

## What I would do I had more time
If I had more time to create the application, I would do the following: 
- Implement Redux Toolkit query for the API calls in order to cache the responses from the API
- Use CSS-in-JS for styling as to keep closer to the native requirement since CSS-in-JS is closer to the React Native and would be more easily transferable
- Look further into the StackExchange documentation to effectively implement paging