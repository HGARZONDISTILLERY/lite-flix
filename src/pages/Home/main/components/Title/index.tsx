import "./styles.css";

import { Box, Typography } from "@mui/material";

interface TitleProps {
  featuredMovieTitle: string;
}

const Title = ({ featuredMovieTitle }: TitleProps) => {
  return (
    <Box className="titleContainer">
      <h3>
        Original de <strong>Liteflix</strong>
      </h3>
      <h1 className="title animate__animated animate__tada">{featuredMovieTitle}</h1>
    </Box>
  );
};

export default Title;
