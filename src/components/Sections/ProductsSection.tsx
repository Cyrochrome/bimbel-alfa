import SectionTemplate from './SectionTemplate';

export default function ProductsSection() {
  return (
    <SectionTemplate
      backgroundSrcs={['/assets/img/bg4-bimbel-alfa.png', '/assets/img/bg5-bimbel-alfa.png']}
    >
      <div className="relative w-full h-full flex flex-col justify-center items-center px-2 sm:px-4 py-4 text-lilac z-10">
        <div className="grid grid-cols-4 gap-2 text-xs sm:text-sm max-w-5xl w-full items-center mb-5">
          {[
            {
              title: 'CALISTUNG',
              items: [
                '1x/minggu - 90RB/bulan',
                '2x/minggu - 165RB/bulan',
                '3x/minggu - 230RB/bulan',
              ],
              className: 'col-span-2',
            },
            {
              title: 'MATEMATIKA',
              items: [
                'SD - 1x/minggu - 99RB/bulan',
                'SMP - 1x/minggu - 1300RB/bulan',
                'SMA - 1x/minggu - 150RB/bulan',
              ],
              className: 'col-span-2',
            },
            {
              title: 'BAHASA INGGRIS',
              items: [
                'SD - 1x/minggu - 99RB/bulan',
                'SMP - 1x/minggu - 130RB/bulan',
                'SMA - 1x/minggu - 150RB/bulan',
              ],
              className: 'col-span-2',
            },
            {
              title: 'MATEMATIKA & BAHASA INGGRIS',
              items: [
                'SD - 2x/minggu - 175RB/bulan',
                'SMP - 2x/minggu - 240RB/bulan',
                'SMA - 2x/minggu - 260RB/bulan',
              ],
              className: 'col-span-2',
            },
            {
              title: 'PELAJARAN POKOK',
              items: ['SD - 3x/minggu - 240RB/bulan', 'SMP - 3x/minggu - 260RB/bulan'],
              className: 'col-span-2 col-start-2',
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className={`bg-cream rounded-xl min-h-[100px] sm:min-h-[130px] w-full px-2 py-2 sm:px-3 sm:py-3 leading-tight transform hover:scale-[1.02] transition-transform ${section.className ? section.className : ''}`}
            >
              <h3 className="text-center font-semibold text-sm sm:text-base mb-1">
                {section.title}
              </h3>
              <ul className="space-y-0.5 text-[11px] sm:text-xs">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bg-cream rounded-xl w-3/4 max-w-sm px-2 py-2 text-center mt-1">
          <p className="italic font-medium text-[11px] sm:text-xs leading-tight">
            Kalo kamu mau privat juga bisa loh!
          </p>
        </div>
      </div>
    </SectionTemplate>
  );
}
