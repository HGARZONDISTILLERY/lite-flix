// import { useRef } from "react"

import { Box } from "@mui/material"
import Aside from "./aside/Aside"
import Header from "./header/Header"
import Main from "./main/Main"

const Home = () => {
  return(
    <Box sx={{ width: '100vw', height: '100vh' }}>
      <Header />
      <Main />
      <Aside />
    </Box>
  )
}

export default Home


/* export default function Home() {
  const messageRef = useRef()

  return(
    <div>
      <form>
      <label>Enter message</label>
        <input type="text" ref={messageRef.current} />
        <button type="submit">Add</button>
      </form>
    </div>
  )
} */
