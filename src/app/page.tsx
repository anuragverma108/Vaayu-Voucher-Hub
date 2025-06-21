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
      <main className="min-h-screen w-full bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600 flex flex-col items-center justify-center py-10 px-2">
        <div className="max-w-3xl w-full flex flex-col items-center gap-10">
          <header className="w-full flex flex-col items-center">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl px-8 py-6 flex flex-col items-center mb-6 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow mb-2 tracking-tight">Loading...</h1>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-lg font-semibold text-white/80">Your Points</span>
                <span className="bg-gradient-to-r from-yellow-400 to-pink-400 text-white font-bold text-2xl px-4 py-1 rounded-full shadow-lg border border-white/20 ml-2">
                  ...
                </span>
              </div>
            </div>
          </header>
          <section className="w-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 tracking-tight drop-shadow">🔥 Hot Vouchers</h2>
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
    <main className="min-h-screen w-full bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600 flex flex-col items-center justify-center py-10 px-2" style={{ backgroundSize: '200% 200%', animation: 'animated-gradient 10s ease infinite' }}>
      <div className="max-w-3xl w-full flex flex-col items-center gap-10">
        <header className="w-full flex flex-col items-center">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl px-8 py-6 flex flex-col items-center mb-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow mb-2 tracking-tight">Hey, {name}!</h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-lg font-semibold text-white/80">Your Points</span>
              <span className="bg-gradient-to-r from-yellow-400 to-pink-400 text-white font-bold text-2xl px-4 py-1 rounded-full shadow-lg border border-white/20 ml-2 animate-bounce">
                {points}
              </span>
            </div>
          </div>
        </header>
        <section className="w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 tracking-tight drop-shadow">🔥 Hot Vouchers</h2>
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
