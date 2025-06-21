"use client";
import React, { useState } from "react";
import { Voucher } from "../vouchers";
import { useUserStore, useHydration } from "../store";

interface VoucherCardProps {
  voucher: Voucher;
}

const VoucherCard: React.FC<VoucherCardProps> = ({ voucher }) => {
  const { points, deductPoints } = useUserStore();
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const isHydrated = useHydration();

  const handleRedeem = () => {
    if (points >= voucher.cost) {
      deductPoints(voucher.cost);
      setShowModal(true);
      setError("");
    } else {
      setError("Not enough points to redeem this voucher.");
    }
  };

  // Show skeleton while hydrating
  if (!isHydrated) {
    return (
      <div className="relative bg-slate-800/80 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-xl p-6 flex flex-col items-center transition-all duration-200 group">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-sky-500 rounded-full p-2 shadow-lg">
          <svg width="36" height="36" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35C11.96 2.54 11.05 2 10 2c-1.66 0-3 1.34-3 3 0 .35.07.69.18 1H5c-1.11 0-1.99.89-1.99 2L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM10 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm10 15H4V8h16v11z"/>
          </svg>
        </div>
        <h3 className="text-xl font-normal mb-2 text-center text-white mt-6">{voucher.title}</h3>
        <p className="mb-4 text-slate-300 text-lg">Cost: <span className="font-normal text-sky-400">{voucher.cost} pts</span></p>
        <button
          className="bg-slate-700 text-white/50 font-normal px-6 py-2 rounded-full shadow-lg text-lg mb-2 mt-2 border-2 border-slate-600"
          disabled
        >
          <hr/>
          Loading...
        </button>
      </div>
    );
  }

  return (
    <div className="relative bg-slate-800/80 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-xl p-6 flex flex-col items-center transition-all duration-300 group hover:border-sky-500 hover:shadow-sky-500/20 hover:-translate-y-2 hover:z-10">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-sky-500 rounded-full p-2 shadow-lg">
        <svg width="36" height="36" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35C11.96 2.54 11.05 2 10 2c-1.66 0-3 1.34-3 3 0 .35.07.69.18 1H5c-1.11 0-1.99.89-1.99 2L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM10 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm10 15H4V8h16v11z"/>
          </svg>
      </div>
      <h3 className="text-xl font-normal mb-2 text-center text-white mt-6">{voucher.title}</h3>
      <p className="mb-4 text-slate-300 text-lg">Cost: <span className="font-normal text-sky-400">{voucher.cost} pts</span></p>
      <button
        className="bg-sky-600 text-white font-normal px-6 py-2 rounded-full shadow-lg hover:bg-sky-700 transition-all text-lg mb-2 mt-2 border-2 border-sky-500"
        onClick={handleRedeem}
      >
        Redeem
      </button>
      {error && <p className="text-red-400 text-sm mt-1 font-normal">{error}</p>}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 animate-fade-in">
          <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl flex flex-col items-center border-2 border-sky-500 animate-pop-in max-w-sm mx-auto">
            <h4 className="text-2xl font-normal mb-2 text-sky-400">Voucher Redeemed!</h4>
            <p className="mb-4 text-lg text-slate-300">Your code:</p>
            <div className="bg-slate-700 px-6 py-3 rounded font-mono text-xl text-sky-300 mb-6 border border-slate-600 shadow-inner w-full text-center">
              {voucher.code}
            </div>
            <button
              className="bg-sky-600 text-white px-6 py-2 rounded-full font-normal shadow hover:bg-sky-700 transition w-full"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoucherCard;

// Animations (add to globals.css):
// .animate-fade-in { animation: fadeIn 0.5s; }
// .animate-pop-in { animation: popIn 0.3s; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes popIn { 0% { transform: scale(0.8); opacity: 0; } 100% { transform: scale(1); opacity: 1; } } 