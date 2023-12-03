import './App.css'
import Navbar from './components/Navbar'
import Inicio from './components/Inicio'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Panel from './components/Panel'




function App() {


  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Panel" element={<Panel/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
