import './App.css';
import '../src/components/Home/assets/reset.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Navigate } from 'react-router-dom';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404"/>} />
    </Routes>
    </>
  );
}

export default App;
