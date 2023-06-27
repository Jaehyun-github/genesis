import './App.css';
import FullscreenVideo from './FullscreenVideo';
import Header from './Header';
import Container from './Container';
import MyPage from './MyPage';
import Login from './Login';
import CreateAccount from './CreateAccount';
import CreateAccountComplete from './CreateAccountComplete';
import NotFound from './NotFound';
import { Route, Routes } from 'react-router-dom';
import G70 from './G70';
import G70Sb from './G70Sb';
import G80 from './G80';
import G90 from './G90';
import GV60 from './GV60';
import GV70 from './GV70';
import GV80 from './GV80';
import Footer from './Footer';

function App() {

  return (
    <div className="App">
      <FullscreenVideo />
      <Header />
      <Routes>
        <Route exact path='/' element={<Container />} />
        <Route exact path='/mypage' element={<MyPage />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/createAccount' element={<CreateAccount />} />
        <Route exact path='/createAccountComplete' element={<CreateAccountComplete />} />
        <Route exact path="/more/G70" element={<G70 />} />
        <Route exact path="/more/G70 SHOOTING BRAKE" element={<G70Sb />} />
        <Route exact path="/more/G80" element={<G80 />} />
        <Route exact path="/more/G90" element={<G90 />} />
        <Route exact path="/more/GV60" element={<GV60 />} />
        <Route exact path="/more/GV70" element={<GV70 />} />
        <Route exact path="/more/GV80" element={<GV80 />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
