import { useEffect, useRef, useState } from "react"
import "./App.css"
import EmiCalculator from "./pages/emiCalculator"
import FileExplorer from "./pages/fileExplorer"
import Pagination from "./pages/pagination"
import PasswordGenerator from "./pages/passwordGenerator"
import ProgressBar from "./pages/progressBar"
import Grid3By3 from "./pages/grid3By3"

function App() {
  const [percentVal, setPercentVal] = useState(0)
  let timeRef = useRef()
  useEffect(() => {
    // setInterval(() => {
    //   setPercentVal((p) => p + 1)
    // }, 200)
  }, [])
  return (
    <>
      {/* <FileExplorer/> */}
      {/* <Pagination /> */}
      {/* <EmiCalculator /> */}
      {/* <PasswordGenerator /> */}
      {/* <ProgressBar progressVal={percentVal} /> */}
      <Grid3By3 />
    </>
  )
}

export default App
