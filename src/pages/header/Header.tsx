import { Grid } from '@mui/material'
import './Header.css'
import Logo from './components/Logo/Logo'
import NavigationHeader from './components/BasicMenu/NavigationHeader'
import AddMovie from './components/AddMovie/AddMovie'

const Header = () => {
  return(
    <header>
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

    </header>
  )
}

export default Header
