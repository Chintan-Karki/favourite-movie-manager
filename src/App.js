import { Route, Redirect, Switch } from "react-router-dom";
import MovieList from "./components/movies";
import MovieForm from "./components/movieForm";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "./styles.css";

export default function App() {
	return (
		<>
			<NavBar />
			<main className="container">
				<Switch>
					<Route path="/login" component={LoginForm}></Route>
					<Route path="/register" component={RegisterForm}></Route>
					<Route path="/movies/:id" component={MovieForm}></Route>
					<Route path="/movies" component={MovieList}></Route>
					<Route path="/not-found" component={NotFound}></Route>
					<Redirect from="/" to="/movies" exact />
					<Redirect to="/not-found" />
				</Switch>
			</main>
		</>
	);
}
