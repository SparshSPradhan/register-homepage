



// import React from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

// const Header = () => {
//   return (
//     <>
//       {/* Top Bar Section */}
//       <div className="bg-gray-800 text-white text-sm py-2 px-8 flex justify-end items-center space-x-4">
//         <div className="flex items-center space-x-4">
//           <FaEnvelope />
//           <a href="mailto:info@registerkaro.in" className="hover:text-orange-400">
//             info@registerkaro.in
//           </a>
//           <div className="border-l border-gray-500 h-4 opacity-50"></div>

//           <FaPhoneAlt />
//           <a href="tel:+918447746183" className="hover:text-orange-400">
//             +91 84477 46183
//           </a>
//           <div className="border-l border-gray-500 h-4 opacity-50"></div>

//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
//             <FaFacebookF />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
//             <FaTwitter />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
//             <FaInstagram />
//           </a>
//         </div>
//       </div>

//       {/* Main Header Section */}
//       <header className="flex justify-between items-center py-4 px-8 bg-blue-900 text-white">
//         <h1 className="text-2xl font-bold">
//           Register<span className="text-orange-500">Karo</span>
//         </h1>
//         <nav>
//           <ul className="flex space-x-6">
//             <li><a href="#" className="hover:text-orange-400">Home</a></li>
//             <li><a href="#" className="hover:text-orange-400">Our Services</a></li>
//             <li><a href="#" className="hover:text-orange-400">Blog</a></li>
//             <li><a href="#" className="hover:text-orange-400">Contact Us</a></li>
//             <li><a href="#" className="hover:text-orange-400">About Us</a></li>
//           </ul>
//         </nav>
//         <button className="bg-orange-500 px-6 py-2 rounded-full hover:bg-orange-600">Talk An Expert</button>
//       </header>
//     </>
//   );
// };

// export default Header;





import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      {/* Top Bar Section */}
      <div className="bg-gray-800 text-white text-sm py-2 px-8 flex justify-end items-center space-x-4">
        <div className="flex items-center space-x-4">
          <FaEnvelope />
          <a href="mailto:info@registerkaro.in" className="hover:text-orange-400">
            info@registerkaro.in
          </a>
          <div className="border-l border-gray-500 h-4 opacity-50"></div>

          <FaPhoneAlt />
          <a href="tel:+918447746183" className="hover:text-orange-400">
            +91 84477 46183
          </a>
          <div className="border-l border-gray-500 h-4 opacity-50"></div>

          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Main Header Section */}
      <header className="flex justify-between items-center py-4 px-8 bg-white shadow-md text-gray-900">
        <h1 className="text-2xl font-bold">
          Register<span className="text-orange-500">Karo</span>
        </h1>
        
        <nav className="flex w-full">
  <ul className="flex space-x-6 text-gray-700 font-medium ml-auto">
    <li><a href="#" className="hover:text-orange-500">Home</a></li>
    <li><a href="#" className="hover:text-orange-500">Our Services</a></li>
    <li><a href="#" className="hover:text-orange-500">Blog</a></li>
    <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
    <li><a href="#" className="hover:text-orange-500">About Us</a></li>
    <li className="hover:text-orange-500">
      <FaSearch className="cursor-pointer" />
    </li>
  </ul>


        </nav>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600">Talk An Expert</button>
      </header>
    </>
  );
};

export default Header;
