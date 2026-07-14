"use client";

import React, { useState, useEffect } from "react";
import PaperCard from "./PaperCard";

const GiftReveal = ({ children, onDiscover = () => {} }) => {
  const [open, setOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => setShowButton(true), 650);
      return () => clearTimeout(t);
    }
    setShowButton(false);
  }, [open]);

  return (
    <div className="relative w-full max-w-md sm:max-w-lg mx-auto select-none">
      <div
        className={`relative mx-auto transition-all duration-700 ease-out ${
          open
            ? "overflow-visible h-auto pb-6 sm:pb-8"
            : "overflow-hidden h-32 sm:h-36 lg:h-40"
        }`}
      >
        <div
          className={`absolute inset-x-0 bottom-0 h-24 sm:h-28 lg:h-32 bg-[#cbb187] rounded-xl sm:rounded-2xl shadow-lg transition-opacity duration-500 ${
            open ? "opacity-0 z-0 pointer-events-none" : "opacity-100 z-20"
          }`}
        />

        {!open && (
          <div className="absolute inset-x-0 bottom-3 sm:bottom-4 z-30 flex flex-col items-center gap-1 pointer-events-none animate-bounce">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#6b5636]"
            >
              <path
                d="M12 4v13m0 0 5-5m-5 5-5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="text-[11px] sm:text-xs font-medium text-[#6b5636] tracking-wide"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              toque para abrir
            </span>
          </div>
        )}

        <div
          className={`flex justify-center transition-all duration-700 ease-out ${
            open
              ? "relative z-30 translate-y-0 opacity-100 scale-100"
              : "absolute inset-x-0 top-0 z-10 translate-y-[90%] opacity-95 scale-95"
          }`}
        >
          <PaperCard>{children}</PaperCard>
        </div>

        <div
          className={`absolute inset-x-0 top-0 h-20 sm:h-24 lg:h-28 z-40 transition-all duration-700 ease-out ${
            open
              ? "opacity-0 -translate-y-4 pointer-events-none"
              : "opacity-100"
          }`}
        >
          <svg
            viewBox="0 0 200 110"
            preserveAspectRatio="none"
            className="w-full h-full drop-shadow-md"
          >
            <polygon points="0,0 200,0 100,100" fill="#c9a86a" />
          </svg>
        </div>

        {!open && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir envelope"
            className="absolute inset-0 z-50 cursor-pointer"
          />
        )}
      </div>

      {open && (
        <div
          className={`w-full flex justify-center mt-1 sm:mt-2 transition-all duration-500 ease-out ${
            showButton
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <button
            type="button"
            onClick={onDiscover}
            className="bg-[#c9a86a] hover:bg-[#b8944f] text-white font-medium px-5 py-2.5 sm:px-6 sm:py-3 rounded-full shadow-md transition-colors duration-300 text-sm sm:text-base"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Descobrir quem mandou?
          </button>
        </div>
      )}
    </div>
  );
};

export default GiftReveal;
