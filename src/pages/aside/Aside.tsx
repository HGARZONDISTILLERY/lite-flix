import { Box } from "@mui/material"
import MovieList from "./components/MovieList"

const Aside = () => {
  return(
    <Box sx={{marginRight: '104px', textAlign: 'right'}}>
      <MovieList />
    </Box>
  )
}

export default Aside
