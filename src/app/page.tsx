'use client';
import VoucherCard from "./components/VoucherCard";
import { vouchers } from "./vouchers";
import { useUserStore, useHydration } from "./store";

export default function Home() {
  const { name, points } = useUserStore();
  const isHydrated = useHydration();

  // Show loading state or skeleton while hydrating
  if (!isHydrated) {
    return (
      <main className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 flex flex-col items-center justify-center py-10 px-2" style={{ backgroundSize: '200% 200%', animation: 'animated-gradient 10s ease infinite' }}>
        <div className="max-w-3xl w-full flex flex-col items-center gap-10">
          <header className="w-full flex flex-col items-center">
            <h1 className="text-5xl sm:text-6xl font-thin text-white tracking-wider mb-4">
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text">Voucher</span> Hub
            </h1>
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl px-8 py-6 flex flex-col items-center mb-6 animate-fade-in">
              <div className="flex items-center gap-2 mt-2">
                <span className="text-lg font-light text-slate-300">Your Points</span>
                <span className="bg-sky-500 text-white font-normal text-2xl px-4 py-1 rounded-full shadow-lg border border-sky-400 ml-2">
                  ...
                </span>
              </div>
            </div>
          </header>
          <section className="w-full">
            <h2 className="text-2xl sm:text-3xl font-normal text-white text-center mb-6 tracking-tight drop-shadow">✨ Featured Vouchers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {vouchers.map((voucher) => (
                <div className="transition-transform duration-200 hover:scale-105 hover:z-10" key={voucher.code}>
                  <VoucherCard voucher={voucher} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 flex flex-col items-center justify-center py-10 px-2" style={{ backgroundSize: '200% 200%', animation: 'animated-gradient 10s ease infinite' }}>
      <div className="max-w-3xl w-full flex flex-col items-center gap-10">
        <header className="w-full flex flex-col items-center">
          <h1 className="text-5xl sm:text-6xl font-thin text-white tracking-wider mb-4">
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text">Voucher</span> Hub
          </h1>
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl px-8 py-6 flex flex-col items-center mb-6 animate-fade-in">
            <div className="flex items-center gap-2 mt-2">
              <span className="text-lg font-light text-slate-300">Your Points</span>
              <span className="bg-sky-500 text-white font-normal text-2xl px-4 py-1 rounded-full shadow-lg border border-sky-400 ml-2">
                {points}
              </span>
            </div>
          </div>
        </header>
        <section className="w-full">
          <h2 className="text-2xl sm:text-3xl font-normal text-white text-center mb-6 tracking-tight drop-shadow">✨ Featured Vouchers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {vouchers.map((voucher) => (
              <div className="transition-transform duration-200 hover:scale-105 hover:z-10" key={voucher.code}>
                <VoucherCard voucher={voucher} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
