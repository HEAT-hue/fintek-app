import "./App.css";
import { Routes, Route } from "react-router-dom";
// import { Navigation } from './components/navigation/Navigation';
import { Navigation } from "./components";
import { HomePage } from "./pages";
import { AuthPage } from "./pages";
import { Invest } from "./pages";
import { Savings } from "./pages";
import SharedLayout from "./pages/homePage/SharedLayout";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigation />}></Route> */}
      <Route path="/" element={<SharedLayout />}>
        <Route path="/Save" element={<Savings />} />
        <Route path="/invest" element={<Invest />} />
        <Route index element={<HomePage />} />
        <Route path="/register" element={<AuthPage />} />
        {/* <Route path="/login" element={<AuthPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
