const JSX = (
    <div>
      {/* This is a sample comment*/}
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
    </div>
  );


  {/* renderinf JSX components to the HTML DOM */}
  const JSX1 = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // Add your code below this line
  ReactDOM.render(JSX, document.getElementById("challenge-node"));



  // difference between JSX and HTML camelCase use of closing tags


  const DemoComponent = function() {
    return (
      <div className='customClass' />
    );
  };

  // stateless components only renders and does not manage nor track changes to the data.

  const MyComponent = function() {
    return (
      <div className = "myClass">
        <p> THis is an example of a stateless component</p>
      </div>
    )
  }

  // ES6 class component
  class Kitten extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <h1>Hi</h1>
      );
    }
  }

  class MyComponent1 extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      // Change code below this line
      return(
        <div>
          <h1>Hello React!</h1>
         </div>
      );
  
  
      // Change code above this line
    }
  };

  //Create a Component with Composition:mutltiple react components.