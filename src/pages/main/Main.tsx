import { Box, Grid } from "@mui/material"
import Aside from "../aside/Aside"
import Title from "./components/Title/Title"
import Actions from "./components/Actions/Actions"
import { Movie } from "../../api/types"

interface MainProps {
  featuredMovie: Movie | undefined
}

const Main = ({ featuredMovie }: MainProps) => {


  return(
    <Box component="main">
      <Grid container>
        <Grid item xs={8} component={"section"} sx={{marginTop: '22%'}}>
          <Title featuredMovieTitle={String(featuredMovie?.original_title)} />
          <Actions />
        </Grid>
        <Grid item xs={4} component={"aside"} sx={{marginTop: '100px'}}>
          <Aside featuredMovieTitle={String(featuredMovie?.original_title)} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Main
