import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GangaFoundationLandingPage from './GangaFoundationLandingPage';
import Update from './Update';

function RouterPage() {
  return (
     <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Update></Update>} />

        {/* /ganga route */}
        <Route path="/ganga" element={<GangaFoundationLandingPage></GangaFoundationLandingPage>} />

        {/* If user enters random path */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default RouterPage;
