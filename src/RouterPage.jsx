import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GangaFoundationLandingPage from './App';
import Update from './Update';

function RouterPage() {
  return (
    <Routes>
      <Route path="/" element={<GangaFoundationLandingPage />} />
      <Route path="/ganga" element={<Update />} />
    </Routes>
  );
}

export default RouterPage;
