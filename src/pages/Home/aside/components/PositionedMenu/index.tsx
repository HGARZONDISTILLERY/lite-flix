import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckIcon from "@mui/icons-material/Check";

// Menu taken from https://mui.com/material-ui/react-menu/

interface PositionedMenuTypes {
  setMovieListType: (movieType: string) => void;
}

const PositionedMenu = ({ setMovieListType }: PositionedMenuTypes) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePopularMovies = () => {
    setMovieListType("popular");
  };

  const handleMyMovies = () => {
    // setMovieListType('my-movies')
    console.log("Show My Movies");
  };

  return (
    <div>
      <Button
        id="positioned-button"
        aria-controls={open ? "positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "#fff", fontSize: "18px" }}
      >
        <strong>
          Populares <KeyboardArrowDownIcon />
        </strong>
      </Button>
      <Menu
        id="positioned-menu"
        aria-labelledby="positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          sx: {
            backgroundColor: "#242424",
            width: "140px",
          },
        }}
      >
        <MenuItem onClick={handlePopularMovies} sx={{ color: "#fff" }}>
          <span>Populares</span>
          <CheckIcon sx={{ marginLeft: "20px" }} />
        </MenuItem>
        <MenuItem
          onClick={handleMyMovies}
          sx={{ color: "#fff", cursor: "default" }}
        >
          Mis Películas
        </MenuItem>
      </Menu>
    </div>
  );
};

export default PositionedMenu;
