import React from "react";
import ConsultingFrom from "../ConsultingFrom/ConsultingFrom";

const ConsultingArea = (props) => {
  return (
    <section
      className="relative bg-center bg-cover bg-no-repeat bg-fixed py-[100px] z-10 
   before:content-[''] before:bg-azul1/30 before:w-full before:h-full before:absolute before:left-0 before:-z-10 before:top-0"
      style={{ backgroundImage: `url(${"/images/integralPro/consulta/DSC_2140.jpg"})` }}
    >
      <div className="wraper">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-5 md:col-span-12 ">
            <div className="contact-text md:mb-[30px]">
              <div className="title">
                <span className="text-[16px] text-white">
                  Para nuestros Honorables clientes
                </span>
                <h2
                  className="text-[36px] md:text-[26px] font-medium text-white pb-[20px] md:pb-[10px] relative 
                        before:absolute before:content-[''] before:left-[-68px] 
                        before:top-[30px] before:transform before:-translate-y-1/2 
                        before:w-[60px] before:h-[1px] before:bg-azul1 md:before:hidden"
                >
                  Consulta gratuita
                </h2>
              </div>
              <span className="text-[18px] text-white">
                Contáctanos al 76721382  o llena el formulario.
              </span>
              {/* <p className="mt-[30px] text-[#ddd] leading-[30px] text-[16px]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                able English.
              </p> */}
            </div>
          </div>
          <div className="col-span-7 md:col-span-12">
            <ConsultingFrom />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingArea;
