import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Bebas Neue", "Arial", "sans-serif"].join(","),
  },
});

export const API_KEY = "6f26fd536dd6192ec8a57e94141f8b20";

export const BASE_URL = "https://api.themoviedb.org/3";

export const IMAGES_BASE_URL = "https://image.tmdb.org/t/p/";
