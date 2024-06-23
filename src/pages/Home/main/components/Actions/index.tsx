import './styles.css'

import { Grid } from "@mui/material"
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import { theme } from '../../../../../utils/constants';


const Actions = () => {
  return(
    <Grid
      container
      spacing={theme.breakpoints.down('md') ? 3 : 1}
      sx={{
        paddingLeft: '104px',
        textAlign: 'left',
        '@media (max-width: 900px)': {
          padding: '0',
          textAlign: 'center',
        }
        }}>
        <Grid item md={4} xs={12}>
          <button className='primaryAction'><PlayArrowOutlinedIcon />Reproducir</button>
        </Grid>
        <Grid item md={8} xs={12}>
          <button className='secondaryAction'>+ Mi Lista</button>
        </Grid>
    </Grid>

  )
}

export default Actions
