import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        alert("Failed to submit form");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="relative h-screen">
      <img
        src="/public/company5.png"
        alt="Background"
        className="absolute inset-0 w-full h-[100%] object-fill"
      />
      <div className="absolute inset-0 flex flex-col justify-between">
        <div className="flex justify-end p-8">
          <div className="bg-black bg-opacity-80 p-8 rounded-lg w-1/3">
            <h2 className="text-white text-2xl mb-4">CONTACT US</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-white block mb-1">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-1 bg-transparent border-b border-white text-white outline-none"
                />
              </div>
              <div>
                <label className="text-white block mb-1">Phone Number:</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-1 bg-transparent border-b border-white text-white outline-none"
                />
              </div>
              <div>
                <label className="text-white block mb-1">E-mail:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-1 bg-transparent border-b border-white text-white outline-none"
                />
              </div>
              <div>
                <label className="text-white block mb-1">
                  Type Message Here:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 bg-transparent border border-white text-white outline-none h-24 rounded-md"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-white text-black px-4 py-2 rounded"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-[#00031F] p-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-white text-lg mb-2">TOPICS</h3>
              <ul className="text-white space-y-1">
                <li>Models</li>
                <li>Company</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="flex space-x-4 text-white text-2xl">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
