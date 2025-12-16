import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Gift, Zap, Users } from 'lucide-react';

const BetaRegistration = () => {
  const [betaForm, setBetaForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    favoriteAdventure: '',
    referralCode: ''
  });

  const benefits = [
    { icon: <Star />, title: "Early Access", desc: "Be first to book exclusive adventures" },
    { icon: <Gift />, title: "Lifetime Perks", desc: "Special discounts forever" },
    { icon: <Zap />, title: "Influence Features", desc: "Help shape the platform" },
    { icon: <Users />, title: "Community Access", desc: "Join our founders circle" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingBetaUsers = JSON.parse(localStorage.getItem('betaUsers') || '[]');
    existingBetaUsers.push({ ...betaForm, registeredAt: new Date().toISOString(), waitlistNumber: existingBetaUsers.length + 1 });
    localStorage.setItem('betaUsers', JSON.stringify(existingBetaUsers));
    
    alert(`You're #${existingBetaUsers.length} on the waitlist! Check your email for confirmation.`);
    setBetaForm({ firstName: '', lastName: '', email: '', favoriteAdventure: '', referralCode: '' });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            Exclusive Access
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join the Beta Waitlist
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be among the first 1,000 adventurers to experience the future of adventure booking
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-emerald-500 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Secure Your Spot
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={betaForm.firstName}
                    onChange={(e) => setBetaForm({...betaForm, firstName: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={betaForm.lastName}
                    onChange={(e) => setBetaForm({...betaForm, lastName: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={betaForm.email}
                  onChange={(e) => setBetaForm({...betaForm, email: e.target.value})}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="adventurer@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Favorite Adventure Type
                </label>
                <select
                  value={betaForm.favoriteAdventure}
                  onChange={(e) => setBetaForm({...betaForm, favoriteAdventure: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="">Choose your adventure</option>
                  <option value="water">Water (Scuba, Rafting, Kayaking)</option>
                  <option value="air">Air (Skydiving, Paragliding, Hot Air)</option>
                  <option value="land">Land (Hiking, Climbing, Safari)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Referral Code (Optional)
                </label>
                <input
                  type="text"
                  value={betaForm.referralCode}
                  onChange={(e) => setBetaForm({...betaForm, referralCode: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="FRIEND25"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
              >
                Join Waitlist
              </button>

              <p className="text-center text-sm text-gray-500">
                Already <span className="font-bold">12,543</span> adventurers waiting
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BetaRegistration;