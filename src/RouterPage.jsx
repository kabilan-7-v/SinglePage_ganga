import { Route, Routes } from 'react-router-dom';
import GangaFoundationLandingPage from './GangaFoundationLandingPage';
import Update from './Update';

function RouterPage() {
  return (
    <Routes>
      <Route path="/ganga" element={<GangaFoundationLandingPage />} />
      <Route path="/" element={<Update />} />
    </Routes>
  );
}

export default RouterPage;
