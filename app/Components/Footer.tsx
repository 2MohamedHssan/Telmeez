import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Telmeez</h3>
            <p className="text-gray-400">
              Telmeez is a platform dedicated to providing educational tools and resources for students and teachers.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/about" className="hover:text-purple-400">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-purple-400">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/faq" className="hover:text-purple-400">
                  FAQs
                </a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="hover:text-purple-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">
              Email: <a href="mailto:support@telmeez.com" className="hover:text-purple-400">support@telmeez.com</a>
            </p>
            <p className="text-gray-400">Phone: +123 456 7890</p>
            <div className="mt-4">
              <a
                href="https://facebook.com/telmeez"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 hover:text-purple-400"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/telmeez"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 hover:text-purple-400"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com/telmeez"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 mt-8">
          <p>&copy; {new Date().getFullYear()} Telmeez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
