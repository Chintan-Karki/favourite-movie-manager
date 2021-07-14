import React from 'react'
import Like from "./common/like";

const MoviesTable = (props) => {
    const {movies, onLike, onDelete, onSort } = props;
    return ( 
        <table className="table">
            <thead>
              <tr>
                <th style={{cursor: 'pointer'}} onClick={() => onSort('title')}>Title</th>
                <th style={{cursor: 'pointer'}} onClick={() => onSort('genre.name')}>Genre</th>
                <th style={{cursor: 'pointer'}} onClick={() => onSort('numberInStock')}>Stock</th>
                <th style={{cursor: 'pointer'}} onClick={() => onSort('dailyRentalRate')}>Rate</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie._id}>
                  <th>{movie.title}</th>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => onLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => onDelete(movie)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
     );
}
 
export default MoviesTable;