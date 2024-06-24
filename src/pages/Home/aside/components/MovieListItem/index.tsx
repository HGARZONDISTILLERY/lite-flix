import { useState } from "react";
import "./styles.css";

import { Box, Grid, Typography } from "@mui/material";
import PlayCircleFilledWhiteTwoToneIcon from "@mui/icons-material/PlayCircleFilledWhiteTwoTone";
import { IMAGES_BASE_URL } from "../../../../../utils/constants";
import { PopularMovie } from "../../../../../utils/types";
import PlayHover from "../../../../../assets/icons/PlayHover";
import StarIcon from "@mui/icons-material/Star";

interface MovieListProps {
  movie: PopularMovie;
}

const MovieListItem = ({ movie }: MovieListProps) => {
  const [hovered, setHovered] = useState(false);

  const movieBackgroundImage = {
    backgroundImage: `url(${IMAGES_BASE_URL}w500${movie?.backdrop_path})`,
  };

  const movieYear = movie?.release_date.split("-")[0];

  return (
    <Box
      className="movieListItem"
      style={movieBackgroundImage}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box
        className="movieListItemDetails"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        {!hovered ? (
          <>
            <div>
              <PlayCircleFilledWhiteTwoToneIcon />
            </div>
            <Typography align="center" alignItems="center">
              <span>{movie?.original_title}</span>
            </Typography>
          </>
        ) : (
          <>
            <div>
              <PlayHover />
            </div>
            <Typography display="flex" alignItems="center">
              {movie?.original_title}
            </Typography>
          </>
        )}
        {hovered && (
          <Grid container>
            <Grid item xs={6}>
              <Typography
                display="flex"
                alignItems="center"
                justifyContent="left"
              >
                <StarIcon className="star-icon" />
                <strong>{Math.round(movie?.vote_average)}</strong>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                display="flex"
                alignItems="center"
                justifyContent="right"
                sx={{ paddingRight: "10px" }}
              >
                <strong>{movieYear}</strong>
              </Typography>
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default MovieListItem;
