
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import NavBar from './NavBar';
import Download from './pages/Download';
import DownloadPage from './pages/DownloadPage';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route element={<Homepage />} path='/' />
        <Route element={<Download />} path='download' />
        <Route element={<DownloadPage />} path='/download/:app' />
        <Route element={<Services />} path='/services' />
        <Route element={<ContactUs />} path='/contactUs' />
      </Routes>
    </Router>
  );
}

export default App;
