import Image from 'next/image';
import { ReactNode } from 'react';

interface OverlayImage {
  src: string;
  alt?: string;
  className?: string;
}

interface StackedSectionTemplateProps {
  backgroundSrcs: string[]; // 1 or more images
  children?: ReactNode;
  overlayImages?: OverlayImage[];
}

export default function StackedSectionTemplate({
  backgroundSrcs,
  children,
  overlayImages = [],
}: StackedSectionTemplateProps) {
  const stackCount = backgroundSrcs.length;
  const totalAspectRatio = 9 * stackCount; // 16:9 per image, vertically stacked

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: `16 / ${totalAspectRatio}` }}
    >
      {/* Stacked background images */}
      <div className="absolute inset-0 flex flex-col">
        {backgroundSrcs.map((src, i) => (
          <div key={i} className="relative w-full flex-1">
            <Image src={src} alt={`Background ${i + 1}`} fill className="object-cover" priority />
          </div>
        ))}
      </div>
      {overlayImages.map((img, idx) => (
        <Image
          key={idx}
          src={img.src}
          alt={img.alt || `Overlay ${idx}`}
          width={100}
          height={100}
          className={`absolute pointer-events-none z-20 ${img.className || ''}`}
        />
      ))}

      <div className="relative z-10 w-full h-full">{children}</div>
    </section>
  );
}
