import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
        {/* About Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Curated Chic</h3>
          <p className="text-sm leading-relaxed">
            Curated Chic offers bespoke styling and fashion consulting services, helping you define and elevate your personal brand with confidence and elegance.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500 transition-colors duration-300 text-sm">Home</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors duration-300 text-sm">Services</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors duration-300 text-sm">Portfolio</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors duration-300 text-sm">Blog</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors duration-300 text-sm">About Us</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <address className="not-italic space-y-2 text-sm">
            <p>123 Chic Avenue, Suite 100</p>
            <p>Fashion City, FC 90210</p>
            <p>Email: <a href="mailto:info@curatedchic.com" className="hover:text-blue-500 transition-colors duration-300">info@curatedchic.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="hover:text-blue-500 transition-colors duration-300">+1 (234) 567-890</a></p>
          </address>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <Facebook size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <Twitter size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <Instagram size={24} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="max-w-6xl mx-auto pt-8 mt-8 border-t border-gray-700 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Curated Chic. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;