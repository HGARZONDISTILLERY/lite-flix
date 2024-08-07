import { useState } from "react";

import { Box } from "@mui/material";
import PositionedMenu from "../PositionedMenu";
import PopularMovies from "../PopularMovies";
import MyMovies from "../MyMovies";
import { MovieListProps } from "../../../../../utils/types";

const MovieList = ({
  popularMovies,
  featuredMovieTitle,
  myMoviesList,
}: MovieListProps) => {
  const [movieListType, setMovieListType] = useState("popular");

  return (
    <>
      <Box
        sx={{
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "@media (max-width: 900px)": {
            justifyContent: "center",
            padding: "0",
          },
        }}
      >
        Ver:
        <PositionedMenu setMovieListType={setMovieListType} />
      </Box>
      {movieListType === "popular" ? (
        <PopularMovies
          popularMovies={popularMovies}
          featuredMovieTitle={featuredMovieTitle}
        />
      ) : (
        <MyMovies myMoviesList={myMoviesList} />
      )}
    </>
  );
};

export default MovieList;
