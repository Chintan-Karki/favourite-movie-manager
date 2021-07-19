import "./styles.css";
import MovieList from "./components/movies";
import { Route, Redirect, Switch } from "react-router";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import NotFound from "./components/notFound";

export default function App() {
  return (
    <main className="container">
      <Switch>
        <Route path="/movies" component={MovieList}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect from="/" to="/movies" exact />
        <Redirect to="/not-found" />
      </Switch>
    </main>
  );
}
