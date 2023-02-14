import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage, AuthPage, InvestPage, SavingsPage } from "./pages";
import { SharedLayout } from "./components";

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/Save" element={<SavingsPage />} />
        <Route path="/invest" element={<InvestPage />} />
      </Route>

      <Route path="/register" element={<AuthPage />} />
      <Route path="/login" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
