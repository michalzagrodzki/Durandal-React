define(['react', 'react-dom', 'jsx!components/ReactComponent'], 
  function (React, ReactDOM, reactComponent) 
  {
    return {
      attached: function () {
        ReactDOM.render(
          React.createElement(
            reactComponent,
            {text: "I am prop value from Durandal top component"},
            null
          ), 
          document.getElementById('reactContainer')
        );
      }
    };
  }
);