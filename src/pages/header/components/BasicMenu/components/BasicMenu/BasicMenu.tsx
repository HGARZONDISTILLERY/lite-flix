import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const BasicMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Box><MenuIcon sx={{ cursor: 'pointer' }} /></Box>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          'sx': {
            'background': '#242424',
            'color': '#fff',
            'width': '400px!important'
          }
        }}
      >
        <MenuItem onClick={handleClose}>Inicio</MenuItem>
        <MenuItem onClick={handleClose}>Series</MenuItem>
        <MenuItem onClick={handleClose}>Peliculas</MenuItem>
        <MenuItem onClick={handleClose}>Agregadas recientemente</MenuItem>
        <MenuItem onClick={handleClose}>Populares</MenuItem>
        <MenuItem onClick={handleClose}>Mis películas</MenuItem>
        <MenuItem onClick={handleClose}>Mi lista</MenuItem>
      </Menu>
    </div>
  )
}

export default BasicMenu
