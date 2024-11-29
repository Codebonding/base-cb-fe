import React, { useState } from "react";
import { useCreateUserMutation } from "../../features/api/userApiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

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
    .max(new Date().getFullYear(), "Passedout year cannot be in the future")
    .required("Passedout year is required"),
  address: Yup.string().required("Address is required"),
  district: Yup.string().required("District is required"),
  state: Yup.string().required("State is required"),
  pinCode: Yup.string()
    .matches(/^[0-9]{6}$/, "Pincode must be a 6-digit number")
    .required("Pincode is required"),
});

const Register = () => {
  const [createUser, { isLoading, isSuccess, isError, error }] =
    useCreateUserMutation();

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
    { label: "Pincode", name: "pinCode", type: "number", placeholder: "Enter your pinCode" }
  ];

  const onSubmit = async (data) => {
    try {
      const response = await createUser(data).unwrap();
      console.log("Response:", response);

      toast.success("Registration Successful! Welcome to CodeBonding!", {
        position: "top-center",
        autoClose: 5000,
      });

      reset();
    } catch (err) {
      console.error("Error:", err.data.error);

      toast.error(`Registration failed. ${err.data.error}`, {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="flex justify-center items-center py-8 mt-[100px] min-h-screen bg-gray-200">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-center">
          <h2 className="text-3xl font-bold text-white">Registration Form</h2>
          <p className="text-white mt-2">Join CodeBonding IT Training Today!</p>
        </div>
        <form className="p-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {fields.map(({ label, name, type, placeholder }) => (
            <div key={name}>
              <label className="block text-gray-700 font-medium mb-1">{label}</label>
              {type === "textarea" ? (
                <textarea
                  rows="3"
                  {...register(name)}
                  placeholder={placeholder}
                  className="w-full px-4 py-3 border rounded-md shadow-sm focus:ring focus:ring-blue-400 focus:outline-none"
                />
              ) : (
                <input
                  type={type}
                  {...register(name)}
                  placeholder={placeholder}
                  className="w-full px-4 py-3 border rounded-md shadow-sm focus:ring focus:ring-blue-400 focus:outline-none"
                />
              )}
              {errors[name] && (
                <p className="text-red-500 text-sm">{errors[name].message}</p>
              )}
            </div>
          ))}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-3 py-2 rounded-md shadow-lg text-[18px]"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
