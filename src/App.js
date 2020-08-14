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
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
