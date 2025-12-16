import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Users } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Network",
      description: "Verified adventures across 50+ countries and counting"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety First",
      description: "Every operator is vetted and certified for your peace of mind"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description: "Built by adventurers, for adventurers"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Adventure Triangle
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building the world's most trusted adventure marketplace, connecting passionate travelers 
            with certified local operators for unforgettable experiences across water, air, and land.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-emerald-500 mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-3xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Join Our Global Launch
              </h3>
              <p className="text-gray-700 mb-6">
                Be among the first to experience adventure booking reimagined. 
                Early users get lifetime benefits and special access.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                Get Early Access
              </button>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">26</div>
              <div className="text-gray-600">January 2026</div>
              <div className="text-sm text-gray-500 mt-2">Global Launch</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;