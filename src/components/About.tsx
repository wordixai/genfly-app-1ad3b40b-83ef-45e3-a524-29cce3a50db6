import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Café interior" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-800 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-2xl font-bold">Since 2010</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-amber-800 mb-6"></div>
            
            <p className="text-gray-600 mb-6">
              Café Aroma was founded in 2010 with a simple mission: to create a warm, welcoming space 
              where people could enjoy exceptional coffee and food while connecting with others or finding 
              a moment of peace in their busy day.
            </p>
            
            <p className="text-gray-600 mb-6">
              What started as a small corner shop has grown into a beloved community hub, but our values 
              remain the same. We source our beans ethically, roast them with care, and serve every cup 
              with pride and attention to detail.
            </p>
            
            <p className="text-gray-600 mb-6">
              Our team of passionate baristas are not just employees – they're coffee enthusiasts who 
              take pride in their craft and are always happy to share their knowledge or recommend the 
              perfect brew for your taste.
            </p>
            
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                alt="Founder" 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-medium">Emma Rodriguez</p>
                <p className="text-gray-600">Founder & Head Barista</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;