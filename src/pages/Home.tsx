import { useRef } from "react"

export default function Home() {
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
}
