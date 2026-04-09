import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Nomatch from './components/Nomatch'
import Footer from './components/Footer'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
     /* <Route path="*" element={<Nomatch />} /> 
    </Routes>
  )
}

export default App