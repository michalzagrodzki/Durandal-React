# Durandal-React

Use React .jsx components within Durandal SPA application.

Project is meant as an extension for existing Durandal applications.

## What is Durandal

Durandal is a cross-device, cross-platform client framework written in JavaScript and designed to make Single Page Applications (SPAs) easy to create and maintain. We've used it to build apps for PC, Mac, Linux, iOS and Android...and now it's your turn...

## What is React

React is a JavaScript library for building user interfaces.

## Installation

To start local server please follow these steps:

 * Clone repository
 * Type `yarn start` to start server
 * Open browser and navigate to following url: `http://10.0.0.6:8080/`

## Example

Simple example to get you started:

```jsx
function WelcomeComponent (React) {
  return function(props) {
    return (
      <h1>Hello { props.name }</h1>
    );
  }
}

ReactDOM.render(
  React.createElement(
    WelcomeComponent,
    {name: "World"},
    null
  ), 
  document.getElementById('reactContainer')
);
```

This example will render "Hello World" into a container with id `reactContainer` on the template view.

## Known limitations

* There is no support for npm or yarn packages, therefore all updates or extensions must be done manually.

* There is no support for ES6 so all modern features of Javascript are not available.

* Class components from React are not available.

## License

The MIT License
