import React from "react";
import Link from "next/link";
import about from "/public/images/integralPro/about_us/img-2.jpg";
import sign from "/public/images/about/1.png";
import Image from "next/image";

const About = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="pt-[120px] pb-[100px]">
      <div className="wraper">
        <div className="grid grid-cols-12 items-center gap-3">
          <div className="col-span-6 md:col-span-12">
            <div className="relative mb-[20px]">
              <div className="relative max-w-[400px] aspect-square before:absolute before:bg-celeste1 before:w-full before:h-full before:content-[''] before:-z-10 before:left-[-20px] before:top-[-20px]">
                <Image
                  className="w-full h-full object-cover"
                  src={about}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-12">
            <div className="mb-[20px]">
              <h2 className="text-[#282e3f] text-[32px]">Nosotros</h2>
              <p className="text-[#666] text-[15px] leading-[28px] mb-[30px] text-justify">
                INTEGRALPRO S.R.L. Consultores en Contabilidad, Auditoría y
                Gestión Empresarial. Es una empresa del sector privado
                constituida en estricto cumplimiento de las Leyes y Normas del
                Estado Plurinacional de Bolivia, mediante Testimonio No.
                176/2020 de fecha 06 de julio de 2020.
              </p>
              {/* <p className="text-[#666] text-[15px] leading-[28px] mb-[30px]">Otorgado por notaría de fe pública No. 25, del distrito judicial de La Paz legalmente representada por el señor MSc. Lic. Aud. Andres Fernando Uria Palma, mayor de edad, hábil por derecho, titular de la cédula de identidad No. 8333093 expendida en La Paz, cuya representación legal se encuentra acreditada mediante el Testimonio de Poder No. 287/2020 suscrito ante notaría de fe pública No. 25. del distrito judicial de La Paz, empadronada en el Servicio de Impuestos Nacionales con número de identificación tributaria (NIT) 392729029, con matrícula de comercio No. 00431770, domicilio en la Zona Sur Calle 9 de Calacoto N°7815, Edificio San Gabriel, Piso 4 Oficina 404 de la ciudad de La Paz.</p> */}
              <div className="mb-[50px] col:mb-[20px]">
                <Link
                  onClick={ClickHandler}
                  href="/nosotros"
                  className="bg-azul1 cursor-pointer text-[16px] font-semibold text-white px-[38px] py-[10px]  capitalize inline-block mt-[6px] transition ease-in-out duration-300 hover:bg-verde1
                                col:mb-[5px] col:mt-[15px] col:text-[15px] col:px-[18px] col:py-[8px] 
                                "
                >
                  Más sobre nosotros...
                </Link>
              </div>
              {/* <div className="signature">
                                <Image  src={sign} alt=""/>
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
