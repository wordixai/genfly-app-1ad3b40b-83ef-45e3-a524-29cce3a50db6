import { Coffee, Clock, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Coffee size={32} />,
    title: "Premium Coffee",
    description: "Sourced from the finest beans around the world, our coffee is roasted to perfection."
  },
  {
    icon: <Clock size={32} />,
    title: "Open Daily",
    description: "We're open from 7am to 10pm every day of the week to serve your coffee needs."
  },
  {
    icon: <Award size={32} />,
    title: "Award Winning",
    description: "Recognized for our exceptional quality and service in the local community."
  },
  {
    icon: <Users size={32} />,
    title: "Community Space",
    description: "A welcoming environment for meetings, work, or catching up with friends."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-amber-800 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-amber-800 mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;