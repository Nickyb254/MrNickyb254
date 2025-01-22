import React from 'react'
import { Routes, Route} from 'react-router-dom';


import BodyLayout from './components/BodyLayout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<BodyLayout/>} />
    </Routes>
  )
}

export default App