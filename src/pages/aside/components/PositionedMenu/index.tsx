import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { theme } from '../../../../utils/constants';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Menu taken from https://mui.com/material-ui/react-menu/

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="positioned-button"
        aria-controls={open ? 'positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ color: '#fff', fontSize: '18px' }}
      >
        <strong>Populares <KeyboardArrowDownIcon /></strong>
      </Button>
      <Menu
        id="positioned-menu"
        aria-labelledby="positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          'sx': {
            'backgroundColor': '#242424',
            'width': '140px',
          }
        }}
        
      >
        <MenuItem onClick={handleClose} sx={{color: '#fff'}}>Populares</MenuItem>
        <MenuItem onClick={handleClose} sx={{color: '#fff'}}>Mis Películas</MenuItem>
      </Menu>
    </div>
  );
}