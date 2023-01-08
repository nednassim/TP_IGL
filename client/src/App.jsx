import { Route, Routes } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
import Home from "./pages/Home"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
