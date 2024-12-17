import React from "react";
import atimg1 from "/public/images/integralPro/empresas/CAUB.jpg";
import atimg2 from "/public/images/integralPro/empresas/GAMLP.png";
import atimg3 from "/public/images/integralPro/empresas/SEPREC.jpg";
import atimg4 from "/public/images/integralPro/empresas/Sin.jpeg";
import Image from "next/image";
const FunFact = (props) => {
  const funFact = [
    {
      title: "Cert",
      subTitle: "Certificación 1",
      img: atimg1,
    },
    {
      title: "Cert",
      subTitle: "Certificación 2",
      img: atimg2,
    },
    {
      title: "Cert",
      subTitle: "Certificación 3",
      img: atimg3,
    },
    {
      title: "Cert",
      subTitle: "Certificación 4",
      img: atimg4,
    },
  ];

  return (
    <section
      className="relative z-1 bg-no-repeat bg-center bg-cover overflow-hidden pt-[100px] pb-[95px]"
      style={{
        backgroundImage: `url(${"/images/integralPro/certificados/certificados.jpg"})`,
      }}
    >
      <div className="wraper">
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {funFact.map((funfact, index) => (
            <div
              key={index}
              className="bg-azul1/60 rounded overflow-hidden shadow-md flex flex-col items-center justify-center"
            >
              <div className="w-full aspect-square relative">
                <Image
                  src={funfact.img}
                  alt={funfact.subTitle}
                  className="object-cover"
                  fill
                />
              </div>
              <p className="text-white text-center font-medium mt-2">
                {funfact.subTitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFact;
