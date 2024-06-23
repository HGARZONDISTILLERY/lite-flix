import { ListItemButton, ListItemText } from '@mui/material';

interface AddMovieButtonDrawerProps {
  onClick: () => void;
}

const AddMovieButtonDrawer = ({ onClick }: AddMovieButtonDrawerProps) => {
  return (
    <ListItemButton>
      <ListItemText
        disableTypography 
        sx={{ fontFamily: 'Bebas Neue', margin: '30px 0' }} 
        primary='+ Agregar pelicula'
        onClick={onClick} />
    </ListItemButton>
  )
}

export default AddMovieButtonDrawer