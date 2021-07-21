import React from "react";
import { getMovies } from "../services/fakeMovieService";

import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate.js";
import ListGroup from "../components/common/listGroup";
import MoviesTable from "./moviesTable";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";
import { Link } from "react-router-dom";

export default class MovieList extends React.Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
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

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleLike = (movie) => {
    let mutatedMovies = [...this.state.movies];
    const index = mutatedMovies.indexOf(movie);
    mutatedMovies[index] = { ...mutatedMovies[index] };
    mutatedMovies[index].liked = !mutatedMovies[index].liked;
    this.setState({ movies: mutatedMovies });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      movies: allMovies,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
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
    const { pageSize, currentPage, sortColumn } = this.state;
    const { totalCount, data: movies } = this.getPageData();

    return (
      <div className="row mt-4">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleOnGenreSelect}
          />
        </div>
        <div className="col">
          <Link className="btn btn-primary mb-3" to="/movies/new">
            Add new movie
          </Link>
          <p>Currently, there are {totalCount} movies in the list</p>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  };
}
