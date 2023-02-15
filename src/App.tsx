import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  AuthPage,
  InvestPage,
  SavingsPage,
  Error,
  DashBoard,
} from "./pages";
import { SharedLayout } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/Save" element={<SavingsPage />} />
        <Route path="/invest" element={<InvestPage />} />
      </Route>
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="*" element={<Error />} />
      <Route path="/register" element={<AuthPage />} />
      <Route path="/login" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
