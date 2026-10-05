"use client";

import { useEffect, useState } from "react";
import { authService } from "../../services/authService";
import Layout from "@/src/component/layout/layout";
const countryCodes = [
  { code: "+91", label: "🇮🇳 India" },
  { code: "+1", label: "🇺🇸 USA" },
  { code: "+44", label: "🇬🇧 UK" },
  { code: "+61", label: "🇦🇺 Australia" },
];

const salutations = ["Mr.", "Mrs.", "Miss"];
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

export default function RegisterPage() {
  const [country, setCountry] = useState(countryCodes[0]);
  const [salutation, setSalutation] = useState(salutations[0]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (!error && !success) return;

    const timer = setTimeout(() => {
      setError("");
      setSuccess("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [error, success]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "password") {
      if (!value) {
        setPasswordError("");
        return;
      }

      if (!passwordPattern.test(value)) {
        setPasswordError(
          "Use 8+ characters, including uppercase, lowercase, a number, and a special character."
        );
      } else {
        setPasswordError("");
      }
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const isFormEmpty = Object.values(formData).every(
        (value) => !String(value).trim()
      );

      if (isFormEmpty) {
        setError("Please fill in all fields.");
        setLoading(false);
        return;
      }

      if (!formData.password) {
        setError("Please fill in all fields.");
        setLoading(false);
        return;
      }

      if (!passwordPattern.test(formData.password)) {
        setPasswordError(
          "Use 8+ characters, including uppercase, lowercase, a number, and a special character."
        );
        setLoading(false);
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        setLoading(false);
        return;
      }

      const { confirmPassword, ...payload } = formData;
      const response = await authService.register(payload);
      setSuccess("Registration successful!");
      setFormData({ name: "", email: "", password: "", confirmPassword: "", phone: "" });
      console.log("Response:", response);
    } catch (err: any) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="px-4 pb-12 pt-8 sm:px-6 sm:pb-16 md:px-8 md:pb-20 md:pt-12">
        <div className="mx-auto w-full max-w-5xl">
          {error && (
            <div className="fixed right-5 top-5 z-50 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 shadow-lg">
              {error}
            </div>
          )}

          {success && (
            <div className="fixed right-5 top-5 z-50 rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 shadow-lg">
              {success}
            </div>
          )}

          {/* Heading */}
          <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-[#6B4F3A] md:text-xl">
            Join our mailing list for holiday inspiration, offers from our hotels, and gift vouchers
          </p>

          {/* Form */}
          <form className="w-full space-y-6" onSubmit={handleSubmit}>

            {/* Row 1 */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              {/* Salutation */}
              <select
                value={salutation}
                onChange={(e) => setSalutation(e.target.value)}
                className="border border-gray-300 bg-transparent px-4 py-3 focus:outline-none"
              >
                {salutations.map((s, i) => (
                  <option key={i}>{s}</option>
                ))}
              </select>

              {/* Full Name */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="FULL NAME"
                className="border border-gray-300 bg-transparent px-4 py-3 focus:outline-none"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              {/* Mobile */}
              <div className="flex border border-gray-300">

                <select
                  value={country.code}
                  onChange={(e) =>
                    setCountry(
                      countryCodes.find((c) => c.code === e.target.value)!
                    )
                  }
                  className="border-r border-gray-300 bg-transparent px-3 py-3 focus:outline-none"
                >
                  {countryCodes.map((c, i) => (
                    <option key={i} value={c.code}>
                      {c.label} {c.code}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="MOBILE NUMBER"
                  className="w-full bg-transparent px-4 py-3 focus:outline-none"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="EMAIL ADDRESS"
                className="border border-gray-300 bg-transparent px-4 py-3 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 gap-2 md:grid-cols-1">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="PASSWORD"
                className="border border-gray-300 bg-transparent px-4 py-3 focus:outline-none"
              />
              {(passwordError || formData.password) && (
                <p className="text-sm text-red-600">
                  {passwordError ||
                    "Use 8+ characters, including uppercase, lowercase, a number, and a special character."}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="CONFIRM PASSWORD"
                className="border border-gray-300 bg-transparent px-4 py-3 focus:outline-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2D2424] py-4 tracking-wide text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "REGISTERING..." : "REGISTER"}
            </button>
          </form>
        </div>
      </div>
    </Layout>
    // <div className="flex items-center justify-center min-h-[80vh] bg-gray-50">
    //   <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
    //     <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

    //     {error && (
    //       <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
    //         {error}
    //       </div>
    //     )}
    //     {success && (
    //       <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
    //         {success}
    //       </div>
    //     )}

    //     <form className="space-y-4" onSubmit={handleSubmit}>
    //       <input
    //         type="text"
    //         name="name"
    //         placeholder="Full Name"
    //         value={formData.name}
    //         onChange={handleChange}
    //         required
    //         className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //       />

    //       <input
    //         type="email"
    //         name="email"
    //         placeholder="Email Address"
    //         value={formData.email}
    //         onChange={handleChange}
    //         required
    //         className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //       />

    //       <input
    //         type="password"
    //         name="password"
    //         placeholder="Password"
    //         value={formData.password}
    //         onChange={handleChange}
    //         required
    //         className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //       />

    //       <button
    //         type="submit"
    //         disabled={loading}
    //         className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition disabled:opacity-50"
    //       >
    //         {loading ? "Registering..." : "Register"}
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
}
