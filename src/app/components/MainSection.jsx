"use client";

import React from "react";
import { useRouter } from "next/navigation";
import CapsLock from "./CapsLock";
import PaperCard from "./PaperCard";

const MainSection = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-3 sm:px-4 py-10 sm:py-16">
      <div className="w-full max-w-2xl flex flex-col items-center gap-10 sm:gap-14">
        {/* Botão Voltar */}
        <div className="w-full">
          <button
            type="button"
            onClick={() => router.back()}
            className="bg-[#c9a86a] hover:bg-[#b8944f] text-white font-medium px-5 py-2.5 sm:px-6 sm:py-3 rounded-full shadow-md transition-colors duration-300 text-sm sm:text-base"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            ← Voltar
          </button>
        </div>

        {/* bloco em destaque */}
        <PaperCard>
          <p
            className="text-red-600 text-sm sm:text-base lg:text-xl leading-relaxed text-center font-medium"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Que você nunca deixe de acreditar no seu potencial e continue
            seguindo em frente com essa dedicação e força que te trouxeram até
            aqui. Às vezes a correria faz a gente esquecer o quanto já
            conquistou, então fica esse lembrete: você tem muito do que se
            orgulhar. Continue sendo essa pessoa admirável, e que a vida te
            retribua com muitas alegrias e realizações.
          </p>
        </PaperCard>

        {/* 5 regras */}
        <section className="flex flex-col items-center text-center gap-4 sm:gap-5 w-full">
          <CapsLock>5 regras para saber quem sou eu</CapsLock>

          <ol
            className="flex flex-col gap-3 sm:gap-4 text-[#494e57] text-sm sm:text-base lg:text-lg leading-relaxed text-left w-full"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <li>
              <span className="font-semibold">1° Só acredite em PROVAS:</span>{" "}
              bloco de notas + site onde foi feito a venda + pedir para o cara
              que contratei desligar o site por 10 minutos e reativar.
            </li>

            <li>
              <span className="font-semibold">
                2° O site só ficará 2 dias online:
              </span>{" "}
              depois tudo o que tiver na página some, ou seja, até 16/07 às
              23:59.
            </li>

            <li>
              <span className="font-semibold">3° Nossa distância</span> é de
              aproximadamente 43,1Km.
            </li>

            <li>
              <span className="font-semibold">
                4° Não acredite na(o) primeira(o)
              </span>{" "}
              que falar que foi ela(e) que fez a página, muitos vão se passar
              por mim.
            </li>

            <li>
              <span className="font-semibold">
                5° Algumas dicas escondem informações
              </span>{" "}
              e outras não levam para lugar nenhum, vamos ver quem ganha: Dra.
              Alexia v/s gifttab.com, que vença o melhor kskks.
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default MainSection;
