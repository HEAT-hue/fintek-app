import './App.css';
import { Routes, Route } from 'react-router-dom';
// import { Navigation } from './components/navigation/Navigation';
import { Navigation } from './components';
import { HomePage } from './pages';
import { AuthPage } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path='/login' element={<AuthPage />} />
      <Route path='/register' element={<AuthPage />} />
    </Routes >
  );
}

export default App;
