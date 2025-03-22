import React from "react";
import { useCreateUserMutation } from "../../features/api/userApiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone is required"),
  department: Yup.string().required("Department is required"),
  passedOutYear: Yup.number()
    .typeError("PassedOut Year is required")
    .min(1900, "Passedout year must be after 1900")
    .required("Passedout year is required"),
  address: Yup.string().required("Address is required"),
  district: Yup.string().required("District is required"),
  state: Yup.string().required("State is required"),
  pinCode: Yup.string()
    .matches(/^[0-9]{6}$/, "Pincode must be a 6-digit number")
    .required("Pincode is required"),
});

const Register = () => {
  const [createUser, { isLoading }] = useCreateUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const fields = [
    { label: "Name", name: "name", type: "text", placeholder: "Enter your name" },
    { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
    { label: "Phone", name: "phone", type: "tel", placeholder: "Enter your phone number" },
    { label: "Department", name: "department", type: "text", placeholder: "Enter your department" },
    { label: "Passedout Year", name: "passedOutYear", type: "number", placeholder: "Enter your graduation year" },
    { label: "Address", name: "address", type: "textarea", placeholder: "Enter your full address" },
    { label: "District", name: "district", type: "text", placeholder: "Enter your district" },
    { label: "State", name: "state", type: "text", placeholder: "Enter your state" },
    { label: "Pincode", name: "pinCode", type: "number", placeholder: "Enter your pinCode" },
  ];

  const onSubmit = async (data) => {
    try {
      await createUser(data).unwrap();
      toast.success("Registration Successful! Welcome to CodeBonding!", {
        position: "top-center",
        autoClose: 5000,
      });
      reset();
    } catch (err) {
      toast.error(`Registration failed. ${err.data?.error || "Please try again"}`, {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#1E353D] to-[#185D6A] p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden"
      >
        <div className="bg-[#185D6A] p-8 text-center">
          <h2 className="text-5xl font-bold text-white tracking-wider">Join CodeBonding</h2>
          <p className="text-white mt-2 text-lg font-light">Kickstart your IT career with us!</p>
        </div>
        <form className="p-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fields.map(({ label, name, type, placeholder }) => (
              <motion.div 
                key={name} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-[#1E353D] font-semibold mb-2">{label}</label>
                {type === "textarea" ? (
                  <textarea
                    rows="3"
                    {...register(name)}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 border border-[#185D6A] rounded-lg shadow-sm focus:ring-2 focus:ring-[#185D6A] focus:outline-none transition-all"
                  />
                ) : (
                  <input
                    type={type}
                    {...register(name)}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 border border-[#185D6A] rounded-lg shadow-sm focus:ring-2 focus:ring-[#185D6A] focus:outline-none transition-all"
                  />
                )}
                {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>}
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="bg-[#185D6A] text-white px-8 py-3 rounded-lg shadow-lg hover:bg-[#1E353D] transition-all text-lg font-semibold flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? <FaSpinner className="animate-spin" /> : "Register Now"}
            </motion.button>
          </div>
        </form>
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default Register;