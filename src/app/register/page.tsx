"use client";

import { useState } from "react";
import { authService } from "../../services/authService";
const countryCodes = [
  { code: "+91", label: "🇮🇳 India" },
  { code: "+1", label: "🇺🇸 USA" },
  { code: "+44", label: "🇬🇧 UK" },
  { code: "+61", label: "🇦🇺 Australia" },
];

const salutations = ["Mr.", "Mrs.", "Miss"];

export default function RegisterPage() {
  const [country, setCountry] = useState(countryCodes[0]);
  const [salutation, setSalutation] = useState(salutations[0]);
  const [whatsapp, setWhatsapp] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await authService.register(formData);
      setSuccess("Registration successful!");
      setFormData({ name: "", email: "", password: "" });
      console.log("Response:", response);
    } catch (err: any) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#F5EFE7] min-h-screen flex flex-col items-center justify-center px-6 py-16">
      
      {/* Heading */}
      <p className="text-center text-lg md:text-xl text-[#6B4F3A] mb-10 max-w-3xl">
        Join our mailing list for holiday inspiration, offers from our hotels, and gift vouchers
      </p>

      {/* Form */}
      <div className="w-full max-w-5xl space-y-6">
        
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
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

          {/* First Name */}
          <input
            type="text"
            placeholder="FIRST NAME"
            className="border border-gray-300 bg-transparent px-4 py-3 focus:outline-none"
          />

          {/* Last Name */}
          <input
            type="text"
            placeholder="LAST NAME"
            className="border border-gray-300 bg-transparent px-4 py-3 focus:outline-none"
          />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Mobile */}
          <div className="flex border border-gray-300">
            
            <select
              value={country.code}
              onChange={(e) =>
                setCountry(
                  countryCodes.find((c) => c.code === e.target.value)!
                )
              }
              className="bg-transparent px-3 py-3 border-r border-gray-300 focus:outline-none"
            >
              {countryCodes.map((c, i) => (
                <option key={i} value={c.code}>
                  {c.label} {c.code}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="MOBILE NUMBER"
              className="w-full px-4 py-3 bg-transparent focus:outline-none"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="EMAIL ADDRESS"
            className="border border-gray-300 bg-transparent px-4 py-3 focus:outline-none"
          />
        </div>

        {/* WhatsApp */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={whatsapp}
            onChange={() => setWhatsapp(!whatsapp)}
            className="w-5 h-5"
          />
          <p className="text-sm text-[#6B4F3A]">
            Send me updates on WhatsApp
          </p>
        </div>

        {/* Button */}
        <button className="w-full bg-[#2D2424] text-white py-4 tracking-wide hover:opacity-90 transition">
          JOIN WITH OTP
        </button>
      </div>
    </section>
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
