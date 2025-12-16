import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

const LaunchEvent = () => {
  const [registration, setRegistration] = useState({
    name: '',
    email: '',
    role: '',
    guests: '1'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingRegistrations = JSON.parse(localStorage.getItem('eventRegistrations') || '[]');
    existingRegistrations.push({ ...registration, registeredAt: new Date().toISOString() });
    localStorage.setItem('eventRegistrations', JSON.stringify(existingRegistrations));
    
    alert('Registration successful! Check your email for confirmation.');
    setRegistration({ name: '', email: '', role: '', guests: '1' });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-emerald-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Global Launch Event
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join us in Toronto for an exclusive celebration of adventure's future
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-8">Event Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Date & Time</p>
                    <p className="text-lg font-semibold">January 26, 2026 • 6:00 PM EST</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-500/20 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Location</p>
                    <p className="text-lg font-semibold">Toronto, Canada</p>
                    <p className="text-blue-100">Exact venue revealed after registration</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Attendees</p>
                    <p className="text-lg font-semibold">Industry Leaders • Adventurers • Press</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-yellow-500/20 rounded-lg">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Highlights</p>
                    <p className="text-lg font-semibold">Live Demos • Networking • Exclusive Previews</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
                <h4 className="font-bold mb-2">Can't attend in person?</h4>
                <p className="text-blue-100 mb-4">
                  Join our virtual launch event streamed live worldwide.
                </p>
                <button className="text-emerald-300 hover:text-emerald-200 font-semibold">
                  Register for Virtual Access →
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Register Now</h3>
              <p className="text-blue-100 mb-8">
                Limited seats available. Registration closes January 15, 2026.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={registration.name}
                    onChange={(e) => setRegistration({...registration, name: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={registration.email}
                    onChange={(e) => setRegistration({...registration, email: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Your Role
                  </label>
                  <select
                    value={registration.role}
                    onChange={(e) => setRegistration({...registration, role: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">Select your role</option>
                    <option value="adventurer">Adventure Enthusiast</option>
                    <option value="operator">Adventure Operator</option>
                    <option value="investor">Investor</option>
                    <option value="press">Press/Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Number of Guests
                  </label>
                  <select
                    value={registration.guests}
                    onChange={(e) => setRegistration({...registration, guests: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    {[1,2,3,4,5].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-400 to-blue-400 hover:from-emerald-500 hover:to-blue-500 text-gray-900 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Secure Your Spot
                </button>

                <p className="text-sm text-blue-200 text-center">
                  By registering, you agree to our Terms and Privacy Policy
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LaunchEvent;
