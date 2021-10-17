import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";

const Pages = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Pages;
