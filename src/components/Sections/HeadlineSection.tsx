import SectionTemplate from './SectionTemplate';

export default function HeadlineSection() {
  return (
    <SectionTemplate backgroundSrc="/assets/img/bg2-bimbel-alfa.png">
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="w-full max-w-screen-md text-center text-lilac">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 leading-snug">
            Mulai dari{' '}
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">90RIBU/BULAN!</span>
            <br />
            Les Seru & Terjangkau di Bimbel Alfa
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            TK - SD - SMP - SMA · Lokasi Kalisari, Jakarta Timur
          </p>
        </div>
      </div>
    </SectionTemplate>
  );
}
