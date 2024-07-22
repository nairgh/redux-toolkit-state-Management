import "./styles.css";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import { Button, Container, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { reset } from './store';

export default function App() {
  const dispatch = useDispatch();
  const handleResetClick = () => {
    dispatch(reset());
  };

  return (
    <Container>
      <Typography variant="h4">React Redux-toolkit</Typography>
      <br></br>
      <Button variant="contained" color="secondary" onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </Button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
        </Container>
  );
}
