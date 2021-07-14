import React from "react";
import { getMovies } from "../services/fakeMovieService";

import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate.js";
import ListGroup from "../components/common/listGroup";
import MoviesTable from "./moviesTable";
import { getGenres } from "../services/fakeGenreService";

export default class MovieList extends React.Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
  };

  componentDidMount() {
    const genres = [{_id:"", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({
      movies,
    });
  };

  handleOnGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (path) => {
    console.log(path)
  }

  handleLike = (movie) => {
    let mutatedMovies = [...this.state.movies];
    const index = mutatedMovies.indexOf(movie);
    mutatedMovies[index] = { ...mutatedMovies[index] };
    mutatedMovies[index].liked = !mutatedMovies[index].liked;
    this.setState({ movies: mutatedMovies });
  };

  render() {
    return (
      <div>
        <br />
        {this.state.movies.length === 0 ? (
          <h3>Oops, There are no movies in the list</h3>
        ) : (
          <>
            <h1>Your Favourite Movies</h1>
            {this.renderMovies()}
          </>
        )}
      </div>
    );
  }

  renderMovies = () => {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies: allMovies,
    } = this.state;
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;
    const movies = paginate(filtered, currentPage, pageSize);
    return (
      <div className="row ">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleOnGenreSelect}
          />
        </div>
        <div className="col">
          <p>Currently, there are {filtered.length} movies in the list</p>
          <MoviesTable 
            movies={movies} 
            onLike={this.handleLike} 
            onDelete={this.handleDelete} 
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  };
}
