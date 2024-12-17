import React from "react";
import Cases from "../../api/case";
import Link from "next/link";
import Image from "next/image";

const RecentCase = (props) => {
    const actual = props.actual;
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="mt-[40px] order-3 md:order-2">
      <h2
        className="text-[36px] md:text-[25px] text-[#282e3f] pb-[20px] mb-[60px] relative 
   before:absolute before:left-0 before:bottom-0 before:content-[''] 
   before:w-[60px] before:h-[2px] before:bg-azul1"
      >
        Servicios ofrecidos
      </h2>
      <div className="grid grid-cols-12 gap-3">
        {Cases.filter((cases) => cases.cTitle !== actual)
          .slice(0, 3)
          .map((cases, i) => (
            <div className="col-span-4 md:col-span-6 col:col-span-12" key={i}>
              <div className="relative group md:mb-[30px]">
                <div className="studies-single w-full h-[400px] overflow-hidden mb-10">
                  {/* Controlar el tamaño de las imágenes */}
                  <Image
                    src={cases.cImg}
                    alt=""
                    width={400} // Ajusta el ancho
                    height={400} // Ajusta la altura
                    className="object-cover w-full h-full" // Asegurar proporciones
                  />
                </div>
                <div
                  className="absolute bottom-[-80px] bg-azul1/70 w-[calc(100%)] h-[calc(100%)] transition ease-in-out duration-500 opacity-0 invisible 
        group-hover:opacity-100 group-hover:visible group-hover:bottom-0"
                >
                  <div className="absolute left-[5%] top-[5%] w-[90%] h-[90%] text-center border-[2px] border-verde1 z-10 flex justify-center flex-col">
                    <p className="text-white text-[16px] leading-[28px]">
                      {cases.sub}
                    </p>
                    <h3
                      className="relative text-white text-[22px] pt-[10px] pb-[25px] font-medium 
            before:absolute before:left-[50%] before:top-full before:content-[''] before:bg-verde1 before:transform before:-translate-x-1/2
            before:w-[60px] before:h-[3px] before:z-10"
                    >
                      <Link
                        onClick={ClickHandler}
                        href="/servicio/[slug]"
                        as={`/servicio/${cases.slug}`}
                        className="text-white transition ease-in-out duration-300 hover:text-verde1"
                      >
                        {cases.cTitle}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default RecentCase;
