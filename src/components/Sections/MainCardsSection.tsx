'use client';

import SectionTemplate from './SectionTemplate';
import Image from 'next/image';
import { useState } from 'react';

interface Card {
  label: string;
  img: string;
  href?: string;
  modalContent?: string;
}

export default function MainCardsSection() {
  const [activeModal, setActiveModal] = useState<Card | null>(null);

  const cards: Card[] = [
    {
      label: 'DAFTAR SEKARANG!',
      img: '/assets/img/maincard1.png',
      modalContent: 'Form pendaftaran langsung bisa diisi di sini.',
    },
    {
      label: 'CEK LOKASI',
      img: '/assets/img/maincard2.png',
      href: 'https://maps.google.com/?q=Bimbel+Alfa+Kalisari',
    },
    {
      label: 'KENALAN YUK!',
      img: '/assets/img/maincard3.png',
      href: '/tentang-kami',
    },
  ];

  return (
    <SectionTemplate backgroundSrc="/assets/img/bg3-bimbel-alfa.png">
      <div className="absolute inset-0 flex justify-center items-center px-4">
        <div className="w-full max-w-screen-lg text-center text-lilac">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 font-semibold">
            Yuk di klik untuk tahu kita lebih lanjut!!
          </h1>
          <div className="flex flex-row justify-center gap-2 sm:gap-3 md:gap-4 overflow-hidden items-center">
            {cards.map((card, idx) => {
              const Wrapper = card.href ? 'a' : 'button';
              const props = card.href
                ? {
                    href: card.href,
                    target: card.href.startsWith('http') ? '_blank' : '_self',
                    rel: 'noopener noreferrer',
                  }
                : { onClick: () => setActiveModal(card) };

              return (
                <Wrapper
                  key={idx}
                  {...props}
                  className="block min-w-[90px] sm:min-w-[100px] transform hover:scale-[1.05] transition-transform will-change-transform"
                  style={{ maxWidth: '120px' }}
                >
                  <Image
                    src={card.img}
                    alt={card.label}
                    width={120}
                    height={160}
                    className="w-full h-auto max-h-[140px] rounded-xl object-contain"
                  />
                </Wrapper>
              );
            })}
          </div>
        </div>
      </div>

      {/* Simple Modal */}
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg max-w-sm w-full relative">
            <h2 className="text-xl font-bold mb-4">{activeModal.label}</h2>
            <div>{activeModal.modalContent}</div>
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </SectionTemplate>
  );
}
