import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GangaFoundationLandingPage from './App';
import Update from './Update';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<GangaFoundationLandingPage />} />
      <Route path="/ganga" element={<Update />} />
    </Routes>
  );
}

export default Router;
