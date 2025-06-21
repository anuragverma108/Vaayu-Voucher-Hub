'use client';
import VoucherCard from "./components/VoucherCard";
import { vouchers } from "./vouchers";
import { useUserStore, useHydration } from "./store";

export default function Home() {
  const { points } = useUserStore();
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
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl px-8 py-6 flex items-center justify-center mb-6 animate-fade-in">
              <span className="text-xl font-light text-slate-300 mr-4">Your Points</span>
              <span className="text-4xl font-normal text-sky-400">...</span>
            </div>
          </header>
          <section className="w-full">
            <h2 className="text-2xl sm:text-3xl font-normal text-white text-center mb-6 tracking-tight drop-shadow">✨ Featured Vouchers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {vouchers.map((voucher, index) => (
                <div key={voucher.code} className="animate-card-fade-in" style={{ animationDelay: `${300 + index * 100}ms`}}>
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
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl px-8 py-6 flex items-center justify-center mb-6 animate-fade-in">
            <span className="text-xl font-light text-slate-300 mr-4">Your Points</span>
            <span className="text-4xl font-normal text-sky-400">{points}</span>
          </div>
        </header>
        <section className="w-full">
          <h2 className="text-2xl sm:text-3xl font-normal text-white text-center mb-6 tracking-tight drop-shadow">✨ Featured Vouchers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {vouchers.map((voucher, index) => (
              <div key={voucher.code} className="animate-card-fade-in" style={{ animationDelay: `${300 + index * 100}ms`}}>
                <VoucherCard voucher={voucher} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
