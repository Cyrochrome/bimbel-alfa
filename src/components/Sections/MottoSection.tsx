import SectionTemplate from './SectionTemplate';

export default function MottoSection() {
  return (
    <SectionTemplate backgroundSrcs={['/assets/img/bg7-bimbel-alfa.png']}>
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="bg-lilac w-3/4 px-6 py-12 rounded-2xl text-white text-sm">
          <p className="mb-4">
            Bimbel Alfa hadir untuk membantu anak-anak belajar dengan lebih semangat percaya diri
            dan menyenangkan Kami percaya bahwa setiap anak bisa berkembang optimal dengan
            pendekatan yang tepat dan pengajar yang peduli.
          </p>
          <h1 className="text-md">
            &quot;<span className="text-lightorange">TAK</span> PERLU{' '}
            <span className="text-lightorange">MAHAL</span> UNTUK MENJADI{' '}
            <span className="text-lightorange">PINTAR</span>&quot;
          </h1>
        </div>
      </div>
    </SectionTemplate>
  );
}
