import React from "react";

const PaperCard = ({ children }) => {
  return (
    <div className="relative w-full max-w-3xl mx-auto px-2">
      {/* sombra/base para dar profundidade, como se houvesse outra folha atrás */}
      <div className="absolute inset-2 bg-[#f2e9d8] rounded-xl sm:rounded-2xl rotate-1 sm:rotate-2 shadow-md" />

      {/* "papel" principal */}
      <div
        className="relative bg-[#fffdf7] rounded-xl sm:rounded-2xl shadow-xl px-4 py-6 sm:px-8 sm:py-10 lg:px-14 lg:py-14 -rotate-1"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {children}
      </div>
    </div>
  );
};

export default PaperCard;
