import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-amber-500 mb-4">Café Aroma</h3>
            <p className="text-gray-400 mb-4">
              A cozy place to enjoy premium coffee and delicious pastries in a welcoming atmosphere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-amber-500 transition-colors">Menu</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-amber-500 transition-colors">About</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-amber-500 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 7am - 10pm</li>
              <li>Saturday: 8am - 11pm</li>
              <li>Sunday: 8am - 11pm</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates, promotions, and coffee tips.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-900"
              />
              <button 
                type="submit" 
                className="bg-amber-800 hover:bg-amber-900 px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Café Aroma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;