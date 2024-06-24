import "./styles.css";

import { useEffect, useState, useRef, FC } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

import { DropzoneArea } from "mui-file-dropzone";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

import { storage, firestore } from "../../../../../firebase";
import { MyMovieElement } from "../../../../../utils/types";
import Clip from "../../../../../assets/icons/Clip";
import Logo from "../Logo";
import { BarLoader } from "react-spinners";

// Styled components
const CustomTextField = styled(TextField)({
  "& label": {
    color: "#fff",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    width: "100%",
  },
  "& label.Mui-focused": {
    color: "#fff",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    width: "100%",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#fff",
  },
  "& .MuiInput-underline:hover:before": {
    borderBottomColor: "#fff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#fff",
  },
  "& .MuiInput-input": {
    color: "#fff",
    textAlign: "center",
  },
});

const MovieModalButton = styled(Button)({
  width: "248px",
  height: "56px",
  backgroundColor: "#fff",
  opacity: "0.3",
  borderRadius: "0",
  color: "#242424",
  marginTop: "48px",
  fontSize: "18px",
  "&:hover": {
    backgroundColor: "#fff",
    opacity: "0.6",
  },
});

const containerMovieModalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 730,
  bgcolor: "#242424",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const containerMovieModalMobileStyle = {
  position: 'absolute',
  top: '50%', 
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height: '90vh',
  bgcolor: '#333333',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto',
};

const StyledModal = styled(Modal)`
  & > .MuiBackdrop-root {
    backdrop-filter: blur(2px);
  }
`;

const firebaseDbRef = collection(firestore, "movies");

interface AddMovieProps {
  AddMovieButton: FC<{ onClick: () => void }>;
}

const AddMovieModal = ({ AddMovieButton }: AddMovieProps) => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setMovieElementIsLoading(false);
    setMovieElementUploaded(false);
  };
  const [movieFileData, setMovieFile] = useState<any>();
  const [movieElement, setMovieElement] = useState<MyMovieElement>({});
  const [movieElementIsLoading, setMovieElementIsLoading] = useState(false);
  const [movieElementUploaded, setMovieElementUploaded] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const titleRef = useRef<HTMLInputElement>(null);

  const handleSave = async (e: any) => {
    e.preventDefault();
    let movieTitle = "";
    if (titleRef?.current) {
      movieTitle = String(titleRef?.current.value);
    }
    setMovieElementIsLoading(true);

    if (movieFileData === null || movieFileData.length === 0) return;

    const file = movieFileData[0];
    const imageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(imageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);

        switch (snapshot.state) {
          case "paused":
            console.log("Carga pausada");
            break;
          case "running":
            console.log("Carga en progreso");
            setMovieElementIsLoading(true);
            setMovieElementUploaded(false);
            break;
        }
      },
      (error) => {
        console.error("Error uploading file:", error);
        setMovieElementIsLoading(false);
      },
      () => {
        console.log("Carga completada con éxito");
        setMovieElementIsLoading(false);
        setMovieElementUploaded(true);
        getDownloadURL(uploadTask.snapshot.ref)
          .then((url) => {
            setMovieElement({ title: movieTitle, image: url });
          })
          .catch((error) => {
            console.error("Error getting download URL:", error);
            setMovieElementIsLoading(false);
          });
      },
    );
  };

  const goToHome = () => {
    location.reload();
  };

  useEffect(() => {
    if (
      movieElement &&
      movieElement.title &&
      movieElement.title.trim() !== "" &&
      movieElement.image &&
      movieElement.image.trim() !== ""
    ) {
      try {
        addDoc(firebaseDbRef, movieElement);
      } catch (e) {
        console.error(e);
      }
    }
  }, [movieElement]);

  useEffect(() => {
    console.log("movieElement", movieElement);
  }, [movieElement]);

  const addMovieContentForm = (
    <>
      <Typography
        id="movie-modal-title"
        sx={{ color: "#64EEBC", fontSize: "20px", fontWeight: "700" }}
      >
        Agregar película
      </Typography>
      <form onSubmit={handleSave}>
        <DropzoneArea
          onChange={(event) => setMovieFile(event)}
          dropzoneText="Agregá un archivo o arrastralo y soltalo aquí"
          dropzoneClass="dropzone"
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
            textAlign: "center",
            width: "248px",
            marginTop: "48px",
          }}
          inputRef={titleRef}
          type="text"
          required
        />
        <Box>
          <MovieModalButton
            type="submit"
            sx={{ background: "#fff", opacity: 0.9 }}
          >
            Subir película
          </MovieModalButton>
        </Box>
      </form>
    </>
  );

  const confirmationContentForm = (
    <>
      <Logo />
      <form>
        <Typography
          sx={{
            marginTop: "72px",
            color: "#fff",
            fontWeight: "700",
            fontSize: "24px",
          }}
        >
          ¡Felicitaciones!
        </Typography>
        <Typography sx={{ color: "#fff", fontSize: "20px" }}>
          Liteflix The movie fue correctamente subida.
        </Typography>
        <MovieModalButton onClick={goToHome}>Ir a Home</MovieModalButton>
      </form>
    </>
  );

  const loadingMovieContentForm = (
    <>
      <Typography
        id="movie-modal-title"
        sx={{ color: "#64EEBC", fontSize: "20px", fontWeight: "700" }}
      >
        Agregar película
      </Typography>
      <Box sx={{ width: "100%", margin: "60px 0", textAlign: "center" }}>
        <Typography>Cargando {uploadProgress}</Typography>
        <BarLoader color="#36d7b7" width={600} />
      </Box>
      <Box>
        <MovieModalButton type="submit" disabled>
          Subir película
        </MovieModalButton>
      </Box>
    </>
  );

  return (
    <div>
      <AddMovieButton onClick={handleOpen} />
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="movie-modal-title"
        aria-describedby="movie-modal-description"
      >
        <Box sx={isMobile ? containerMovieModalMobileStyle : containerMovieModalStyle}>
          <Box sx={{ width: "100%", textAlign: "right", color: "#fff" }}>
            <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
          </Box>
          {movieElementIsLoading && loadingMovieContentForm}
          {movieElementUploaded && confirmationContentForm}
          {!movieElementIsLoading &&
            !movieElementUploaded &&
            addMovieContentForm}
        </Box>
      </StyledModal>
    </div>
  );
};

export default AddMovieModal;
