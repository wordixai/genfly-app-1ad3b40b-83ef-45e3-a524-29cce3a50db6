import { motion } from "framer-motion";

const menuCategories = [
  {
    title: "Coffee",
    items: [
      { name: "Espresso", price: "$3.50", description: "Strong and pure coffee shot" },
      { name: "Cappuccino", price: "$4.50", description: "Espresso with steamed milk and foam" },
      { name: "Latte", price: "$4.75", description: "Espresso with lots of steamed milk and light foam" },
      { name: "Mocha", price: "$5.25", description: "Espresso with chocolate and steamed milk" }
    ]
  },
  {
    title: "Pastries",
    items: [
      { name: "Croissant", price: "$3.25", description: "Buttery, flaky pastry" },
      { name: "Blueberry Muffin", price: "$3.75", description: "Moist muffin loaded with blueberries" },
      { name: "Cinnamon Roll", price: "$4.25", description: "Soft roll with cinnamon and icing" },
      { name: "Chocolate Chip Cookie", price: "$2.75", description: "Classic cookie with chocolate chunks" }
    ]
  }
];

const Menu = () => {
  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <div className="w-24 h-1 bg-amber-800 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in serving the finest coffee and freshly baked goods. 
            All our ingredients are carefully selected for quality and taste.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <motion.h3 
                className="text-2xl font-semibold mb-6 text-amber-800 border-b-2 border-amber-800 pb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {category.title}
              </motion.h3>
              
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div 
                    key={itemIndex}
                    className="flex justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div>
                      <h4 className="text-lg font-medium">{item.name}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    <span className="text-amber-800 font-semibold">{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-600 italic mb-4">
            Ask our staff about daily specials and seasonal offerings.
          </p>
          <a 
            href="#" 
            className="inline-block text-amber-800 font-medium border-b-2 border-amber-800 hover:text-amber-900"
          >
            Download Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;