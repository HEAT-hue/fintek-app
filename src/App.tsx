import './App.css';
import { Routes, Route } from 'react-router-dom';
// import { Navigation } from './components/navigation/Navigation';
import { Navigation } from './components';
import { HomePage } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes >
  );
}

export default App;
