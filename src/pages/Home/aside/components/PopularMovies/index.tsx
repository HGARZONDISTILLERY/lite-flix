import { useState, useEffect } from "react";

import { Box } from "@mui/material";
import MovieListItem from "../MovieListItem";
import { MovieListProps, PopularMovie } from "../../../../../utils/types";

const PopularMovies = ({
  popularMovies,
  featuredMovieTitle,
}: MovieListProps) => {
  const [cleanMovieList, setCleanMovieList] = useState<PopularMovie[]>();
  const maxAmountOfMovies = 4;

  useEffect(() => {
    setCleanMovieList(
      popularMovies?.filter((movie) => {
        return movie?.original_title !== featuredMovieTitle;
      }),
    );
  }, [popularMovies, setCleanMovieList]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignContent: "flex-end",
        flexWrap: "wrap",
        paddingRight: "114px",
        "@media (max-width: 900px)": {
          padding: "0",
          alignContent: "center",
        },
      }}
    >
      {cleanMovieList
        ?.slice(0, maxAmountOfMovies)
        .map((movie) => <MovieListItem movie={movie} key={movie?.id} />)}
    </Box>
  );
};

export default PopularMovies;
