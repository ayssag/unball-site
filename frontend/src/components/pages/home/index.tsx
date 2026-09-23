import HeroSection from './sections/HeroSection';
import RobocupSection from './sections/RobocupSection';
import AboutSection from './sections/AboutSection';
import LeagueSection from './sections/LeagueSection';
import AchievementsSection from './sections/AchievementsSection';
import PapersSection from './sections/PapersSection';

function Home() {
  return (
    <> 
      <HeroSection />
      <RobocupSection />
      <AboutSection />
      <LeagueSection />
      <AchievementsSection />
      <PapersSection />
    </>
  )
}

export default Home;