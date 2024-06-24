import Button from "@mui/material/Button";

interface AddMovieButtonProps {
  onClick: () => void;
}

const AddMovieButton = ({ onClick }: AddMovieButtonProps) => {
  return (
    <Button sx={{ color: "#fff", fontSize: "18px" }} onClick={onClick}>
      + <strong>Agregar película</strong>
    </Button>
  );
};

export default AddMovieButton;
