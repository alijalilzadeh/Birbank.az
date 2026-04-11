import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Nomatch from './components/Nomatch'
import News from './components/News'
import Footer from './components/Footer'
import Cards from './Cards'
import CurrencyRates from './components/CurrencyRates'
import HowTo from './components/HowTo'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cards/all" element={<Cards />} />
      <Route path="news" element={<News />}/>
      <Route path="*" element={<Nomatch />} />
      <Route path="/currency-rates" element={<CurrencyRates />} />
      <Route path='/how-to' element={<HowTo />}/>
    </Routes>
  )
}

export default App