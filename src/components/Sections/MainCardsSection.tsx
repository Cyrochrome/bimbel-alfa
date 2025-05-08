'use client';

import SectionTemplate from './SectionTemplate';
import Image from 'next/image';
import { ReactNode, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface Card {
  label: string;
  img: string;
  href?: string;
  modalContent?: ReactNode;
}

export default function MainCardsSection() {
  const [activeModal, setActiveModal] = useState<Card | null>(null);
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModal]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModal(null);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const cards: Card[] = [
    {
      label: 'DAFTAR SEKARANG!',
      img: '/assets/img/maincard1.png',
      modalContent: (
        <div className="flex flex-row justify-center gap-2 sm:gap-3 md:gap-4 overflow-hidden items-center">
          <a
            href="https://wa.me/6285947372386?text=Halo%21%20Saya%20Ingin%20bertanya%20mengenai%20paket%20pembelajaran%20yang%20tersedia%20di%20Bimbel%20Alfa%21"
            className="rounded-full py-2 px-4 bg-lilac text-white transform hover:scale-[1.05] transition-transform will-change-transform"
          >
            Pak Jerry
          </a>
          <a
            href="https://wa.me/6285963156614?text=Halo%21%20Saya%20Ingin%20bertanya%20mengenai%20paket%20pembelajaran%20yang%20tersedia%20di%20Bimbel%20Alfa%21"
            className="rounded-full py-2 px-4 bg-lilac text-white transform hover:scale-[1.05] transition-transform will-change-transform"
          >
            Kak Zahra
          </a>
        </div>
      ),
    },
    {
      label: 'CEK LOKASI',
      img: '/assets/img/maincard2.png',
      href: 'https://maps.app.goo.gl/HZTPYU15zRe1SPRT8',
    },
    {
      label: 'KENALAN YUK!',
      img: '/assets/img/maincard3.png',
      href: '/tentang-kami',
    },
  ];

  return (
    <SectionTemplate backgroundSrcs={['/assets/img/bg3-bimbel-alfa.png']}>
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
                  className="block max-w-[100px] min-w-[80px] sm:min-w-[100px] sm:max-w-[120px] transform hover:scale-[1.05] transition-transform will-change-transform"
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
      {activeModal &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-cream text-lilac p-6 rounded-lg max-w-sm w-full relative fade-in-up"
            >
              <h2 className="text-xl font-bold mb-4">{activeModal.label}</h2>
              <div>{activeModal.modalContent}</div>
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
              >
                &times;
              </button>
            </div>
          </div>,
          document.body
        )}
    </SectionTemplate>
  );
}
