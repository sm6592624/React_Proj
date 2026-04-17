import HeroSection from '../components/HeroSection';
import ProcessSteps from '../components/ProcessSteps';
import Stats from '../components/Stats';
import MissionStatement from '../components/MissionStatement';
import SustainabilitySection from '../components/SustainabilitySection';
import IntroductionSection from '../components/IntroductionSection';
import UrbanGrowthSection from '../components/UrbanGrowthSection';
import Footer from '../components/Footer';

const Page1 = () => {
  return (
    <div className="page">
      <HeroSection />
      <ProcessSteps />
      <Stats />
      <MissionStatement />
      <SustainabilitySection />
      <IntroductionSection />
      <UrbanGrowthSection />
      <Footer />
    </div>
  );
};

export default Page1;
