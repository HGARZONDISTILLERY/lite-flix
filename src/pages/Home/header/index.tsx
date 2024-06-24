import { Grid, useMediaQuery } from "@mui/material";
import "./styles.css";
import Logo from "./components/Logo";
import NavigationHeader from "./components/NavigationHeader";
import AddMovieModal from "./components/AddMovieModal";
import AddMovieButton from "./components/AddMovieButton";
import profile from "../../../assets/profile.png";
import TemporaryDrawer from "./components/TemporaryDrawer";

const Header = () => {
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <header>
      {isMobile ? (
        <Grid container>
          <Grid item xs={2} sx={{ padding: "10px" }}>
            <TemporaryDrawer />
          </Grid>
          <Grid item xs={8} sx={{ textAlign: "center" }}>
            <Logo />
          </Grid>
          <Grid item xs={2}>
            <img src={profile} alt="Profile" />
          </Grid>
        </Grid>
      ) : (
        <Grid container>
          <Grid item xs={2}>
            <Logo />
          </Grid>
          <Grid item xs={4}>
            <AddMovieModal AddMovieButton={AddMovieButton} />
          </Grid>
          <Grid item xs={6}>
            <NavigationHeader />
          </Grid>
        </Grid>
      )}
    </header>
  );
};

export default Header;
