import { Box, Grid } from "@mui/material"
import Aside from "../aside/Aside"
import Title from "./components/Title/Title"
import Actions from "./components/Actions/Actions"
import { Movie } from "../../utils/types"

interface MainProps {
  featuredMovie: Movie | undefined
}

const Main = ({ featuredMovie }: MainProps) => {


  return(
    <Box component="main">
      <Grid container>
        <Grid
          item
          component={"section"}
          sx={{
            marginTop: '22%',
            '@media (max-width: 900px)': {
              paddingBottom: '40px'
            }
          }}
          xs={12} 
          md={8}>
          <Title featuredMovieTitle={String(featuredMovie?.original_title)} />
          <Actions />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          component={"aside"}
          sx={{
            paddingTop: '100px',
            '@media (max-width: 900px)': {
              backgroundColor: '#242424',
              paddingBottom: '50px'
            }
            }}>
          <Aside featuredMovieTitle={String(featuredMovie?.original_title)} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Main
