import React from 'react';
import { FaStar, FaUsers, FaShieldAlt } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="py-16 px-8 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <FaStar className="text-yellow-500 text-4xl mx-auto" />
          <h3 className="text-xl font-semibold mt-4">4.5+ Customer Rating</h3>
        </div>
        <div>
          <FaUsers className="text-blue-500 text-4xl mx-auto" />
          <h3 className="text-xl font-semibold mt-4">20,000+ Clients</h3>
        </div>
        <div>
          <FaShieldAlt className="text-green-500 text-4xl mx-auto" />
          <h3 className="text-xl font-semibold mt-4">99.8% Financial Stability</h3>
        </div>
      </div>
    </section>
  );
};

export default Features;
