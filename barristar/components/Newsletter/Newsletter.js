import React, { useEffect, useRef, useState } from "react";
import img1 from "/public/images/integralPro/equipo/1.jpg";
import img2 from "/public/images/integralPro/equipo/2.jpg";
import img3 from "/public/images/integralPro/equipo/3.jpg";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const Newsletter = (props) => {
  const sliderRef = useRef(null);
  const [nav, setNav] = useState(null);

  useEffect(() => {
    setNav(sliderRef.current);
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const images = [img1, img2, img3];
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="bg-celeste1 pt-[70px] pb-[80px] attorney-sec relative py-[100px]">
      <div className="wraper">
        <div className="">
          <div className="">
            {/* Adjusted columns */}
            <div className="">
              <h3 className="text-[30px] sm:text-[22px] font-medium mb-[40px] sm:mb-[30px] text-azul1 text-center">
                Equipo de Trabajo
              </h3>
              <div className="team-slider relative">
                <Slider {...settings} ref={sliderRef}>
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="overflow-hidden relative shadow-[1px_1px_5px_rgba(0,0,5,8%)] group"
                    >
                      {/* Maintain aspect ratio with padding-top */}
                      <div className="expert-img overflow-hidden relative pt-[100%]">
                        <Image
                          src={image}
                          alt={`Imagen ${index + 1}`}
                          className="absolute inset-0 w-full h-full object-cover"
                          width={800}
                          height={800}
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
