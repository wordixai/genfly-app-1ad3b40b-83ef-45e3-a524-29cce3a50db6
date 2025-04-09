import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The best coffee I've ever had! The atmosphere is so cozy and the staff is incredibly friendly. This is my go-to spot for meetings and quiet work days.",
    author: "Sarah Johnson",
    role: "Marketing Executive"
  },
  {
    quote: "Their pastries are to die for! I come here every weekend for their croissants and a cappuccino. It's become a delightful ritual.",
    author: "Michael Chen",
    role: "Graphic Designer"
  },
  {
    quote: "As a coffee enthusiast, I appreciate their attention to detail and the quality of their beans. The baristas are knowledgeable and always happy to chat about their craft.",
    author: "Alex Rodriguez",
    role: "Coffee Blogger"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-amber-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-amber-900/50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <svg className="w-10 h-10 text-amber-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-4 italic">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-amber-200">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;