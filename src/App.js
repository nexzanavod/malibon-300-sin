
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SlvsNz from './pages/slvsnzA'
import SemiFinal1 from './pages/semiFinal1';
import SemiFinal2 from './pages/semiFinal2';
import Final from './pages/final';


// Daraz1111
import Malibon300250Sin from './pages/Daraz1111/malibon/sinhala/300*250/SlideA';
import Malibon300250Eng from './pages/Daraz1111/malibon/english/300*250/SlideA';
import Malibon72890Eng from './pages/Daraz1111/malibon/english/728*90/SlideA';
import Malibon72890Sin from './pages/Daraz1111/malibon/sinhala/728*90/SlideA';
import Nolimit300250 from './pages/Nolimit/300*250/SlideA';
import Nolimit72890 from './pages/Nolimit/728*90/SlideA';














function App() {
  return (
    <Router>
      <div className="background">
        <Routes>
          <Route path="/slvsnz" element={<SlvsNz/>} />
          <Route path="/semifinal1" element={<SemiFinal1/>} />
          <Route path="/semifinal2" element={<SemiFinal2/>} />
          <Route path="/final" element={<Final/>} />


          {/* Daraz1111 */}

          <Route path="/300*250/malibon/sin" element={<Malibon300250Sin/>} />
          <Route path="/300*250/malibon/eng" element={<Malibon300250Eng/>} />
          <Route path="/728*90/malibon/eng" element={<Malibon72890Eng/>} />
          <Route path="/728*90/malibon/sin" element={<Malibon72890Sin/>} />



          {/* Nolimit */}
          <Route path="/300*250/nolimit" element={<Nolimit300250/>} />
          <Route path="/728*90/nolimit" element={<Nolimit72890/>} />









        </Routes>
      </div>
    </Router>
  );
}



export default App;
