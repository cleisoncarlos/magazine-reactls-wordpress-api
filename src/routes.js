import  {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/Post'
import Header from './components/Header'
import Footer from './components/Footer'

export default function RoutesApp() {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/post/:id' element={<Post/>}/>
    
    </Routes>

    <Footer/>
    </BrowserRouter>
  )
}
