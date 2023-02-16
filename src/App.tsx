import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  AuthPage,
  InvestPage,
  SavingsPage,
  Error,
  DashboardPage
} from "./pages";
import { SharedLayout } from "./components";
import { DashHome } from "./components/dashboard";

function App() {
  return (
    <Routes>

      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/Save" element={<SavingsPage />} />
        <Route path="/invest" element={<InvestPage />} />
      </Route>
      
      <Route path="/dashboard" element={<DashboardPage />} >
        <Route index element={<DashHome />} />
      </Route>
      
      <Route path="*" element={<Error />} />
      <Route path="/register" element={<AuthPage />} />
      <Route path="/login" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
