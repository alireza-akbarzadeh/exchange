import Layout from "../Layout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps,
} from "react-router-dom";
import routes from "./Routes";
const Routing = () => {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            {routes.map((route: RouteProps, i) => (
              <Route key={i} {...route} />
            ))}
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default Routing;
