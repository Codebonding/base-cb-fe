import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2
import { useRegisterUserMutation } from "../../features/api/testApiSlice";

const TesterReg = () => {
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      console.log("Submitting Registration Data:", data); // Debug log
  
      // Ensure response is properly handled
      const response = await registerUser(data).unwrap();
      console.log("Registration Success:", response);  // Debug log
  
      if (response?.message) {
        Swal.fire({
          title: "Registration Successful!",
          text: response.message,
          icon: "success",
          confirmButtonColor: "#015D6C",
        }).then(() => {
          navigate("/login");
        });
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (err) {
      console.error("Registration Error:", err);
  
      // Extract error message properly
      const errorMessage = err?.data?.message || err?.error || "Unknown error occurred.";
      Swal.fire({
        title: "Registration Failed",
        text: errorMessage,
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
  };
  

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-xl rounded-lg">
        <h2 className="text-2xl font-bold text-center text-[#015D6C]">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              {...register("name", { required: "Name is required." })}
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#015D6C]"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              {...register("email", { required: "Email is required." })}
              type="email"
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#015D6C]"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              {...register("phoneNumber", {
                required: "Phone number is required.",
              })}
              type="text"
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#015D6C]"
              placeholder="Enter your phone number"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              {...register("password", { required: "Password is required." })}
              type="password"
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#015D6C]"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <motion.button
            type="submit"
            className="w-full p-3 text-white bg-[#015D6C] rounded-lg hover:bg-[#013F4C] transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </motion.button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <span
            className="text-[#015D6C] cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </motion.div>
  );
};

export default TesterReg;
