import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from "/public/images/testimonial/2.png";
import ts2 from "/public/images/testimonial/2.png";

import img1 from "/public/images/integralPro/instituciones/DELICATESSEN.jpg";
import img2 from "/public/images/integralPro/instituciones/marceloCLIENTE.png";
import img3 from "/public/images/integralPro/instituciones/odontovil.jpg";
import Image from "next/image";

const Testimonial = (props) => {
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    asNavFor: nav2, 
  };

  const navSettings = {
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    asNavFor: nav1, 
  };

  const testimonial = [
    {
      tsImg: img3,
      Des: "“Gracias a INTEGRALPRO, la gestión contable de nuestra empresa se ha vuelto más eficiente y clara. Nos han permitido enfocarnos en crecer mientras ellos manejan nuestras finanzas”",
      Title: "ODONTO VIL ",
      Sub: "CIRUJANO DENTISTA",
    },
    {
      tsImg: img2,
      Des: "“La Auditoría de INTEGRALPRO nos dio la información necesaria a ser presentada a las instancias correspondientes de manera oportuna y así evitar multas.”",
      Title: "MARCELO GUTIERREZ ",
      Sub: "– CONSTRUCCIÓN ",
    },
    {
      tsImg: img1,
      Des: "“La asesoría de INTEGRALPRO ha sido clave para la nuestra empresa. Sus recomendaciones prácticas nos ayudaron a mejorar la rentabilidad. Son verdaderos socios en nuestro crecimiento.”",
      Title: "DELICATESSEN",
      Sub: "DELICIOSAMENTE SALUDABLE ",
    },
  ];
  return (
    <section className={`relative ${props.tClass} bg-gray-100`}>
      <div className="wraper ">
        <div className="grid grid-cols-12 gap-3 p-10">
          <div className="col-span-4 md:col-span-6 sm:col-span-12 sm:order-2">
            <div className="testimonial-img sm:text-center sm:max-w-[70%] sm:mx-auto">
              <Slider {...settings} ref={slider1}>
                {testimonial.map((tesmnl, tsm) => (
                  <Image src={tesmnl.tsImg} alt="" />
                ))}
              </Slider>
            </div>
          </div>
          <div className="col-span-8 md:col-span-6 sm:col-span-12 sm:order-1">
            <div className="testimonial-text ml-[95px] mt-[50px] md:ml-0">
              <div className="text-left sm:text-center">
                <span className="text-[16px] text-azul1">
                  Nuestros clientes
                </span>
                <h2
                  className="text-[36px] md:text-[26px] font-medium text-[#333] pb-[20px] relative 
                        before:absolute before:content-[''] before:left-[-68px] 
                        before:top-[30px] before:transform before:-translate-y-1/2 
                        before:w-[60px] before:h-[1px] before:bg-azul1 md:before:hidden"
                >
                  Testimonio de clientes
                </h2>
              </div>
              <div className="testimonial-slide owl-carousel">
                <Slider {...navSettings} ref={slider2}>
                  {testimonial.map((tesmnl, tsm) => (
                    <div className="slide-item sm:text-center" key={tsm}>
                      <p className="text-justify relative pt-[30px] sm:p-0 z-10 sm:pl-[20px] pl-[33px] pb-[30px] pr-[50px] mb-[20px] before:absolute before:left-[4px] before:top-[5px] before:content-['\f10d'] before:-z-10  before:font-['FontAwesome'] before:text-navbar before:text-[30px] sm:before:text-[20px]">
                        {tesmnl.Des}
                      </p>

                      <div className="mt-[35px] sm:mt-[20px] sm:mb-[30px]">
                        <h4 className="text-[18px] font-semibold font-base-font">
                          {tesmnl.Title}
                        </h4>
                        <span className="text-[16px] text-[#666] text-justify">
                          {tesmnl.Sub}
                        </span>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
