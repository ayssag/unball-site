import AboutSection from "./sections/AboutSection";
import AchievementsSection from "./sections/AchievementsSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import LeagueSection from "./sections/LeagueSection";
import PapersSection from "./sections/PapersSection";
import PartnersSection from "./sections/PartnersSection";
import RobocupSection from "./sections/RobocupSection";

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
  );
}

export default Home;
