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
import CreditOrder from './components/CreditOrder'
import Credit from './components/Credit'
import EcoSystem from './components/EcoSystem'
import Sigortalar from './components/Sigortalar'
import Tariffs from './components/Tariffs'
import Blogs from './components/Blogs'
import Campaigns from './components/Campaigns'
import Partners from './components/Partners'
import FAQ from './components/FAQ'
import AboutUs from './components/AboutUs'
import CarCredit from './components/CarCredit'
import YigimHesabi from './components/YigimHesabi'
import Avans from './components/Avans'
import DepozitSeyfleri from './components/DepozitSeyfleri'
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
      <Route path='/kredit-sifarisi' element={<CreditOrder />}/>
      <Route path='/kreditler' element={<Credit />}/>
      <Route path='/ninja' element={<Ninja />}/>
      <Route path='/ecosystem' element={<EcoSystem />}/>
      <Route path='/sigortalar' element={<Sigortalar />}/>
      <Route path='/tariffs' element={<Tariffs />}/>
      <Route path='/bloqlar' element={<Blogs />}/>
      <Route path='/campaigns' element={<Campaigns />}/>
      <Route path='/partners' element={<Partners />}/>
      <Route path='/faq' element={<FAQ />}/>
      <Route path='/about-us' element={<AboutUs />}/>
      <Route path='/avtomobil-krediti' element={<CarCredit />}/>
      <Route path='/yigim-hesabi' element={<YigimHesabi />}/>
      <Route path='/avans' element={<Avans />}/>
      <Route path='/depozit-seyfleri' element={<DepozitSeyfleri/>}/>
    </Routes>
  )
}

export default App