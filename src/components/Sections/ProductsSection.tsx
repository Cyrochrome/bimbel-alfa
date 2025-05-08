import SectionTemplate from './SectionTemplate';

export default function ProductsSection() {
  return (
    <SectionTemplate
      backgroundSrcs={['/assets/img/bg4-bimbel-alfa.png', '/assets/img/bg5-bimbel-alfa.png']}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 py-8 text-lilac">
        <div className="flex flex-col gap-4 text-sm sm:text-base max-w-5xl w-full justify-center items-center">
          {/* CALISTUNG */}
          <div className="bg-cream rounded-2xl w-full max-w-md px-3 sm:px-4 transform hover:scale-[1.05] transition-transform will-change-transform">
            <h3 className="text-center font-semibold text-lg mb-1 leading-tight">CALISTUNG</h3>
            <ul className="leading-tight">
              <li>1x/minggu - 90RB/bulan</li>
              <li>2x/minggu - 165RB/bulan</li>
              <li>3x/minggu - 230RB/bulan</li>
            </ul>
          </div>

          {/* Matematika */}
          <div className="bg-cream rounded-2xl w-full max-w-md px-3 sm:px-4 transform hover:scale-[1.05] transition-transform will-change-transform">
            <h3 className="text-center font-semibold text-lg mb-1 leading-tight">MATEMATIKA</h3>
            <ul className="leading-tight">
              <li>SD - 1x/minggu - 99RB/bulan</li>
              <li>SMP - 1x/minggu - 240RB/bulan</li>
              <li>SMA - 1x/minggu - 260RB/bulan</li>
            </ul>
          </div>

          {/* Bahasa Inggris */}
          <div className="bg-cream rounded-2xl w-full max-w-md px-3 sm:px-4 transform hover:scale-[1.05] transition-transform will-change-transform">
            <h3 className="text-center font-semibold text-lg mb-1 leading-tight">BAHASA INGGRIS</h3>
            <ul className="leading-tight">
              <li>SD - 1x/minggu - 99RB/bulan</li>
              <li>SMP - 1x/minggu - 130RB/bulan</li>
              <li>SMA - 1x/minggu - 150RB/bulan</li>
            </ul>
          </div>

          {/* Matematika & Bahasa Inggris */}
          <div className="bg-cream rounded-2xl w-full max-w-md px-3 sm:px-4 transform hover:scale-[1.05] transition-transform will-change-transform">
            <h3 className="text-center font-semibold text-lg mb-1 leading-tight">
              MATEMATIKA & BAHASA INGGRIS
            </h3>
            <ul className="leading-tight">
              <li>SD - 2x/minggu - 175RB/bulan</li>
              <li>SMP - 2x/minggu - 240RB/bulan</li>
              <li>SMA - 2x/minggu - 260RB/bulan</li>
            </ul>
          </div>

          {/* Pelajaran Pokok */}
          <div className="bg-cream rounded-2xl w-full max-w-md px-3 sm:px-4 transform hover:scale-[1.05] transition-transform will-change-transform">
            <h3 className="text-center font-semibold text-lg mb-1 leading-tight">
              PELAJARAN POKOK
            </h3>
            <ul className="leading-tight">
              <li>SD - 3x/minggu - 240RB/bulan</li>
              <li>SMP - 3x/minggu - 260RB/bulan</li>
            </ul>
          </div>

          {/* Privat Info */}
          <div className="bg-cream rounded-2xl max-w-md text-center mt-2 px-3 sm:px-4 transform hover:scale-[1.05] transition-transform will-change-transform">
            <p className="font-medium italic leading-tight text-cemter">
              Kalo kamu mau privat juga bisa loh!
            </p>
          </div>
        </div>
      </div>
    </SectionTemplate>
  );
}
