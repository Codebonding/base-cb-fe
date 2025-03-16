import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaQuestionCircle, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import McqTest from "../MCQ/MCQTest";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState("welcome");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#195E6A",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        Swal.fire({
          icon: "success",
          title: "Logged Out",
          text: "Redirecting to login page...",
          timer: 2000,
          showConfirmButton: false,
        });

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* ✅ Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-[#195E6A] text-white flex justify-between items-center p-4 z-20">
        <h2 className="text-lg font-bold">Dashboard</h2>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-2xl">
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ✅ Sidebar (Mobile & Desktop) */}
      <div
        className={`fixed md:relative top-0 left-0 w-64 bg-[#195E6A] text-white flex flex-col p-4 transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0 h-full z-20 md:z-auto`}
      >
        <h2 className="text-xl font-bold text-center mb-6">Dashboard</h2>
        <nav className="flex-grow">
          {/* <ul className="space-y-4">
            <li
              className={`flex items-center p-2 rounded-lg cursor-pointer ${
                activeComponent === "mcq" ? "bg-[#164D5A]" : "hover:bg-[#164D5A]"
              }`}
              onClick={() => {
                setActiveComponent("mcq");
                setSidebarOpen(false); // ✅ Close sidebar on mobile
              }}
            >
              <FaQuestionCircle className="mr-3" />
              <span>MCQ Test</span>
            </li>
          </ul> */}
        </nav>
        {/* ✅ Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition mt-4"
        >
          <FaSignOutAlt className="mr-3" />
          Logout
        </button>
      </div>

      {/* ✅ Main Content Area */}
      {/* <div className="flex-1 p-6 mt-12 md:mt-0">
        {activeComponent === "mcq" ? (
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold text-[#195E6A]">MCQ Test</h1>
            <p className="text-gray-600 mt-2">Test your knowledge with our MCQ test.</p>
            <McqTest />
          </div>
        ) : (
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold text-[#195E6A]">Welcome to CodeBonding Tech</h1>
            <p className="text-gray-600 mt-2">Enhance your skills with our training programs.</p>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-[#195E6A] mb-3">MCQ Test Terms and Conditions</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Total Questions:</strong> The test consists of <strong>25 questions</strong>.</li>
                <li><strong>Voucher Prize:</strong> The first <strong>3 members</strong> to complete the test will receive a voucher prize.</li>
                <li><strong>Time Limit:</strong> The test has a fixed time limit. Ensure you complete the test before the timer runs out.</li>
                <li><strong>Answer Submission:</strong> You must submit your answers before the time expires. Unanswered questions will be marked as incorrect.</li>
                <li><strong>Navigation:</strong> Use the "Previous" and "Next" buttons to navigate between questions. You can also click on the question numbers to jump to a specific question.</li>
                <li><strong>Answer Selection:</strong> Select only one answer for each question. Once selected, your answer will be saved automatically.</li>
                <li><strong>Submission:</strong> Once you submit the test, you cannot make any changes. Ensure all answers are correct before submitting.</li>
                <li><strong>Honesty:</strong> Do not use any external resources or assistance during the test. Violations may result in disqualification.</li>
                <li><strong>Technical Issues:</strong> In case of any technical issues, contact support immediately. Do not refresh or close the browser during the test.</li>
              </ul>
              <p className="text-gray-600 mt-3 italic">By starting the test, you agree to abide by these terms and conditions.</p>
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Dashboard;
