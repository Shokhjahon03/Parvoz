import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './Pages/Homepage'
import Order from './Pages/Order'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    {/* <div className='heros w-full h-dvh fixed top-0 left-0 z-0'>

    </div> */}
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/order' element={<Order/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
