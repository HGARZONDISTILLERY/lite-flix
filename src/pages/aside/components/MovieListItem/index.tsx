import './styles.css'

import { Box } from "@mui/material"
import PlayCircleFilledWhiteTwoToneIcon from '@mui/icons-material/PlayCircleFilledWhiteTwoTone';
import { IMAGES_BASE_URL, PopularMovie } from '../../../../api/types';

interface MovieListProps {
  movie: PopularMovie;
}

const MovieListItem = ({ movie }: MovieListProps) => {
  const movieBackgroundImage = {
    backgroundImage: `url(${IMAGES_BASE_URL}w500${movie?.backdrop_path})`,
  };

  return(
    <Box className="movieListItem" style={movieBackgroundImage}>
      <Box className="movieListItemDetails">
        <PlayCircleFilledWhiteTwoToneIcon />
        <p>{movie?.original_title}</p>
      </Box>
    </Box>
  )
}

export default MovieListItem
