import { Box, Grid } from "@mui/material"
import Aside from "../aside/Aside"
import Title from "./components/Title/Title"
import Actions from "./components/Actions/Actions"

const Main = () => {
  return(
    <Box component="main" sx={{marginTop: '20%'}}>
      <Grid container>
        <Grid item xs={8}>
          <Title />
          <Actions />
        </Grid>
        <Grid item xs={4}>
          <Aside />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Main
