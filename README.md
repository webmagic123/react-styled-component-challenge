This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Part 1

```
// MobileNavigation needs one prop: theme determines color theme of the navigation (such as base color of the gradient background, hover color, etc)
<MobileNavigation theme>
  // MobileTopBar needs one prop: hasSearch determines whether showing search icon or not
  // Please consider that this component can have many more props such as userData, messageCount, notificationCount, etc,
  // but they don't make any changes regarding to the layout or style
  <MobileTopBar hasSearch />

  // MobileMenuBar needs three props:
  //    title determines the main text shown in the menu bar at normal state
  //    items determines the menu items shown in the dropdown
  //    whiteBg determines whether showing white background or not
  // If title or items are "empty", this component is supposed to be hidden
  <MobileMenuBar title items whiteBg />
</MobileNavigation>
```

## Part 2

`https://webmagic123.github.io/react-styled-component-challenge/`


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.