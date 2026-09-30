import HeroSection from './sections/HeroSection';
import RobocupSection from './sections/RobocupSection';
import AboutSection from './sections/AboutSection';
import LeagueSection from './sections/LeagueSection';
import AchievementsSection from './sections/AchievementsSection';
import PapersSection from './sections/PapersSection';
import PartnersSection from './sections/PartnersSection';
import ContactSection from './sections/ContactSection';

function Home() {
  return (
    <> 
      <HeroSection />
      <RobocupSection />
      <AboutSection />
      <LeagueSection />
      <AchievementsSection />
      <PapersSection />
      <PartnersSection />
      <ContactSection />
    </>
  )
}

export default Home;