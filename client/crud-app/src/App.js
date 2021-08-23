import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import UrlForm from "./components/UrlForm";
import UrlList from "./components/UrlList";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={UrlForm} />
          <Route path="/urlslist" component={UrlList} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
