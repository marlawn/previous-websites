import { Routes, Route } from "react-router-dom";
/*
<Route path="/contact" element={< contact />} />
<Route path="/resume" element={< resume />} />
import contact from './components/Contact'
import resume from './components/Resume'
*/
import Layout from './components/Layout/Layout.js'
import Portfolio from './components/Portfolio/Portfolio.js'
import Resume from "./components/Resume/Resume.js"

function App() {
  return (
    <>
      <Routes>
        <Route path="/marlawn" element={<Layout />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  )
}

export default App
