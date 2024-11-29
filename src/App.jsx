import React from "react";
import { FiArrowRight } from "react-icons/fi";

const servicesData = [
  {
    title: "WP Development",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
  },
  {
    title: "UI/UX Design",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
  },
  {
    title: "Branding",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
  },
  {
    title: "Social Ad Campaign",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
  },
];

const Services = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Our Core Services</h2>
        <div className="w-80 h-7 bg-blue-500 mx-auto mt-2"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-10 px-5">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="flex items-center space-x-5 p-5 border border-gray-700 hover:shadow-lg transition-shadow duration-300"
          >
            <div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-400 mt-2">{service.description}</p>
            </div>
            <div>
              <FiArrowRight
                className="text-white text-2xl cursor-pointer transition duration-300 hover:text-orange-500"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Services;
