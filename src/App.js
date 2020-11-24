import React from "react";
import Navbar from "./components/Navbar.js";
import "bulma/css/bulma.css";
import Signup from "./components/Signup.js"
import Message from "./components/Message.js" 

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Signup />
      <Container />
      <Message isInfo title='Hello World'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
</Message>

    </div>
  );
};

export default App;
