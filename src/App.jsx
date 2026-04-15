import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Matches from './components/Matches'
import Stats from './components/Stats'
import Contenders from './components/Contenders'
import Venues from './components/Venues'
import Bracket from './components/Bracket'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Matches />
      <Stats />
      <Contenders />
      <Venues />
      <Bracket />
      <Footer />
    </>
  )
}

export default App