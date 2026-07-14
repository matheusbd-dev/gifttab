"use client";

import React from "react";
import { useRouter } from "next/navigation";
import CapsLock from "./CapsLock";
import GiftReveal from "./GiftReveal";

const BodySection = () => {
  const router = useRouter();

  const handleDiscover = () => {
    router.push("/page2");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-1">
      <div className="col-span-7 place-self-center w-full px-3 sm:px-4">
        <GiftReveal onDiscover={handleDiscover}>
          <section className="flex flex-col items-center justify-center text-center gap-3 sm:gap-4">
            <CapsLock>oii, então você encontrou a dica!!</CapsLock>
            <p
              className="text-[#494e57] text-sm sm:text-base lg:text-xl leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              A pessoa que te mandou isso só quis dizer que não precisa de um
              motivo especial como namorar, fazer aniversário, ou às vezes nem
              ser amiga(o) pra te lembrar disso:
            </p>
            <p
              className="text-[#494e57] text-sm sm:text-base lg:text-xl leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Você é uma pessoa incrível e merece ser reconhecida pelas suas
              batalhas e suas conquistas, sejam elas pequenas ou grandes, né,
              Dra. Alexia?
            </p>
            <p
              className="text-[#494e57] text-sm sm:text-base lg:text-xl leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              E caso você tenha namorado ou namorada, sem preconceito, né? dá
              uma cadeia ksksks Kkkkk. Peço perdão e garanto que isso não irá
              acontecer novamente. E, por favor, não conte para ela(e), não
              queremos morrer. Tenha santa piedade desta alma perdida aqui.
            </p>
          </section>
        </GiftReveal>
      </div>
    </div>
  );
};

export default BodySection;
