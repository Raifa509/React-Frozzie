import './App.css'
import Flavours from './components/Flavours'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
import About from './components/About'
function App() {


  return (
    <>
    <div id='landing'className='vh-100'>
    <Header/>
    <LandingPage/> 
    <Flavours/>
    <About/>
    <Footer/>
   
    </div>

    </>
  )
}

export default App
