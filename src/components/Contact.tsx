"use client";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaCheck, FaSpinner } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-[90%] rounded-lg mx-auto bg-[#fdfcea] flex items-center justify-center p-4 sm:p-12 mt-[10%]">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-zinc-800 font-mono">
            Get in touch
          </h1>
          <p className="text-gray-600 text-lg">
            Have a project in mind or questions about our services? Reach out to us directly using the contact details below, 
            or fill out the form and we'll get back to you within 24 hours. Our team is ready to help bring your creative vision to life.
          </p>
        </div>

        {/* Right Content - Form */}
        <div className="lg:w-1/2">
          <form onSubmit={handleSubmit} className="border-b-4 border-[#f3f2cf] pb-8 mb-8">
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-[#f3f2cf] rounded-lg p-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#b0ab4d] ${errors.name ? "border border-red-500" : ""}`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Contact Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full bg-[#f3f2cf] rounded-lg p-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#b0ab4d] ${errors.phone ? "border border-red-500" : ""}`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-[#f3f2cf] rounded-lg p-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#b0ab4d] ${errors.email ? "border border-red-500" : ""}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-[#f3f2cf] rounded-lg p-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#b0ab4d] ${errors.message ? "border border-red-500" : ""}`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-6 bg-[#b0ab4d] text-white py-3 px-8 rounded-lg hover:bg-[#9c9842] transition-colors duration-300 flex items-center justify-center gap-2 ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Sending...
                </>
              ) : isSuccess ? (
                <>
                  <FaCheck />
                  Sent Successfully!
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-[#b0ab4d] hover:text-[#9c9842] transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-[#b0ab4d] hover:text-[#9c9842] transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-[#b0ab4d] hover:text-[#9c9842] transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-[#b0ab4d] hover:text-[#9c9842] transition-colors">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;