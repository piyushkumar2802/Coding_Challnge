# Welcome to Maitretech Solution Coding Challenge:

> Best of Luck for Coding Challenge!!!

## Overview

To complete this challenge, you will need to write a simple React based web app using create-react-app (CRA), and provide us buildable the source code files. The project should be installed and built without any errors. Please read the complete this README before proceeding.

The purpose of this challenge is to assess your **skills and approach to composing a simple react based web app** given a set of screens and an API feed. We will also review the **written JSX, CSS and JS** output.

This challenge is expected to be completed in 2-4 hours.

## The Challenge

It's pretty simple. Using the provided screens as a reference, you'll need to build a set of React components to render the app. You'll also need to fetch the data in JSON format and save the data by invoking the API.

Although this is a basic exercise, we'll be looking for **simple, well-designed, performant, and error free code** in the submission.

Please include a `README` with setup instructions, and any tests or other documentation you created as part of your solution.

Also, add the following info to your `README`:

- How did you decide on the technical and architectural choices used as part of your solution?
- Are there any improvements you could make to your submission?
- What would you do differently if you were allocated more time?

## Details

You will need to build the following 3 pages with React:

- A "Food App" page
- A "Food Items" page
- A "Thank You" page

The deployable solution should be built in a folder named **`dist`** with an entry point file of **`index.html`**.

Please create components for each part of the page (eg. header, content, footer, etc).
Assets are provided in the `assets` folder.

The pages should also be usable on mobile and tablet devices.

You can assume that you do not have to support legacy browsers without features such as `fetch` or `flexbox`.

### "Food App" Page

Refer to the [screens/Screen1.png](./screens/Screen1.png) screen.

This will be your `index.html` screen.

You will need to display welcome message with a button to go the next Page, which link to the "Food Items" page.

### "Food Items" page

Refer to the [screens/Screen2.png](./screens/Screen2.png) for Food Items Page.

For this page you will need to fetch data from the URL provided. THe data will be in JSON format containing name and the price of the food items. THen do the follwing:

- Display the name and the price of `entries` as shown in the [screens/Screen2.png](./screens/Screen2.png)
- Where the `+` of the entry is clicked, the Total and Cost should be updated as shown in [screens/Screen2.1.png](./screens/Screen2.1.png).
- When `Cart` icon is clicked, [screens/Screen2.2.png](./screens/Screen2.2.png) is shown, where order can be manupulated by clicking `+` and `-` buttons. IT should also reflect the current quantity. If the item is less than `1`, the item should be removed from the list.
- When the `SAVE AND CHECKOUT` is clicked, the user should be redirected to the the screen [screens/Screen3.png](./screens/Screen3.png)

You will also need to handle the loading and error states of fetching the JSON feed:

## FAQ

### What language, framework, build tool... should I use?

You may use whatever you like as long as the solution is built using [React](https://reactjs.org/).

We perfer you use Context API for State management. Apart from state management, you can either use redux, redux-toolkit or reoil. Please don't use any other state management library.

We prefer it if you did not use any third party CSS frameworks.

We also prefer the use of minimal dependencies.

## Other Notes

Please send through any other code or projects that you're proud of and would like to share with us.

Any feedback on the coding challenge once you're done is also appreciated!
