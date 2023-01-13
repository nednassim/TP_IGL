import { Route, Routes } from "react-router-dom"
import Announces from "./pages/Announces"
import Home from "./pages/Home"

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/announces" element={<Announces />} />
    </Routes>
  )
}

export default App
