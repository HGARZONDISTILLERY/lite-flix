import './AddMovie.css'

import { useEffect, useState, useRef } from 'react'
import {ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { storage, firestore } from '../../../../firebase'
import { addDoc, collection } from 'firebase/firestore'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { DropzoneArea } from "mui-file-dropzone"
import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'

import Clip from '../../../../assets/icons/Clip'
import { MyMovieElement } from '../../../../utils/types'

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

const imageListRef = ref(storage, "images/")
const firebaseDbRef = collection(firestore, "movies")

const AddMovie = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [movieFileData, setMovieFile] = useState<any>()
  const [imageList, setImageList] = useState<string[]>([])
  const [movieElement, setMovieElement] = useState<MyMovieElement>({})

  const titleRef = useRef<HTMLInputElement>(null)

  const handleSave = async (e: any) => {
    e.preventDefault();
  
    if (movieFileData === null || movieFileData.length === 0) return
  
    const file = movieFileData[0]
    const imageRef = ref(storage, `images/${file.name}`)
    
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then(url => {
        setImageList(prev => [...prev, url])
        if (titleRef.current !== null) {
          setMovieElement({title: String(titleRef.current.value), image: url})
        }
      })
    }).catch((error) => {
      console.error('Error uploading file:', error)
    })
  }

  useEffect(() => {
    listAll(imageListRef).then(response => {
      response.items.forEach(item => {
        getDownloadURL(item).then((url) => {
          setImageList(prev => [...prev, url])
        }).catch((error) => {
          console.error('Error getting download URL:', error)
        })
      })
    }).catch((error) => {
      console.error('Error listing images:', error)
    })
  }, [])

  useEffect(() => {
    if (titleRef.current !== null) {
      try {
        addDoc(firebaseDbRef, movieElement)
      } catch(e) {
        console.error(e)
      }
    }
  }, [titleRef, firebaseDbRef, movieElement])

  useEffect(() => {
    const curatedImageList = [...new Set(imageList)]
  }, [imageList])

  return (
    <div>
      <Button sx={{color: '#fff', fontSize: '18px'}} onClick={handleOpen}>+ <strong>Agregar película</strong></Button>
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
          <form onSubmit={handleSave}>
            <DropzoneArea
              onChange={(event) => setMovieFile(event)}
              dropzoneText='Agregá un archivo o arrastralo y soltalo aquí'
              dropzoneClass='dropzone'
              Icon={Clip}
              filesLimit={1}
              showAlerts={false}
              showFileNames
              />
            <CustomTextField
              id="movie-title"
              label="Titulo"
              variant="standard"
              sx={{
                textAlign: 'center',
                width: '248px',
                marginTop: '48px',
              }}
              inputRef={titleRef}
              type='text'
              required
            />
            <Box>
              <Button 
              type="submit" 
              sx={{
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
                }}
              >
                Subir película
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default AddMovie
