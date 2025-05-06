import HeadlineSection from '@/components/Sections/HeadlineSection';
import LogoSection from '@/components/Sections/LogoSection';
import MainCardsSection from '@/components/Sections/MainCardsSection';

export default function Home() {
  return (
    <div className="w-full">
      <LogoSection />
      <HeadlineSection />
      <MainCardsSection />
    </div>
  );
}
