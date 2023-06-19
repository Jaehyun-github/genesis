import './App.css';
import Container from './Container';
import Header from './Header';
import FullscreenVideo from './FullscreenVideo';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <FullscreenVideo />
      <Routes>
        <Route path='/' element={<Header />} />
      </Routes>
      <Container />
    </div>
  );
}

export default App;
