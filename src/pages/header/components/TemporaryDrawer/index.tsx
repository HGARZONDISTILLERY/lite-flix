import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

const TemporaryDrawer = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const drawerElements = ['Inicio', 'Series', 'Peliculas', 'Agregaras recientemente', 'Populares', 'Mis peliculas', 'Mi lista']

  const DrawerList = (
    <Box role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {drawerElements.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText disableTypography sx={{ fontFamily: 'Bebas Neue', opacity: 0.5 }} primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key='+ Agregar pelicula' disablePadding>
          <ListItemButton>
            <ListItemText disableTypography sx={{ fontFamily: 'Bebas Neue' }} primary='+ Agregar pelicula' />
          </ListItemButton>
        </ListItem>
        <ListItem key='Cerrar sesion' disablePadding>
          <ListItemButton>
            <ListItemText disableTypography sx={{ fontFamily: 'Bebas Neue' }} primary='Cerrar sesion' />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <MenuIcon onClick={toggleDrawer(true)} sx={{ cursor: 'pointer' }} />
      <Drawer anchor='right' open={open} onClose={toggleDrawer(false)} PaperProps={{
        sx: {
          background: '#242424',
          color: '#fff',
          width: '40%!important'
        }
      }}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default TemporaryDrawer