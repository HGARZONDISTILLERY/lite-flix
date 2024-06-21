import './AddMovie.css'

import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { DropzoneArea } from "mui-file-dropzone"
import { TextField } from '@mui/material'
import Clip from '../../../../assets/icons/Clip'
import { styled } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'

// Styled component example
const CustomTextField = styled(TextField)({
  '& label': {
    color: '#fff',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    width: '100%',
  },
  '& label.Mui-focused': {
    color: '#fff',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    width: '100%',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: '#fff',
  },
  '& .MuiInput-underline:hover:before': {
    borderBottomColor: '#fff',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#fff',
  },
  '& .MuiInput-input': {
    color: '#fff',
    textAlign: 'center',
  }
})

const containerMovieModalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 730,
  bgcolor: '#242424',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
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
        <Box sx={containerMovieModalStyle}>
          <Box sx={{width: '100%', textAlign: 'right', color: '#fff'}}>
            <CloseIcon onClick={handleClose} sx={{cursor: 'pointer'}} />
          </Box>
          <Typography id="movie-modal-title" sx={{ color: '#64EEBC', fontSize: '20px', fontWeight: '700' }}>
            Agregar película
          </Typography>
          <Box>
            <DropzoneArea
              onChange={(event) => console.log(event)}
              dropzoneText='Agregá un archivo o arrastralo y soltalo aquí'
              dropzoneClass='dropzone'
              Icon={Clip} />
          </Box>
          <CustomTextField
            id="movie-title"
            label="Titulo"
            variant="standard"
            sx={{
              textAlign: 'center',
              width: '248px',
              marginTop: '48px',
            }}
          />
          <Box>
            <Button sx={{
              width: '248px',
              height: '56px',
              backgroundColor: '#fff',
              opacity: '0.3',
              borderRadius: '0',
              color: '#242424',
              marginTop: '48px',
              fontSize: '18px',
              '&:hover': {
                backgroundColor: '#fff',
                opacity: '0.6',
              }
              }}>
              Subir película
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default AddMovie
