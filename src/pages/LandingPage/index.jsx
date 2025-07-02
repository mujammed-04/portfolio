import SkillsSection from '../../entities/SkillsSection';
import ContactSection from '../../entities/ContactSection';
import QuoteSection from '../../entities/QuoteSection';
import BlogsSection from '../../entities/BlogsSection';

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <SkillsSection />
      <QuoteSection />
      <BlogsSection />
      <ContactSection />
    </div>
  );
}
