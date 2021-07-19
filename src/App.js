import { Route, Redirect, Switch } from "react-router";
import MovieList from "./components/movies";
import Rentals from "./components/rentals";
import MovieForm from "./components/movieForm";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import "./styles.css";

export default function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/movies" component={MovieList}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" to="/movies" exact />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </>
  );
}
