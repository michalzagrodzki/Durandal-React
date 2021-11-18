define(['react'], 
function (React) {
  var useState = React.useState;
  return function(props) {
    var [local, setLocal] = useState("I am react component");
    return (
      <div>
        <h1>Hello, {local}</h1>
        <p>Some value from props: {props.text}</p>
      </div>
    );
  }
})