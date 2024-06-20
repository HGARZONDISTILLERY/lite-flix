import React from "react";

import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import MovieListItem from "../MovieListItem";
import { PopularMovie } from "../../../../api/types";

interface MovieListProps {
  popularMovies: PopularMovie[];
}

const MovieList = ({ popularMovies }: MovieListProps) => {
  const [dropdownOption, setDropdownOption] = React.useState('')
  const maxAmountOfMovies = 4

  const handleChange = (event: SelectChangeEvent) => {
    setDropdownOption(String(event.target.value))
  }
  
  return(
    <>
      <FormControl sx={{
        width: '200px',
        margin: '0 auto'
      }}>
        <Select
          labelId="movie-list-label"
          id="movie-list-select"
          value={dropdownOption}
          defaultValue="Populares"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{display: 'flex', flexDirection: 'column', alignContent: 'center', flexWrap: 'wrap'}}>
      {popularMovies?.slice(0, maxAmountOfMovies).map(movie => (
        <MovieListItem movie={movie} key={movie?.id} />
      ))}
      </Box>
    </>
  )
}

export default MovieList
