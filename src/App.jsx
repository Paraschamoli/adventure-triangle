import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PartnerOnboarding from './components/PartnerOnboarding';
import LaunchEvent from './components/LaunchEvent';
import BetaRegistration from './components/BetaRegistration';
import MissionSection from './components/MissionSection';
import FeelTheAdventure from './components/FeelTheAdventure';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <FeelTheAdventure />
      <BetaRegistration />
      <PartnerOnboarding />
      <LaunchEvent />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;