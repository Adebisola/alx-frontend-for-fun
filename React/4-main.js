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


 
 const sample = (<div id="id01">
  Hello World!
 ReactDOM.render(
    <h1>Hello React!</h1>,
    document.getElementById('id01'));
 </div>
 )

 function Welcome() {
  return <h1>Hello React!</h1>;
}
ReactDOM.render(<Welcome />, document.getElementById('root'));

function Welcome(props) {
  return <h1>Hello {props.name}!</h1>;
}
ReactDOM.render(<Welcome name="John Doe"/>, document.getElementById('root'));


class Welcome extends React.Component {
  render() { return(<h1>Hello {this.props.name}</h1>); }
}
ReactDOM.render(<Welcome name="John Doe"/>, document.getElementById('root'));




// rendering class components to the DOM
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
        <Fruits />
        <Vegetables />

        {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"));


// my first react component
// Change code below this line
class MyComponent_ extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h1> My First React Component!</h1>
      </div>
    )
  } 
}
ReactDOM.render(<MyComponent_ />, document.getElementById("challenge-node"));


//Pass Props to a Stateless Functional Component

<App>
  <Welcome user='Mark' />
</App>
const Welcome = (props) => <h1>Hello, {props.user}!</h1>
{/*It is standard to call this value props and when dealing with stateless functional components, you basically consider it as an argument to a function which returns JSX. You can access the value of the argument in the function body. */}

const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */ }
      
      <p>The current date is:{props.date} </p>
      < Date  />
      { /* Change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Change code below this line */ }
        <CurrentDate date= {Date()} />
        { /* Change code above this line */ }
      </div>
    );
  }
};


//Pass an Array as Props

<ParentComponent>
  <ChildComponent_ colors={["green", "blue", "red"]} />
</ParentComponent>

// accessing the property in the child component
const ChildComponent_ = (props) => <p>{props.colors.join(', ')}</p>

const List = (props) => {
  { /* Change code below this line */ }
  return <p>{props.tasks.join(" , ")}</p>
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }


        <List tasks={["Walk the dog", "feed the fish", "clean the room."]} />
        <h2>Tomorrow</h2>
        <List tasks={["see the client","cook the meat","Wash the kitchen."]} />
        { /* Change code above this line */ }
      </div>
    );
  }
};


//Use Default Props