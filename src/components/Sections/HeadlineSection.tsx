import SectionTemplate from './SectionTemplate';

export default function HeadlineSection() {
  return (
    <SectionTemplate backgroundSrc="/assets/img/bg2-bimbel-alfa.png">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3/4 max-w-[600px] text-center text-lilac">
          <h1 className="text-2xl mb-4">
            Mulai dari <span className="text-3xl">90RIBU/BULAN!</span>
            <br />
            Les Seru & Terjangkau di Bimbel Alfa
          </h1>
          <p className="text-xl">TK - SD - SMP - SMA . Lokasi Kalisari, Jakarta Timur</p>
        </div>
      </div>
    </SectionTemplate>
  );
}
