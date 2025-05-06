import Image from 'next/image';
import { ReactNode } from 'react';

interface SectionTemplateProps {
  backgroundSrc: string;
  children?: ReactNode;
}

export default function SectionTemplate({ backgroundSrc, children }: SectionTemplateProps) {
  return (
    <section className="relative aspect-video w-full">
      {/* Background image */}
      <Image src={backgroundSrc} alt="Background" fill objectFit="cover" priority />

      {/* Centered content */}
      {children}
    </section>
  );
}
