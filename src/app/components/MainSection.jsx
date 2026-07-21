"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CapsLock from "./CapsLock";
import PaperCard from "./PaperCard";

const MainSection = () => {
  const router = useRouter();
  const [activeCard, setActiveCard] = useState(null);
  const [showCardContent, setShowCardContent] = useState({
    normal: false,
    red: false,
  });
  const [showTemplate, setShowTemplate] = useState(false);

  useEffect(() => {
    if (activeCard) {
      const timer = setTimeout(() => {
        setShowCardContent((prev) => ({
          ...prev,
          [activeCard]: true,
        }));
      }, 500);
      return () => clearTimeout(timer);
    }
    setShowCardContent({ normal: false, red: false });
  }, [activeCard]);

  const renderCard = (type) => {
    const isOpen = activeCard === type;
    const isNormal = type === "normal";
    const bgColor = isNormal ? "#d4b896" : "#f5d5d5";
    const borderColor = isNormal ? "#c9a86a" : "#dc143c";
    const accentColor = isNormal ? "#c9a86a" : "#dc143c";
    const textColor = isNormal ? "#6b5636" : "#8b0000";

    return (
      <div key={type} className="flex flex-col items-center gap-4">
        {!isOpen ? (
          <div
            onClick={() => setActiveCard(type)}
            className="cursor-pointer w-full max-w-sm transform transition-all duration-300 hover:scale-105"
          >
            <div
              className={`rounded-lg shadow-lg overflow-hidden border-2`}
              style={{ borderColor: accentColor, backgroundColor: accentColor }}
            >
              <div
                className="h-32 sm:h-40 flex items-center justify-center relative"
                style={{ backgroundColor: bgColor }}
              >
                <div className="absolute top-0 left-0 right-0 h-1/2">
                  <svg
                    viewBox="0 0 200 100"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                  >
                    <polygon points="0,0 200,0 100,100" fill={accentColor} />
                  </svg>
                </div>

                <div className="relative z-10 flex flex-col items-center gap-2">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: textColor }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p
                    className="text-xs sm:text-sm font-semibold"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      color: textColor,
                    }}
                  >
                    {isNormal ? "Clique para abrir" : "Convite Especial"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`transform transition-all duration-500 w-full max-w-sm ${
              showCardContent[type]
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0"
            }`}
          >
            <div
              className="rounded-lg shadow-2xl p-6 sm:p-8 border-2"
              style={{ borderColor: accentColor, backgroundColor: "#ffffff" }}
            >
              {isNormal ? (
                <>
                  <p
                    className="text-sm sm:text-base leading-relaxed text-center"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      color: textColor,
                    }}
                  >
                    Sei que não me conhece nem eu conheço você muito bem. Olha,
                    esse presente aqui é algo que se dá quando se tem um(a)
                    namorado(a), o que eu estou bem longe de ter com você nesse
                    momento, estou praticamente no nível de um(a)
                    desconhecido(a).
                  </p>

                  <p
                    className="text-sm sm:text-base leading-relaxed text-center mt-4"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      color: textColor,
                    }}
                  >
                    Pode parecer até um pouco gringe o que vou falar aqui, mas
                    por você, Dra. Alexia, por você eu iria até o infinito e
                    daria minha vida.
                  </p>
                </>
              ) : (
                <>
                  <p
                    className="text-sm sm:text-base leading-relaxed text-center font-bold"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      color: accentColor,
                      fontSize: "1.1em",
                    }}
                  >
                    Então aceitaria um convite para sair comigo???
                  </p>

                  <p
                    className="text-sm sm:text-base leading-relaxed text-center mt-4"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      color: textColor,
                    }}
                  >
                    Você só sai ganhando. Você decide o lugar, tudo pago por
                    mim, é claro. Obviamente, sair como duas pessoas
                    desconhecidas que estão se conhecendo.
                  </p>

                  <p
                    className="text-sm sm:text-base leading-relaxed text-center mt-4"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      color: textColor,
                    }}
                  >
                    Tudo começa no estado de inércia. E nem vem falar que você
                    está sem tempo ou que tem bastante coisa para fazer,
                    MENTIRA, que eu sei que você está de férias.
                  </p>

                  <p
                    className="text-sm sm:text-base leading-relaxed text-center mt-4 font-semibold"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      color: textColor,
                    }}
                  >
                    Fia, aproveita! Como diria o Cobra Kai: quem fica muito na
                    defesa uma hora esquece como ataca.
                  </p>
                </>
              )}

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setActiveCard(null)}
                  className="flex-1 text-white font-medium py-2.5 sm:py-3 rounded-full shadow-md transition-colors duration-300 text-sm sm:text-base"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    backgroundColor: accentColor,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = "0.8";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = "1";
                  }}
                >
                  Fechar carta
                </button>

                {!isNormal && (
                  <button
                    onClick={() => setShowTemplate(true)}
                    className="flex-1 text-white font-medium py-2.5 sm:py-3 rounded-full shadow-md transition-colors duration-300 text-sm sm:text-base"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      backgroundColor: accentColor,
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.opacity = "0.8";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.opacity = "1";
                    }}
                  >
                    Marcar dia...
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-3 sm:px-4 py-10 sm:py-16">
      {/* Modal Template */}
      {showTemplate && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
          onClick={() => setShowTemplate(false)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl p-8 sm:p-12 max-w-md w-full border-4"
            style={{ borderColor: "#dc143c" }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              className="text-2xl sm:text-3xl font-bold text-center mb-6"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#dc143c",
              }}
            >
              Template
            </h2>

            <p
              className="text-base sm:text-lg leading-relaxed text-center"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#494e57",
              }}
            >
              Caso queira muito saber quem mandou, me encontre hoje depois do
              expediente, às 17:15, perto da sua casa, naquele parquinho que tem
              lá. Tenho certeza de que você vai ficar surpreso(a).
            </p>

            <p
              className="text-base sm:text-lg leading-relaxed text-center mt-4"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#494e57",
              }}
            >
               Caso prefira outra forma, tenho meu segundo número. Caso você
              mande mensagem para ele no WhatsApp, só vou responder 1 dia
              depois, no dia 22/07/2026 às 10h, assim você tem mais tempo para
              pensar em quem é a pessoa kksksks, perdão
            </p>

            <p
              className="text-base sm:text-lg leading-relaxed text-center mt-4 font-semibold"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#dc143c",
              }}
            >
              Meu número: 44 98831-8390
            </p>

            <button
              onClick={() => setShowTemplate(false)}
              className="w-full mt-8 text-white font-medium py-3 sm:py-3.5 rounded-full shadow-md transition-colors duration-300 text-base sm:text-lg"
              style={{
                fontFamily: "'Poppins', sans-serif",
                backgroundColor: "#dc143c",
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = "0.8";
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = "1";
              }}
            >
              Fechar
            </button>
          </div>
        </div>
      )}

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
            retribua com muitas alegrias e realizações. Sei que você tem seus
            estudos, trabalha, tem seus problemas pessoais, suas lutas diárias
            do dia a dia, no entanto, nunca deixe que você desanime que nem uma
            flor murcha.
          </p>
        </PaperCard>

        {/* QUEM SOU EU */}
        <section className="flex flex-col items-center text-center gap-4 sm:gap-5 w-full">
          <CapsLock>QUEM SOU EU</CapsLock>

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
                2° Não acredite na(o) primeira(o)
              </span>{" "}
              que falar que foi ela(e) que fez a página, muitos vão se passar
              por mim.
            </li>

            <li>
              <span className="font-semibold">3° Meu nome contém</span>{" "}
              *********<span style={{ color: "#dc143c" }}>S</span>, e não se
              atenha à quantidade de "*".
            </li>

            <li>
              <span className="font-semibold">
                4° Algumas dicas escondem informações
              </span>{" "}
              e outras não levam a lugar nenhum. Escolha bem qual você acha que
              é a verdadeira.
            </li>

            <li>
              <span className="font-semibold">
                5° A pessoa que te mandou isso
              </span>{" "}
              é bem criativa e pensa fora da caixa.
            </li>

            <li>
              <span className="font-semibold">6° O site vai ficar</span> no ar
              por apenas 1 dia, sendo desativado às 23:59 de 21/07/2026.
            </li>

            <li>
              <span className="font-semibold">7° Você vai ficar</span> mais
              surpresa com quem mandou do que com o motivo.
            </li>
          </ol>
        </section>

        {/* Cartas Interativas */}
        <section className="w-full flex flex-col items-center gap-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
            {renderCard("normal")}
            {renderCard("red")}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainSection;
