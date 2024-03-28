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
MyComponent.defaultProps = { location: 'San Francisco' }


const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// Change code below this line
ShoppingCart.defaultProps = {items: 0}


//Override Default Props

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart_ extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Change code below this line */ }
    return <Items quantity = {10}   />
    { /* Change code above this line */ }
  }
};



//Use PropTypes to Define the Props You Expect

MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
// Here's an example to require the type function for a prop called handleClick:
{/**As of React v15.5.0, PropTypes is imported independently from React, like this: import PropTypes from 'prop-types'; */}

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line
Items.propTypes = { quantity: PropTypes.number.isRequired }
// Change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart_ extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};


// Access Props Using this.props(ES6 class components)

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome name="Tolu" />
            { /* Change code above this line */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
         <p>Hello, <strong>{this.props.name}</strong>!</p>
          
          { /* Change code above this line */ }
        </div>
    );
  }
};


//Review Using Props with Stateless Functional Components
{/* A stateless functional component is any function you write which accepts props and returns JSX.*/}
{/**A stateless component, on the other hand, is a class that extends React.Component but does not use internal state */}
{/**a stateful component is a class component that does maintain its own internal state. */}


class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};

// Change code below this line
const Camper = (props) => {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  )

  }


Camper.defaultProps = {name: "CamperBot"}
Camper.propTypes = { name: PropTypes.string.isRequired }


//Create a Stateful Component
{/**State consists of any data your application needs to know about, that can change over time. You want your apps to respond to state changes and present an updated UI when necessary. React offers a nice solution for the state management of modern web applications.
Note that you must create a class component by extending React.Component in order to create state like this.
state is one of the most powerful features of components in React. State allows you to track important data in your app and render a UI in response to changes in this data. If your data changes, your UI will change.
*/
//The state property must be set to a JavaScript object
}
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
        this.state = {
          firstName:"Moses"
        }
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};


//Render State in the User Interface
class MyComponent__ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp',
      description: "I love freeCodeCamp"
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{this.state.name}</h1>

        { /* Change code above this line */ }
      </div>
    );
  }
};


//Render State in the User Interface Another Way
{/**In the render() method, before the return statement, you can write JavaScript directly. For example, you could declare functions, access data from state or props, perform computations on this data, and so on. Then, you can assign any data to variables, which you have access to in the return statement. */}

class MyComponent___ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line
const name = this.state.name;
    // Change code above this line
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};


//Set State with this.setState

class MyFirstComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line
          this.setState({
            name: "React Rocks!"
          });
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};


//Bind 'this' to a Class Method

class MyComponentThis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // Change code below this line
this.handleClick = this.handleClick.bind(this)
    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <button onClick={this.handleClick}>Click Me</button>
        { /* Change code above this line */ }
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};

//Use State to Toggle an Element

class MyComponent___ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Change code below this line
       this.setState(state => ({
      counter : state.counter + props.increment   
       }))
     
    // Change code above this line
    this.toggleVisibility = this.toggleVisibility.bind(this)
  
    // Change code above this line
  }
  // Change code below this line
toggleVisibility() {
    this.setState(state => {
      if (state.visibility === true) {
        return { visibility: false };
      } else { 
        return { visibility: true};
      }
      
    });
  }
  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}


//Write a Simple Counter

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
  
    // Change code above this line
  }
  increment() {
        this.setState(state => ({
      count : state.count + 1  
       }));
    }
    decrement() {
        this.setState(state => ({
      count : state.count - 1  
       }));
    }
    reset() {
        this.setState({
          count: 0
        });
    }
  // Change code below this line

  // Change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};


//Create a Controlled Input

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Change code below this line
this.handleChange = this.handleChange.bind(this)
    // Change code above this line
  }
  // Change code below this line
handleChange(event) {
    this.setState ({
      input: event.target.value  
    });
}
  // Change code above this line
  render() {
    return (
      <div>
        { /* Change code below this line */}
        <input value={this.state.input} onChange={this.handleChange} /> 

        { /* Change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};


//Create a Controlled Form
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // Change code below this line
    event.preventDefault()
    this.setState( {
      submit: this.state.input
    }
    )
    
    // Change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line */}
            <input value={this.state.input} onChange={this.handleChange} />

          {/* Change code above this line */}
          <button type='submit'>Submit!</button>
        </form>
        {/* Change code below this line */}
        <h1>{this.state.submit}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}


//Pass State as Props to Child Components
{/**The MyApp component is stateful and renders a Navbar component as a child. Pass the name property in its state down to the child component, then show the name in the h1 tag that's part of the Navbar render method. name should appear after the text Hello, my name is:. */}
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* Change code below this line */}  
       

      <Navbar name={this.state.name} />
         {/* Change code above this line */}
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* Change code below this line */}
      <h1>Hello, my name is:{this.props.name} </h1>
      {/* Change code above this line */}
    </div>
    );
  }
};

//Pass a Callback as Props

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* Change code below this line */ }
            < GetInput input = {this.state.inputValue} handleChange = {this.handleChange} />
            < RenderInput input= {this.state.inputValue} />
        { /* Change code above this line */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};



//Use the Lifecycle Method componentWillMount
{/**The componentWillMount() method is called before the render() method when a component is being mounted to the DOM. */}
// console.log something to the console and see what happens
class MyComponent1 extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Change code below this line
    var a = 5;
console.log(a);
console.log("A component is being mounted")
    // Change code above this line
  }
  render() {
    return <div />
  }
};


//Use the Lifecycle Method componentDidMount
{/**There is a mock API call in componentDidMount(). It sets state after 2.5 seconds to simulate calling a server to retrieve data. This example requests the current total active users for a site. In the render method, render the value of activeUsers in the h1 after the text Active Users:. Watch what happens in the preview, and feel free to change the timeout to see the different effects. */}
class MyComponent2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>Active Users: {this.state.activeUsers}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}