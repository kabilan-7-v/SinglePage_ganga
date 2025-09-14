import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GangaFoundationLandingPage from './App'
import Update from './Update'

function Router() {
  return (
    <Routes>
        <Route path="/ganga" element={<GangaFoundationLandingPage />} />
        <Route path="/" element={<Update></Update>}/>
      
      </Routes>
  )
}

export default Router