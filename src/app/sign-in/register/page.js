"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

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

    // Check if a user with the same email already exists
    const userExists = storedUsers.some((user) => user.email === formData.email);

    if (userExists) {
      alert("User already exists. Please log in.");
      router.push("/sign-in/login");
    } else {
      // Add the new user data to the users array
      storedUsers.push(formData);
      
      // Store the updated users array in localStorage
      localStorage.setItem("users", JSON.stringify(storedUsers));

      alert("Registration successful! Please log in.");
      router.push("/sign-in/login");
    }
  };

  return (
    <div>
      <h2>Register Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="cursor-pointer text-red-700">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
