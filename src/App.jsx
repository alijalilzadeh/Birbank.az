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
import Ninja from './components/Ninja'
import GetCredit from './components/GetCredit'
import EcoSystem from './components/EcoSystem'
import Sigortalar from './components/Sigortalar'
import Tariffs from './components/Tariffs'
import Blogs from './components/Blogs'
import Campaigns from './components/Campaigns'
import Partners from './components/Partners'
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
      <Route path='/kreditler' element={<GetCredit />}/>
      <Route path='/ninja' element={<Ninja />}/>
      <Route path='/ecosystem' element={<EcoSystem />}/>
      <Route path='/sigortalar' element={<Sigortalar />}/>
      <Route path='/tariffs' element={<Tariffs />}/>
      <Route path='/bloqlar' element={<Blogs />}/>
      <Route path='/campaigns' element={<Campaigns />}/>
      <Route path='/partners' element={<Partners />}/>
    </Routes>
  )
}

export default App