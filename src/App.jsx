import './App.css'
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/Home'
import Divine from './pages/Divine'
import Result from './pages/Result'
import Header from './components/Header'
import Footer from './components/Footer'
// 流程是Home即是Form，submit後切換到Divine，最後post的同時到result

function App() {
  return(
    <>
    <Header/>
    <main>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/divine" element={<Divine/>} />
          <Route path="/result" element={<Result/>} />
        </Routes>
      </BrowserRouter>
    </main>
    <Footer/>
    </>
  )
}

export default App
