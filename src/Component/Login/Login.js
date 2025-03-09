import React from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../features/api/testApiSlice";
import Swal from "sweetalert2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();

  // ✅ Validation Schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleLogin = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await loginUser(values).unwrap();

      if (response?.tokens?.accessToken) {
        console.log("Login Success:", response);

        // ✅ Store Tokens
        localStorage.setItem("accessToken", response.tokens.accessToken);
        localStorage.setItem("refreshToken", response.tokens.refreshToken);

        // ✅ Show Success Alert
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "Redirecting to Dashboard...",
          timer: 2000,
          showConfirmButton: false,
        });

        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setErrors({ server: err?.data?.message || "Invalid email or password" });

      // ✅ Show Error Alert
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: err?.data?.message || "Invalid email or password",
      });
    }
    setSubmitting(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen  p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-[#195E6A] mb-6">
          Login to Your Account
        </h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting, errors }) => (
            <Form>
              {/* Server Error */}
              {errors.server && <p className="text-red-500 text-center mb-4">{errors.server}</p>}

              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#195E6A]"
                />
                <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#195E6A]"
                />
                <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-white p-2 rounded-lg transition ${
                  isSubmitting ? "bg-gray-500 cursor-not-allowed" : "bg-[#195E6A] hover:bg-[#144854]"
                }`}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <span className="text-[#195E6A] cursor-pointer" onClick={() => navigate("/Candiate")}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
