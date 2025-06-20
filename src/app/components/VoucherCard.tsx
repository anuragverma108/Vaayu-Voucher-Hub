"use client";
import React, { useState } from "react";
import { Voucher } from "../vouchers";
import { useUserStore } from "../store";

interface VoucherCardProps {
  voucher: Voucher;
}

const VoucherCard: React.FC<VoucherCardProps> = ({ voucher }) => {
  const { points, deductPoints } = useUserStore();
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  const handleRedeem = () => {
    if (points >= voucher.cost) {
      deductPoints(voucher.cost);
      setShowModal(true);
      setError("");
    } else {
      setError("Not enough points to redeem this voucher.");
    }
  };

  return (
    <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-6 flex flex-col items-center transition-all duration-200 hover:border-pink-400 hover:shadow-pink-400/40 group">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-tr from-yellow-400 via-pink-400 to-purple-500 rounded-full p-2 shadow-lg animate-fade-in">
        <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M17.5 2a2.5 2.5 0 0 1 2.45 2.98l.01.01a2.5 2.5 0 0 1-.73 4.9l-.01.01a2.5 2.5 0 0 1-4.9.73l-.01-.01A2.5 2.5 0 0 1 7.5 8.5l-.01-.01A2.5 2.5 0 0 1 2 6a2.5 2.5 0 0 1 2.98-2.45l.01-.01A2.5 2.5 0 0 1 10 2.5l.01.01A2.5 2.5 0 0 1 17.5 2Z"/></svg>
      </div>
      <h3 className="text-xl font-extrabold mb-2 text-center text-white drop-shadow mt-6">{voucher.title}</h3>
      <p className="mb-4 text-pink-200 text-lg font-semibold">Cost: <span className="font-bold text-yellow-300">{voucher.cost} pts</span></p>
      <button
        className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold px-6 py-2 rounded-full shadow-lg hover:from-yellow-400 hover:to-pink-500 hover:scale-105 transition-all text-lg mb-2 mt-2 border-2 border-white/20"
        onClick={handleRedeem}
      >
        Redeem
      </button>
      {error && <p className="text-red-300 text-sm mt-1 font-semibold">{error}</p>}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 animate-fade-in">
          <div className="bg-white/90 p-8 rounded-2xl shadow-2xl flex flex-col items-center border-2 border-pink-400 animate-pop-in">
            <h4 className="text-2xl font-extrabold mb-2 text-pink-600 drop-shadow">Voucher Redeemed!</h4>
            <p className="mb-2 text-lg text-gray-700">Your code:</p>
            <div className="bg-gradient-to-r from-yellow-200 to-pink-200 px-6 py-3 rounded font-mono text-xl text-pink-700 mb-4 border border-pink-300 shadow-inner">
              {voucher.code}
            </div>
            <button
              className="bg-pink-500 text-white px-5 py-2 rounded-full font-bold shadow hover:bg-pink-600 transition"
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