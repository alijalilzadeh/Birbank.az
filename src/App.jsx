import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Nomatch from './components/Nomatch'
import News from './components/News'
import Footer from './components/Footer'
import Cards from './components/Cards'
import CurrencyRates from './components/CurrencyRates'
import HowTo from './components/HowTo'
import PulKocurmeleri from './components/PulKocurmeleri'
import Istiqraz from './components/Istiqraz'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cards/all" element={<Cards />} />
      <Route path="news" element={<News />}/>
      <Route path="*" element={<Nomatch />} />
      <Route path="/currency-rates" element={<CurrencyRates />} />
      <Route path="/pul-kocurmeleri" element={<PulKocurmeleri />} />
      <Route path="/istiqraz" element={<Istiqraz />} />
      <Route path='/how-to' element={<HowTo />}/>
    </Routes>
  )
}

export default App