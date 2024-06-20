import { useState, useEffect } from "react";

import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import MovieListItem from "../MovieListItem";
import { PopularMovie } from "../../../../api/types";

interface MovieListProps {
  popularMovies: PopularMovie[]
  featuredMovieTitle: string
}

const MovieList = ({ popularMovies, featuredMovieTitle }: MovieListProps) => {
  const [dropdownOption, setDropdownOption] = useState('')
  const [cleanMovieList, setCleanMovieList] = useState<PopularMovie[]>()
  const maxAmountOfMovies = 4

  const handleChange = (event: SelectChangeEvent) => {
    setDropdownOption(String(event.target.value))
  }

  useEffect(() => {
    setCleanMovieList(popularMovies?.filter(movie => {
      return movie?.original_title !== featuredMovieTitle
    }))
  }, [popularMovies, setCleanMovieList])
  
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
      <Box sx={{display: 'flex', flexDirection: 'column', alignContent: 'flex-end', flexWrap: 'wrap', paddingRight: '114px'}}>
        {cleanMovieList?.slice(0, maxAmountOfMovies).map(movie => (
          <MovieListItem movie={movie} key={movie?.id} />
        ))}
      </Box>
    </>
  )
}

export default MovieList
