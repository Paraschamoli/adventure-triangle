import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MessageCircle } from 'lucide-react';

const SocialMedia = () => {
  const platforms = [
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      handle: "@AdventureTriangle",
      followers: "45.2K",
      color: "from-purple-600 to-pink-500",
      content: "Visual adventures & stories"
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      name: "Facebook",
      handle: "AdventureTriangle",
      followers: "38.7K",
      color: "from-blue-600 to-blue-400",
      content: "Community & discussions"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      handle: "Adventure Triangle",
      followers: "12.4K",
      color: "from-blue-700 to-blue-500",
      content: "Industry insights & partnerships"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "Twitter",
      handle: "@AdvTriangle",
      followers: "29.1K",
      color: "from-sky-500 to-blue-400",
      content: "Updates & quick adventures"
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      name: "YouTube",
      handle: "Adventure Triangle",
      followers: "18.3K",
      color: "from-red-600 to-red-400",
      content: "Adventure videos & tutorials"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      name: "TikTok",
      handle: "@AdventureTriangle",
      followers: "67.8K",
      color: "from-gray-900 to-gray-700",
      content: "Short adventure reels"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our Adventure Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow us for daily adventure inspiration, exclusive content, and community stories
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {platforms.map((platform, index) => (
            <motion.a
              key={index}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="block"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow h-full">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${platform.color} text-white mb-4`}>
                  {platform.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {platform.name}
                </h3>
                
                <p className="text-gray-600 mb-4">{platform.content}</p>
                
                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-700 font-semibold">{platform.handle}</span>
                  <span className="text-sm text-gray-500">{platform.followers} followers</span>
                </div>
                
                <div className="mt-4">
                  <button className={`w-full py-2 rounded-lg bg-gradient-to-r ${platform.color} text-white font-semibold hover:opacity-90 transition-opacity`}>
                    Follow on {platform.name}
                  </button>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Never Miss an Adventure Update
          </h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly adventure inspiration, exclusive deals, 
            and platform updates
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-blue-100 mt-3">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMedia;