import SectionTemplate from './SectionTemplate';
import Image from 'next/image';

export default function LogoSection() {
  return (
    <SectionTemplate backgroundSrcs={['/assets/img/bg1-bimbel-alfa.png']}>
      <div className="absolute inset-0 flex justify-center">
        <div className="mt-5 w-1/2 max-w-[600px]">
          <Image
            className="aspect-[1.4/1]"
            src="/assets/img/logo1-bimbel-alfa.png"
            alt="Bimbel Alfa Logo"
            width={640}
            height={452}
          />
        </div>
      </div>
    </SectionTemplate>
  );
}
