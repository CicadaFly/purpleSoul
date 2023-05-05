import './App.css'
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/Home'
import Divine from './pages/Divine'
import Result from './pages/Result'
import Header from './components/Header'
import Footer from './components/Footer'
import Backend from './pages/Backend'
import ErrorPage from './pages/ErrorPage'
// 流程是Home即是Form，submit後切換到Divine，最後post的同時到result
// 還欠一個404頁面  <Route path="*" element={<NotFound />} />

function App() {
  return(
    <div className='flex flex-col'>
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
      <Footer/>
    </div>
  )
}

export default App
