import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Share2, Camera, TrendingUp } from 'lucide-react';

const FeelTheAdventure = () => {
  const hashtag = "#FeelTheAdventure";
  
  const campaignStories = [
    {
      username: "@AdventureAlex",
      story: "Just completed my first skydive through Adventure Triangle! The verification process gave me so much confidence. #FeelTheAdventure",
      likes: "2.4K",
      platform: "Instagram"
    },
    {
      username: "@WildernessWanda",
      story: "Kayaking through glacial waters in Norway - booked everything seamlessly on one platform. Adventure Triangle made it happen! #FeelTheAdventure",
      likes: "1.8K",
      platform: "TikTok"
    },
    {
      username: "@MountainMike",
      story: "The Himalaya trek was life-changing. Knowing our guides were vetted and certified made all the difference. #FeelTheAdventure",
      likes: "3.2K",
      platform: "Facebook"
    }
  ];

  const campaignSteps = [
    {
      step: "1",
      title: "Share Your Adventure",
      description: "Post your adventure moments with #FeelTheAdventure"
    },
    {
      step: "2",
      title: "Tag @AdventureTriangle",
      description: "Make sure to tag us for a chance to be featured"
    },
    {
      step: "3",
      title: "Win Monthly Prizes",
      description: "Top posts win adventure gear and exclusive experiences"
    },
    {
      step: "4",
      title: "Join the Community",
      description: "Connect with fellow adventurers worldwide"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <TrendingUp className="w-4 h-4" />
            Trending Campaign
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            #FeelTheAdventure
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our global movement of adventurers sharing authentic moments and inspiring others to explore
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-emerald-500/20 rounded-lg">
                  <Camera className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold">How to Participate</h3>
              </div>

              <div className="space-y-6">
                {campaignSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-black/30 rounded-xl border border-gray-700">
                <h4 className="font-bold mb-3">Monthly Prize Pool: $10,000+</h4>
                <p className="text-gray-300 text-sm">
                  Including GoPro cameras, premium adventure gear, and all-expense-paid trips!
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-8">Community Stories</h3>
              
              <div className="space-y-6">
                {campaignStories.map((story, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-xl bg-gray-800/30 border border-gray-700"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-bold text-emerald-400">{story.username}</span>
                      <span className="text-sm text-gray-400">{story.platform}</span>
                    </div>
                    
                    <p className="text-gray-200 mb-4">{story.story}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors">
                          <Heart className="w-5 h-5" />
                          <span>{story.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                          <Share2 className="w-5 h-5" />
                          <span>Share</span>
                        </button>
                      </div>
                      <span className="text-emerald-400 font-semibold">{hashtag}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full">
                    {hashtag}
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                    #AdventureTriangle
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">
                    #LiveToExplore
                  </span>
                </div>
                <p className="text-sm text-gray-400">
                  Join <span className="font-bold text-emerald-400">24,891</span> adventurers sharing their stories
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 mx-auto transition-all duration-300 transform hover:scale-105">
            <Camera className="w-5 h-5" />
            Share Your Adventure
            <Share2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeelTheAdventure;