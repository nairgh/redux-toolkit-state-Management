import { useDispatch, useSelector } from "react-redux";
import { createRandomMovie } from "../data";
import { Button } from "@mui/material";
import { addMovie, removeMovie } from "../store";

function MoviePlaylist() {
  const dispatch = useDispatch();

  const moviePlaylist = useSelector((state)=>{
    return state.movies;
  });

  const handleMovieAdd = (movie) => {
     dispatch(addMovie(movie));
  };
  const handleMovieRemove = (movie) => {
  dispatch(removeMovie(movie));
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <Button variant="contained" color="secondary" 
          onClick={() => handleMovieRemove(movie)}
          className="button is-danger"
        >
          X
        </Button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <Button variant="contained" size="medium"
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="button is-link"
          >
            + Add Movie to Playlist
          </Button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
