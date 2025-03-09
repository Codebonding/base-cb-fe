import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Content from "./Component/Content/Content";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Register from "./Component/Register/Register";
import JobPortal from "./Component/Jobportal/Jobportal";
import PrivacyPolicy from "./Component/Privacy/Privacy";
import Disclaimer from "./Component/Disclaimer/Disclaimer";
import TermsAndConditions from "./Component/Termsandcondition/TermsAndCondition";
import Login from "./Component/Login/Login";
import TesterReg from "./Component/Tester/TesterReg";
import Dashboard from "./Component/Dashboard/Dashboard"; // ✅ Protected Page
import PrivateRoute from "./Router/PrivateRoute";

// ✅ Layout Component to manage Header & Footer visibility
const Layout = ({ children }) => {
  const location = useLocation();
  const hideLayout = location.pathname.startsWith("/dashboard"); // Hide on dashboard

  return (
    <div className="min-h-screen flex flex-col">
      {!hideLayout && <Header className="bg-gray-800 text-white" />}
      <div className="flex-grow">{children}</div>
      {!hideLayout && <Footer className="bg-gray-900 text-white" />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* ✅ Show Header & Footer before login */}
          <Route path="/" element={<Content />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Candiate" element={<TesterReg />} />
          <Route path="/Jobportal" element={<JobPortal />} />
          <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

          {/* ✅ Private Route for Dashboard (Hides Header & Footer after login) */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
