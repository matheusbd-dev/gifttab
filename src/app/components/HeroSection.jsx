import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex flex-row items-center gap-3">
      <div>
        <Image src="/images/gift.png" alt="gift image" width={25} height={25} />
      </div>
      <h1 className="text-white text-2xl font-extrabold">gifttab.com</h1>
    </section>
  );
};

export default HeroSection;
