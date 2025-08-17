import './App.css'
import Flavours from './components/Flavours'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Review from './components/Review'
function App() {


  return (
    <>
    <div id='landing'className='vh-100'>
    <Header/>
    <LandingPage/> 
    <Flavours/>
    <About/>
    <Review/>
    <Contact/>
    <Footer/>
   
    </div>

    </>
  )
}

export default App
