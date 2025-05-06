import Image from 'next/image';
import { ReactNode } from 'react';
interface OverlayImage {
  src: string;
  alt?: string;
  className?: string;
}

interface SectionTemplateProps {
  backgroundSrc: string;
  children?: ReactNode;
  overlayImages?: OverlayImage[];
}

export default function SectionTemplate({
  backgroundSrc,
  children,
  overlayImages = [],
}: SectionTemplateProps) {
  return (
    <section className="relative aspect-video w-full overflow-hidden">
      {/* Background image */}
      <Image src={backgroundSrc} alt="Background" fill className="object-cover" priority />

      {/* Overlay images */}
      {overlayImages.map((img, idx) => (
        <Image
          key={idx}
          src={img.src}
          alt={img.alt || `Overlay ${idx}`}
          fill={false}
          width={100}
          height={100}
          className={`absolute pointer-events-none z-20 ${img.className || ''}`}
        />
      ))}

      {/* Centered content */}
      <div className="absolute inset-0">{children}</div>
    </section>
  );
}
