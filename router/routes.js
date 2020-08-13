import React from "react";
import {
  HashRouter,
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
// import Main from "@/layouts/main";
import Login from "pages/login";
import Home from "pages/home";

export default class RouteMap extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Login} />
                </div>
            </Router>
        )
    }
}


// export default {
//   render() {
//     return (
//       <HashRouter>
//         <App>
//           <Switch>
//             <Route path="/login" component={Login}></Route>
//             <Route
//               path="/"
//               render={() => (
//                 <Main>
//                   <Switch>
//                     <Route path="/home" component={Home}></Route>
//                   </Switch>
//                 </Main>

//                 // Main>
//                 //                   <Switch>

//                 //                     <Redirect to="/home" />
//                 //                     <Route component={() => {import("pages/404")}></Route>
//                 //                   </Switch>
//                 //                 </Main>
//               )}
//             />
//           </Switch>
//         </App>
//       </HashRouter>
//     );
//   },
// };
