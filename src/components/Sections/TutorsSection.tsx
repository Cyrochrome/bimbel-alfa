'use client';

import SectionTemplate from './SectionTemplate';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from 'next/image';

const tutors = [
  {
    name: 'Kak Tuti',
    quote: 'Perubahan tidak akan datang dari kaki yang diam.',
    image: '/assets/img/tutors/kak-tuti.jpg',
  },
  {
    name: 'Kak Zahra',
    quote: 'Lakukan segala sesuatu yang ingin kau lakukan, selama kesempatan itu ada.',
    image: '/assets/img/tutors/kak-zahra.jpg',
  },
  {
    name: 'Kak Nabila',
    quote: 'Selama masih ada yang namanya perjuangan, tidak akan ada yang sia-sia.',
    image: '/assets/img/tutors/kak-nabila.jpg',
  },
  {
    name: 'Kak Siska',
    quote:
      'Selalu bersikap positif, berpikir positif, dan jadilah positif dalam segala hal, karena tindakanmu bergantung pada apa yang kamu pikirkan. Berpikir positif!',
    image: '/assets/img/tutors/kak-siska.jpg',
  },
  {
    name: 'Kak Cahya',
    quote:
      'Kamu tidak harus menjadi hebat untuk memulai, tetapi kamu harus memulai untuk menjadi hebat.',
    image: '/assets/img/tutors/kak-cahya.jpg',
  },
  {
    name: 'Kak Gista',
    quote:
      'Let them talk about you. They have to talk bout you. Cuz when they talk about themselves, nobody listen.',
    image: '/assets/img/tutors/kak-gista.jpg',
  },
  {
    name: 'Kak Dhea',
    quote: 'Tuhan tidak melihat hasilnya, melainkan prosesnya.',
    image: '/assets/img/tutors/kak-dhea.jpg',
  },
  {
    name: 'Kak Raafid',
    quote: 'Jadikan pengalaman sebagai pelajaran bukan cobaan.',
    image: '/assets/img/tutors/kak-raafid.jpg',
  },
  {
    name: 'Kak Savira',
    quote: 'Never give up on what you really want to do.',
    image: '/assets/img/tutors/kak-savira.jpg',
  },
];

export default function TutorsSection() {
  return (
    <SectionTemplate
      backgroundSrcs={[
        '/assets/img/bg8-bimbel-alfa.png',
        '/assets/img/bg9-bimbel-alfa.png',
        '/assets/img/bg10-bimbel-alfa.png',
      ]}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center text-lilac px-4 py-8">
        <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center">
          Let&apos;s get to know our people!
        </h1>

        <div className="w-full max-w-xs sm:max-w-sm">
          <Swiper modules={[EffectCards]} effect="cards" grabCursor={true} className="w-full">
            {tutors.map((tutor, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden min-h-[420px]">
                  {/* Top image */}
                  <div className="relative w-full aspect-square">
                    <Image src={tutor.image} alt={tutor.name} fill className="object-cover" />
                  </div>

                  {/* Bottom content */}
                  <div className="flex flex-col justify-between px-4 py-3 w-full text-center text-sm flex-1">
                    <h2 className="font-bold text-lilac mb-1">{tutor.name}</h2>

                    <p className="italic text-xs text-gray-600 leading-snug transition-opacity duration-300 ease-in-out">
                      &quot;{tutor.quote}&quot;
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom-left callout */}
        <div className="absolute bottom-4 left-4 text-white text-xs sm:text-sm max-w-xs sm:max-w-sm">
          <p className="font-bold text-lightorange mb-1">LET&apos;S STUDY WITH US!!</p>
          <p className="italic">
            Sama kita kamu ga cuma akan belajar, tapi juga bermain, bercerita, dan bereksperimen.
          </p>
        </div>
      </div>
    </SectionTemplate>
  );
}
