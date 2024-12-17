import React from "react";
import Link from "next/link";
import Cases from "../../api/case";
import Image from "next/image";

const CaseStudies = ({ title = 'Nuestros Servicios' } ) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="py-8">
      <div className="wraper">
        <div className="col-span-12 text-center">
          <div className="mb-[60px]">
            {/* <span className="text-[16px] text-footer_bg">
              {"{aviso de servicio}"}
            </span> */}
            <h2 className=" text-[36px] md:text-[26px] font-medium text-[#333] pb-[20px] relative before:absolute before:content-[''] before:left-[50%] before:bottom-0 before:transform before:-translate-x-1/2 before:w-[60px] before:h-[3px] before:bg-azul1">
              {title}
            </h2>
          </div>
        </div>
      </div>
      <div className="sortable-gallery overflow-hidden ">
        <div className="gallery-container gallery-fancybox masonry-gallery flex flex-wrap">
          {Cases.slice(0, 4).map((cases, i) => (
            // <div className="basis-1/5  md:basis-1/3 sm:basis-1/2 col:basis-full overflow-hidden grid-item" key={i}>
            <div
              className="basis-1/4 md:basis-1/3 sm:basis-1/2 col:basis-full overflow-hidden grid-item"
              key={i}
            >
              <div className="relative group">
              <div className="studies-single relative w-full h-0 pb-[66.67%]">  {/* 3:2 aspect ratio */}
                <Image 
                    src={cases.cImg} 
                    alt={cases.cTitle}
                    layout="fill" 
                    objectFit="cover"  
                    objectPosition="center"  
                />
            </div>
                <div
                  className="absolute bottom-[-80px] bg-azul1/60 w-[calc(100%)] h-[calc(100%)] transition ease-in-out duration-500 opacity-0 invisible 
                               group-hover:opacity-100 group-hover:visible group-hover:bottom-0"
                >
                  <div className="absolute left-[5%] top-[5%] w-[90%] h-[90%] text-center border-[2px] border-verde1 z-10 flex justify-center flex-col">
                    <p className="text-verde1 text-[16px] leading-[28px]">
                      {cases.sub}
                    </p>
                    <h3
                      className="relative text-white text-[22px] pt-[10px] pb-[25px] font-medium 
                                    before:absolute before:left-[50%] before:top-full before:content-[''] before:verde1 before:transform before:-translate-x-1/2
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
    </section>
  );
};

export default CaseStudies;
