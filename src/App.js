import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./Component/Content/Content";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Register from "./Component/Register/Register";
import JobPortal from "./Component/Jobportal/Jobportal";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header className="bg-gray-800 text-white"/>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Content/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/Jobportal" element={<JobPortal/>}/>
          </Routes>
        </div>
        <Footer className="bg-gray-900 text-white"/>
      </div>
    </Router>
  );
};

export default App;
