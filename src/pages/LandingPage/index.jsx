import SkillsSection from '../../entities/SkillsSection';
import ContactSection from '../../entities/ContactSection';
import QuoteSection from '../../entities/QuoteSection';

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <SkillsSection />
      <QuoteSection />

      <ContactSection />
    </div>
  );
}
