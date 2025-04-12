import ContactUs from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Cover } from "@/components/ui/cover";
import { CheckCircle, Mail, Phone } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="flex-1 flex flex-col pt-20">
        {/* Hero Section */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 mt-[13%]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-4xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Don{"'"}t let ideas fade away <br /> Act now <Cover>Contact Us</Cover>
          </h1>
        </div>

        {/* Contact Information Section */}
        <div className="max-w-4xl mx-auto w-full px-4 py-12">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">Get in Touch</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Have a project in mind or questions about our services? Reach out to us directly using the contact details below,
              or fill out the form and we{"'"}ll get back to you within 24 hours. Our team is ready to help bring your creative vision to life.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">Email</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                    For general inquiries and project estimates
                  </p>
                  <a
                    href="mailto:Coolpiximageservices@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Coolpiximageservices@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <Phone className="text-green-600 dark:text-green-400" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">Phone</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                    Available Monday-Friday, 9AM-6PM IST for immediate assistance
                  </p>
                  <a
                    href="tel:8076168701"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    +91 8076168701
                  </a>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Why Choose Us?</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                  <span>24-hour turnaround time for most projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                  <span>Unlimited revisions until you{"'"}re satisfied</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                  <span>Professional-grade editing with natural results</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Form and Footer */}
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
