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