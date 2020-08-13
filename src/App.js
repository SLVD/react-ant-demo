// import React from "react";
// import { Button } from "antd";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
// import Router from "../router/routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello app</h1>
        {this.props.children}
      </div>
      // <Router />
    );
  }
}

export default App;
