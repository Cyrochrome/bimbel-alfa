import SectionTemplate from './SectionTemplate';
import Image from 'next/image';

export default function AboutUsHeroSection() {
  return (
    <SectionTemplate backgroundSrcs={['/assets/img/bg6-bimbel-alfa.png']}>
      <div className="absolute inset-0 flex justify-center">
        <div className="mt-5 w-3/4 max-w-[500px]">
          <Image
            className="aspect-[1.66/1]"
            src="/assets/img/hero1-bimbel-alfa.png"
            alt="Bimbel Alfa Logo"
            width={1498}
            height={903}
          />
        </div>
      </div>
    </SectionTemplate>
  );
}
