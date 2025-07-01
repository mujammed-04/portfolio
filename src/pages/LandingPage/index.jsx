import SkillsSection from '../../entities/SkillsSection';
import ContactSection from '../../entities/ContactSection';

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
