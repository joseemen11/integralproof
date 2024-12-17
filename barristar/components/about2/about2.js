import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import abImg from "/public/images/integralPro/logos/Logocuadradooscuro.png";
import Link from "next/link";
import Image from "next/image";

const About2 = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="pt-[120px] pb-[100px] md:py-[80px]">
      <div className="wraper">
        <div className="grid grid-cols-12 items-center gap-3">
          <div className="col-span-6 md:col-span-12">
            <div className="mb-[20px]">
              <div className="text-left sm:text-center">
                {/* <span className="text-[16px] text-navbar">
                  Nosotros somos expertos
                </span> */}
                <h2
                  className="text-[36px] md:text-[26px] font-medium text-[#333] pb-[20px] relative 
                       en text-justify"
                >
                  ¿Quiénes somos?
                </h2>
              </div>
              <p className="text-[#666] text-[15px] leading-[28px] mb-[30px] text-justify">
                {/* INTEGRALPRO S.R.L. Consultores en Contabilidad, Auditoría y
                Gestión Empresarial. es una empresa del sector privado
                constituida en estricto cumplimiento de las Leyes y Normas del
                Estado Plurinacional de Bolivia, mediante Testimonio No.
                176/2020 de fecha 06 de julio de 2020, otorgado por notaría de
                fe pública No. 25, del distrito judicial de La Paz legalmente
                representada por el señor MSc. Lic. Aud. Andres Fernando Uria
                Palma, mayor de edad, hábil por derecho, titular de la cédula de
                identidad No. 8333093 expendida en La Paz. */}
                INTEGRALPRO S.R.L. es una empresa boliviana especializada en
                Contabilidad, Auditoría y Gestión Empresarial, constituida
                legalmente el 06 de julio de 2020 bajo el Testimonio No.
                176/2020. Representada por MSc. ANDRÉS URIA - DIRECTOR EJECUTIVO
                (CEO), brindamos soluciones financieras de alta calidad,
                cumpliendo con las normativas del Estado Plurinacional de
                Bolivia.
              </p>
              <p className="text-[#666] text-[15px] leading-[28px] mb-[30px] text-justify">
                {" "}
                {/* Cuya representación legal se encuentra acreditada mediante el
                Testimonio de Poder No. 287/2020 suscrito ante notaría de fe
                pública No. 25. del distrito judicial de La Paz, empadronada en
                el Servicio de Impuestos Nacionales con número de identificación
                tributaria (NIT) 392729029, con matrícula de comercio No.
                00431770, domicilio en la Zona Sur Calle 9 de Calacoto N°7815,
                Edificio San Gabriel, Piso 4 Oficina 404 de la ciudad de La Paz. */}
                Nuestra sede se encuentra en El Prado – Av. 16 de Julio Edificio
                Ex Hotel Plaza, Piso 4 OF. 417. Contamos con Número de
                Identificación Tributaria, Matrícula de Comercio, y Registro en
                el Colegio de Auditores de Bolivia, garantizando
                profesionalismo, transparencia y un enfoque personalizado para
                el éxito de nuestros clientes.
              </p>
              {/* <div className="mb-[50px] col:mb-[20px]">
                <Link
                  href="/about"
                  className="bg-[#c0b596] cursor-pointer text-[16px] font-semibold text-white px-[38px] py-[10px]  capitalize inline-block mt-[6px] transition ease-in-out duration-300 hover:bg-[#d4c291]
                        col:mb-[5px] col:mt-[15px] col:text-[15px] col:px-[18px] col:py-[8px] 
                        "
                >
                  More About Us..
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-span-6 md:col-span-12">
            <div className="relative mb-[20px]">
              <div
                className="relative  max-w-[520px] ml-auto before:absolute before:bg-celeste1
                     before:w-full before:h-full before:content-[''] before:-z-30 before:right-[-10px] before:bottom-[-10px] "
              >
                <div
                  className="relative after:absolute after:bg-azul1/10 after:content-[''] 
                        after:z-30 after:w-full after:h-full after:left-0 after:top-0"
                >
                  <Image className="w-full" src={abImg} alt="" />
                  {/* <div className="absolute left-0 top-0 w-full h-full transition-all ease-in-out flex justify-center flex-col text-center z-[99]">
                    <ul>
                      <li>
                        <span
                          onClick={() => setOpen(true)}
                          className="video-btn cursor-pointer"
                          data-type="iframe"
                        >
                          <i className="fa fa-play border border-white p-[20px] rounded-full text-white"></i>
                        </span>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="C9BJgrurYbc"
        onClose={() => setOpen(false)}
      />
    </section>
  );
};

export default About2;
