import logo from './logo.svg';
import './App.css';
import ContactForm from './containers/contact/all-contacts';
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
      <Switch>
      <Route exact path={`/`} component={ContactForm} />
      {/* <Route exact path={`/all-contacts`} component={AllContacts} /> */}
      {/* <Route path={`*`} component={<h1>Not Found</h1>} /> */}
    </Switch>
  </BrowserRouter>
  );
}

export default App;
