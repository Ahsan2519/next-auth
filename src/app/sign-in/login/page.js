"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing eye icons

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Find user with matching email and password
    const user = storedUsers.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (user) {
      const token = `token-${Math.random().toString(36).substr(2)}`;
      document.cookie = `token=${token}; path=/`;

      alert("Login successful!");
      router.push("/");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4 relative">
          <label className="block text-gray-700">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
          <span
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

        <button
          type="submit"
          className="w-full bg-red-700 text-white py-2 rounded hover:bg-red-800 transition duration-200"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-center">
        Don't have an account?{" "}
        <Link href="/sign-in/register" className="text-blue-500 underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
