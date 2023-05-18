import './App.css'
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/Home'
import Divine from './pages/Divine'
import Result from './pages/Result'
import Header from './components/Header'
import Footer from './components/Footer'
import Backend from './pages/Backend'
import ErrorPage from './pages/ErrorPage'



function App() {
  return(
    <div className='flex flex-col relative'>
      <Header/>
      <main className='min-h-[80vh]'>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/divine" element={<Divine/>} />
            <Route path="/result" element={<Result/>} />
            <Route path="/sicenonly" element={<Backend/>}/>
            <Route path='/*' element={<ErrorPage/>}/>
          </Routes>
        </BrowserRouter>
      </main>
      <div className='relative bottom-0 w-full'>
        <Footer/>
      </div>
    </div>
  )
}

export default App
