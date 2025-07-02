import SkillsSection from '../../entities/SkillsSection';
import ContactSection from '../../entities/ContactSection';
import QuoteSection from '../../entities/QuoteSection';
import BlogsSection from '../../entities/BlogsSection';
import HeroSection from '../../entities/HeroSection';

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <SkillsSection />
      <QuoteSection />
      <BlogsSection />
      <ContactSection />
    </div>
  );
}
