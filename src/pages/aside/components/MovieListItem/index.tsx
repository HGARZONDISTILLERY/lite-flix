import './styles.css'

import { Box } from "@mui/material"
import PlayCircleFilledWhiteTwoToneIcon from '@mui/icons-material/PlayCircleFilledWhiteTwoTone';

const MovieListItem = () => {
  return(
    <Box className="movieListItem">
      <Box className="movieListItemDetails">
        <PlayCircleFilledWhiteTwoToneIcon />
        <p>House of Cards</p>
      </Box>
    </Box>
  )
}

export default MovieListItem
