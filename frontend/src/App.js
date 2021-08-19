import Home from "./pages/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./task/store/store";
import update from "./components/update";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path={"/"} component={Home} />

          <Route exact path={"/update/:id/:name"} component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
