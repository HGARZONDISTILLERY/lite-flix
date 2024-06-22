import { Grid, useMediaQuery } from '@mui/material'
import './Header.css'
import Logo from './components/Logo/Logo'
import NavigationHeader from './components/NavigationHeader/NavigationHeader'
import AddMovie from './components/AddMovie/AddMovie'
import Hamburguer from '../../assets/icons/Menu'

const Header = () => {
  const isMobile = useMediaQuery('(max-width:900px)')

  return(
    <header>
      {
        isMobile ? 
        <Grid container>
          <Grid item xs={2} sx={{
            padding: '10px',
          }}>
            <Hamburguer />
          </Grid>
          <Grid item xs={8} sx={{textAlign: 'center'}}>
            <Logo />
          </Grid>
          <Grid item xs={2}>
            ...
          </Grid>
        </Grid> :
        <Grid container>
          <Grid item xs={2}>
            <Logo />
          </Grid>
          <Grid item xs={4}>
            <AddMovie />
          </Grid>
          <Grid item xs={6}>
            <NavigationHeader />
          </Grid>
        </Grid>
      }
    </header>
  )
}

export default Header
