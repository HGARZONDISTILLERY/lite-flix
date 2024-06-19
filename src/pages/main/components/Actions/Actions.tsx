import './Actions.css'

import { Grid } from "@mui/material"
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';

const Actions = () => {
  return(
    <Grid container spacing={1} sx={{paddingLeft: '104px', textAlign: 'left'}}>
        <Grid item xs={4}>
          <button className='primaryAction'><PlayArrowOutlinedIcon />Reproducir</button>
        </Grid>
        <Grid item xs={8}>
          <button className='secondaryAction'>+ Mi Lista</button>
        </Grid>
    </Grid>

  )
}

export default Actions
