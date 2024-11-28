import React, { useState } from "react";
import { useCreateUserMutation } from "../../features/api/userApiSlice";
import { ToastContainer, toast } from "react-toastify"; // Ensure correct import
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    passoutYear: "",
    address: "",
    district: "",
    state: "",
    pincode: "",
  });

  const [createUser, { isLoading, isSuccess, isError, error }] =
    useCreateUserMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createUser(formData).unwrap();
      console.log("Response:", response);

      // Show success toast
      toast.success("Registration Successful! Welcome to CodeBonding!", {
        position: "top-center",  // Use string instead of `toast.POSITION`
        autoClose: 5000,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        department: "",
        passoutYear: "",
        address: "",
        district: "",
        state: "",
        pincode: "",
      });
    } catch (err) {
      console.error("Error:", err);

      // Show error toast
      toast.error("Registration failed. Please try again.", {
        position: "top-center",  // Use string instead of `toast.POSITION`
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="flex justify-center items-center mt-[100px] min-h-screen bg-gray-200">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Form Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-center">
          <h2 className="text-3xl font-bold text-white">Registration Form</h2>
          <p className="text-white mt-2">Join CodeBonding IT Training Today!</p>
        </div>

        {/* Form Body */}
        <form className="p-8 space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-3 border rounded-md shadow-sm focus:ring focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-md shadow-sm focus:ring focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 border rounded-md shadow-sm focus:ring focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Department */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Enter your department"
              className="w-full px-4 py-3 border rounded-md shadow-sm focus:ring focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Passout Year */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Passout Year</label>
            <input
              type="number"
              name="passoutYear"
              value={formData.passoutYear}
              onChange={handleChange}
              placeholder="Enter your graduation year"
              className="w-full px-4 py-3 border rounded-md shadow-sm focus:ring focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Address</label>
            <textarea
              rows="3"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your full address"
              className="w-full px-4 py-3 border rounded-md shadow-sm focus:ring focus:ring-blue-400 focus:outline-none"
              required
            ></textarea>
          </div>

          {/* District */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">District</label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              placeholder="Enter your district"
              className="w-full px-4 py-3 border rounded-md shadow-sm focus:ring focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter your state"
              className="w-full px-4 py-3 border rounded-md shadow-sm focus:ring focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Pincode */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Pincode</label>
            <input
              type="number"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Enter your pincode"
              className="w-full px-4 py-3 border rounded-md shadow-sm focus:ring focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-600 hover:scale-105 transition transform focus:ring-4 focus:ring-blue-300"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>

      {/* Toast Container for Notifications */}
      <ToastContainer />
    </div>
  );
};

export default Register;
