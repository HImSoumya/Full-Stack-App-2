import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import UserTBL from './components/UserTBL'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/list' element={<UserTBL />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
