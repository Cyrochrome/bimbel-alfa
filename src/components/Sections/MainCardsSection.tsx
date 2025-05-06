import SectionTemplate from './SectionTemplate';
import Image from 'next/image';

export default function MainCardsSection() {
  return (
    <SectionTemplate backgroundSrc="/assets/img/bg3-bimbel-alfa.png">
      <div className="absolute inset-0 flex justify-center">
        <div className="w-3/4 max-w-[600px] text-center text-lilac">
          <h1 className="text-3xl mb-4">Yuk di klik untuk tahu kita lebih lanjut!!</h1>
          <div className="flex flex-row gap-8">
            {[
              { label: 'DAFTAR SEKARANG!', img: '/assets/img/maincard1-bimbel-alfa.png' },
              { label: 'CEK LOKASI', img: '/assets/img/maincard1-bimbel-alfa.png' },
              { label: 'KENALAN YUK!', img: '/assets/img/maincard1-bimbel-alfa.png' },
            ].map((card, idx) => (
              <div key={idx} className="relative w-64">
                <Image
                  src={card.img}
                  alt={card.label}
                  width={256}
                  height={320}
                  className="w-full h-auto"
                />
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-lilac text-white font-bold py-2 px-4 rounded-full text-xs shadow-md hover:bg-purple-700 transition">
                  {card.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionTemplate>
  );
}
