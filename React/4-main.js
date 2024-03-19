const JSX = (
    <div>
      {/* This is a sample JSX*/}
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
    </div>
  );


  {/* rendering JSX components to the HTML DOM */}
  const JSX1 = (
    <div id="challenge-node">
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // Add your code below this line
  ReactDOM.render(JSX1, document.getElementById("challenge-node"));



  // difference between JSX and HTML camelCase use of closing tags


  const DemoComponent = function() {
    return (
      <div className='customClass' />
    );
  };

  // stateless components only renders and does not manage nor track changes to the data. made with javascript

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
  return (
    <App>
     <Navbar />
     <Dashboard />
     <Footer />
    </App>
   )

   const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          { /* Change code below this line */ }
        <ChildComponent />
          { /* Change code above this line */ }
        </div>
      );
    }
  };



 // Use React to Render Nested Components
 const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Change code below this line */ }
      <TypesOfFruit />

      { /* Change code above this line */ }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
          <Fruits />
        { /* Change code above this line */ }
      </div>
    );
  }
};

class Fruits_ extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
      </div>
    );
  }
};


// compose react components
class Fruits_ extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */ }
        <NonCitrus />
        <Citrus />
        { /* Change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
        <Fruits_ />

        { /* Change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};