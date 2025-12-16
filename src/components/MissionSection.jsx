import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Wind, Mountain } from 'lucide-react';

const MissionSection = () => {
  const adventures = [
    {
      icon: <Waves className="w-12 h-12" />,
      title: "Water Adventures",
      color: "from-blue-500 to-cyan-400",
      examples: ["Scuba Diving", "White Water Rafting", "Kayaking", "Surfing"],
      description: "Dive into crystal clear waters and ride the waves of adventure"
    },
    {
      icon: <Wind className="w-12 h-12" />,
      title: "Air Adventures",
      color: "from-sky-500 to-indigo-400",
      examples: ["Skydiving", "Paragliding", "Hot Air Balloon", "Bungee Jumping"],
      description: "Soar above the clouds and feel the ultimate freedom"
    },
    {
      icon: <Mountain className="w-12 h-12" />,
      title: "Land Adventures",
      color: "from-emerald-500 to-green-400",
      examples: ["Mountain Climbing", "Safari", "Hiking", "Rock Climbing"],
      description: "Conquer peaks and explore earth's magnificent landscapes"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Mission: Adventure in Every Element
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're creating a world where every adventure is accessible, safe, and unforgettable
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {adventures.map((adventure, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full transform transition-transform duration-300 group-hover:shadow-2xl">
                <div className={`h-2 bg-gradient-to-r ${adventure.color}`}></div>
                <div className="p-8">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${adventure.color} text-white mb-6`}>
                    {adventure.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {adventure.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {adventure.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Popular Adventures:</h4>
                    <div className="flex flex-wrap gap-2">
                      {adventure.examples.map((example, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className={`text-sm font-semibold bg-gradient-to-r ${adventure.color} text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity`}>
                    Explore {adventure.title}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            One Platform, Infinite Adventures
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            From the depths of the ocean to the peaks of mountains and the freedom of the skies - 
            we bring every adventure to your fingertips.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="text-center">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-blue-100">Adventure Types</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-blue-100">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">100%</div>
              <div className="text-blue-100">Verified Safety</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;