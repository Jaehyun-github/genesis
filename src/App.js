import './App.css';
import FullscreenVideo from './FullscreenVideo';
import Header from './Header';
import Container from './Container';
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
