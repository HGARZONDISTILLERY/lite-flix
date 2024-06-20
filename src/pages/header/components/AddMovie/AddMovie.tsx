import './AddMovie.css'

import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#242424',
  boxShadow: 24,
  p: 4,
  textAlign: 'center'
};

const AddMovie = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button sx={{color: '#fff'}} onClick={handleOpen}>+ Agregar película</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="movie-modal-title"
        aria-describedby="movie-modal-description"
        sx={{ 
          "& > .MuiBackdrop-root" : {
            backdropFilter: "blur(2px)"
          }
        }}
      >
        <Box sx={style}>
          <Typography id="movie-modal-title" variant="h6" component="h2">
            Agregar película
          </Typography>
          <Typography id="movie-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default AddMovie
