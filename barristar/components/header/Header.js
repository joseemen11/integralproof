import React, { useState } from "react";
import Link from "next/link";
import MobileMenu from "../MobileMenu/MobileMenu";
import Logo from "/public/images/logo-sinfondo.png";
import Image from "next/image";

const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <header className=" relative z-[111]">
      {/* <div className="bg-[#272c3f] pt-[5px]"> */}
      <div className="bg-celeste1 pt-[5px] sm:hidden">
        {/* <div className="wraper relative before:absolute before:w-full before:h-[1px] before:bg-[rgba(255,255,255,.07)] before:bottom-0 before:left-0 before:content-['']"> */}
        <div className=" relative before:absolute before:w-full before:h-[1px] before:bg-[rgba(255,255,255,.07)] before:bottom-0 before:left-0 before:content-['']">
          <div className="grid grid-cols-11">
            <div className="col-span-10 md:col-span-12">
              <ul className="text-left md:text-center lg:text-[15px] sm:text-[12.5px]">
                <li className="relative text-white inline-block px-5 col:pr-0  before:absolute before:content-[''] before:left-0 before:top-[15px] before:w-[1px] before:h-[25px] before:bg-[rgba(255,255,255,.07)] md:before:hidden  before:z-10 before:transform before:-translate-x-1/2 ">
                  <i
                    className="fa fa-clock-o pr-[12.5px] text-azul1 text-[12.5px]"
                    aria-hidden="true"
                  ></i>
                  <span className="font-bold text-azul1 text-[12.5px]">Lunes a Viernes:</span>{" "}
                  <span className="text-azul1 text-[12.5px]"> 09:00 - 17:00 </span>{" "}
                  <span className="font-bold text-azul1 text-[12.5px]"> Sábado:</span>{" "}
                  <span className="text-azul1 text-[12.5px]">10:00 - 14:00</span>
                </li>
                <li className=" text-white inline-block p-[15px]  col:pr-0 pl-0 col:pb-[0]">
                  <i
                    className="fa fa-map-marker pr-[12.5px] col:pt-[0] text-azul1 text-[12.5px]"
                    aria-hidden="true"
                  ></i>
                  <span className="font-bold text-azul1 text-[12.5px]">Dirección:</span>{" "}
                  <span className="text-azul1 text-[12.5px]">
                    El Prado - Av 16 de Julio Edificio Ex Hotel Plaza, Piso 4
                    OF. 417
                  </span>
                </li>
                <li
                  className="relative text-white inline-block p-[15px]  col:pr-0
                                before:absolute before:content-[''] before:left-0 before:top-[15px] before:w-[1px] before:h-[25px] before:bg-[rgba(255,255,255,.07)]  before:z-10 before:transform before:-translate-x-1/2 md:before:hidden"
                >
                  {/* <i className="fa fa-mobile pr-[12.5px] text-[#cbbc99] text-[12.5px]" aria-hidden="true"></i>70642519</li> */}
                  <i
                    className="fa fa-mobile pr-[12.5px] text-azul1 text-[12.5px]"
                    aria-hidden="true"
                  ></i>
                  <span className="font-bold text-azul1 text-[12.5px]">Contacto:</span>{" "}
                  <span className="text-azul1 text-[12.5px]">LPZ +591 76721382</span>
                </li>
              </ul>
            </div>
            <div className="col-span-1 md:col-span-12">
              <div className="text-right md:text-center md:mb-[15px] mr-5 p-1">
                <Link
                  onClick={ClickHandler}
                  href="/contact"
                  className="theme-btn text-sm md:py-[8px] md:px-[22px]"
                >
                  <span className="font-bold text-azul1 text-sm">Consulta</span>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="wpo-site-header bg-[#272c3f] relative "> */}
      <div className="wpo-site-header bg-azul1 relative ">
        <div className="wraper">
          <div className="flex items-center justify-between ">
            <MobileMenu />

            <div className="logo w-[255px] md:w-[200px] md:mx-auto sm:w-[180px] col:w-[160px] ">
              <Link
                onClick={ClickHandler}
                className="text-[45px] col:text-[25px] font-bold flex items-center text-white"
                href="/"
              >
                <Image className="w-full max-h-[112.5px] object-contain" src={Logo} alt="" />
              </Link>
            </div>
            <ul className="md:hidden mr-[-50px] lg-[-12.5px]">
              <li className="relative inline-block group">
                <Link
                  onClick={ClickHandler}
                  href="/"
                  className="relative text-[15px] lg:text-[14px] py-[35px] xl:py-[30px] px-[18px] xl:px-[6px] text-white hover:text-verde1 block uppercase font-base-font font-bold transition-all
                                "
                >
                  {`Inicio`}
                </Link>
                {/* <ul className="absolute w-[240px]  left-0 top-[110%] p-[20px] z-[111]  bg-[#fff] shadow-[#3e419f17]  transition-all  opacity-0 invisible
                                  group-hover:opacity-100  group-hover:top-full group-hover:visible">
                                    <li>
                                        <Link onClick={ClickHandler} href="/" className="text-[15px] lg:text-[14px] inline-block py-[5px] uppercase hover:text-verde1 group relative overflow-hidden font-normal transition-all 
                                        ">Home style one</Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/home-2" className="text-[15px] lg:text-[14px] inline-block py-[5px] uppercase text-[#333] group relative overflow-hidden font-normal transition-all hover:text-verde1 
                                        ">Home style Two</Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/home-3" className="text-[15px] lg:text-[14px] inline-block py-[5px] uppercase text-[#333] group relative overflow-hidden font-normal transition-all hover:text-verde1 
                                        ">Home style three</Link>
                                    </li>
                                </ul> */}
              </li>
              <li className="relative inline-block">
                <Link
                  onClick={ClickHandler}
                  href="/nosotros"
                  className="relative group text-[15px] lg:text-[14px] py-[35px] xl:py-[30px] px-[18px] xl:px-[6px] text-white block uppercase font-base-font font-bold hover:text-verde1 transition-all
                               "
                >
                  {`Nosotros`}
                </Link>
              </li>
              <li className="relative inline-block group">
                <Link
                  onClick={ClickHandler}
                  href="/servicios"
                  className="relative group text-[15px] lg:text-[14px] py-[35px] xl:py-[30px] px-[18px] xl:px-[6px] text-white block uppercase font-base-font font-bold hover:text-verde1 transition-all
                              "
                >
                  {`Servicios`}
                  {"     "}
                  {/* <span className="ml-2 inline-block transform scale-x-130">{`▼`}</span> */}
                </Link>
                <ul className="absolute w-[240px]  left-0 top-[110%] p-[20px] z-[111]  bg-[#fff] shadow-[#3e419f17]  transition-all  opacity-0 invisible group-hover:opacity-100  group-hover:top-full group-hover:visible">
                  <li>
                    <Link
                      onClick={ClickHandler}
                      href="/servicio/Contabilidad-Integral"
                      className="text-[15px] lg:text-[14px] inline-block py-[5px] uppercase text-[#333] group relative overflow-hidden font-bold transition-all hover:text-verde1 
                                        "
                    >
                      Contabilidad
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={ClickHandler}
                      href="/servicio/Auditoría-Especializada"
                      className="text-[15px] lg:text-[14px] inline-block py-[5px] uppercase text-[#333] group relative overflow-hidden font-bold transition-all hover:text-verde1 
                                        "
                    >
                      Auditoría
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={ClickHandler}
                      href="/servicio/Gestión-Empresarial"
                      className="text-[15px] lg:text-[14px] inline-block py-[5px] uppercase text-[#333] group relative overflow-hidden font-bold transition-all hover:text-verde1 
                                        "
                    >
                      Gestión Empresarial
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={ClickHandler}
                      href="/servicio/Capacitación-Individual-y-Colectiva"
                      className="text-[15px] lg:text-[14px] inline-block py-[5px] uppercase text-[#333] group relative overflow-hidden font-bold transition-all hover:text-verde1 
                                        "
                    >
                      Capacitación
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="relative inline-block group">
                <Link
                  onClick={ClickHandler}
                  href="/"
                  className="relative group text-[15px] lg:text-[14px] py-[35px] xl:py-[30px] px-[18px] xl:px-[6px] text-white block uppercase font-base-font font-normal hover:text-verde1 transition-all
                                "
                >
                  Profesionales
                </Link>
                <ul className="absolute w-[240px]  left-0 top-[110%] p-[20px] z-[111]  bg-[#fff] shadow-[#3e419f17]  transition-all  opacity-0 invisible group-hover:opacity-100  group-hover:top-full group-hover:visible">
                  <li>
                    <Link
                      onClick={ClickHandler}
                      href="/case-stadies"
                      className="text-[15px] lg:text-[14px] inline-block py-[5px] uppercase text-[#333] group relative overflow-hidden font-normal transition-all hover:text-verde1 
                                        "
                    >
                      Cases
                    </Link>
                  </li>

                  <li>
                    <Link
                      onClick={ClickHandler}
                      href="/case/Business-Accounting"
                      className="text-[15px] lg:text-[14px] inline-block py-[5px] uppercase text-[#333] group relative overflow-hidden font-normal transition-all hover:text-verde1 
                                        "
                    >
                      Case single
                    </Link>
                  </li>
                </ul>
              </li> */}
              {/* <li className="relative inline-block group">
                <Link
                  onClick={ClickHandler}
                  href="/"
                  className="relative group text-[15px] lg:text-[14px] py-[35px] xl:py-[30px] px-[18px] xl:px-[6px] text-white block uppercase font-base-font font-normal hover:text-verde1 transition-all
                               "
                >
                  Blog
                </Link>
                <ul className="absolute w-[240px]  left-0 top-[110%] p-[20px] z-[111]  bg-[#fff] shadow-[#3e419f17]  transition-all  opacity-0 invisible group-hover:opacity-100  group-hover:top-full group-hover:visible">
                  <li>
                    <Link
                      onClick={ClickHandler}
                      href="/blog"
                      className="text-[15px] lg:text-[14px] uppercase inline-block py-[5px] text-[#333] group relative overflow-hidden font-normal transition-all hover:text-verde1 
                                        "
                    >
                      Blog right sidebar
                    </Link>
                  </li>

                  <li>
                    <Link
                      onClick={ClickHandler}
                      href="/blog-left-sidebar"
                      className="text-[15px] lg:text-[14px] inline-block py-[5px] uppercase text-[#333] group relative overflow-hidden font-normal transition-all hover:text-verde1 
                                        "
                    >
                      Blog left sidebar
                    </Link>
                  </li>

                  <li>
                    <Link
                      onClick={ClickHandler}
                      href="/blog-fullwidth"
                      className="text-[15px] lg:text-[14px] inline-block py-[5px] uppercase text-[#333] group relative overflow-hidden font-normal transition-all hover:text-verde1 
                                        "
                    >
                      Blog fullwidth
                    </Link>
                  </li>

                  <li className="relative group/group-2">
                    <Link
                      onClick={ClickHandler}
                      href="/"
                      className="text-[15px] lg:text-[14px] inline-block py-[5px] uppercase text-[#333] group relative overflow-hidden font-normal transition-all hover:text-verde1 
                                        "
                    >
                      Blog details
                    </Link>
                    <ul className="absolute w-[240px]  left-[120%] xl:left-[0] xl:right-[120%] top-0 p-[20px] z-[111]  bg-[#fff] shadow-[#3e419f17] opacity-0 invisible  transition-all group-hover/group-2:opacity-100  group-hover/group-2:left-[110%] xl:group-hover/group-2:left-[auto] xl:group-hover/group-2:right-[110%] group-hover/group-2:visible">
                      <li>
                        <Link
                          onClick={ClickHandler}
                          href="/blog/Who-Can-a-Victim-Sue-after-a-Car-Accident"
                          className="text-[15px] lg:text-[14px] inline-block py-[5px] uppercase text-[#333] group relative overflow-hidden font-normal transition-all hover:text-[#c0b596] 
                                                "
                        >
                          Blog details right sidebar
                        </Link>
                      </li>

                      <li>
                        <Link
                          onClick={ClickHandler}
                          href="/blog-single-left-sidebar/Who-Can-a-Victim-Sue-after-a-Car-Accident"
                          className="text-[15px] lg:text-[14px] inline-block py-[5px] uppercase text-[#333] group relative overflow-hidden font-normal transition-all hover:text-[#c0b596] 
                                                "
                        >
                          Blog details left sidebar
                        </Link>
                      </li>

                      <li>
                        <Link
                          onClick={ClickHandler}
                          href="/blog-single-fullwidth/Who-Can-a-Victim-Sue-after-a-Car-Accident"
                          className="text-[15px] lg:text-[14px] inline-block py-[5px] uppercase text-[#333] group relative overflow-hidden font-normal transition-all hover:text-[#c0b596] 
                                                "
                        >
                          Blog details fullwidth
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li> */}
              <li className="relative inline-block group">
                <Link
                  onClick={ClickHandler}
                  href="/profesionales"
                  className="relative group text-[15px] lg:text-[14px] py-[35px] xl:py-[30px] px-[18px] xl:px-[6px] text-white block uppercase font-base-font font-bold hover:text-verde1 transition-all
                              "
                >
                  {`Profesionales`}
                  {"     "}
                  {/* <span className="ml-2 inline-block transform scale-x-130">{`▼`}</span> */}
                </Link>
                <ul className="absolute w-[240px]  left-0 top-[110%] p-[20px] z-[111]  bg-[#fff] shadow-[#3e419f17]  transition-all  opacity-0 invisible group-hover:opacity-100  group-hover:top-full group-hover:visible">
                  <li>
                    <Link
                      onClick={ClickHandler}
                      href="/profesional/Andrés-Uria"
                      className="text-[15px] lg:text-[14px] inline-block py-[5px] uppercase text-[#333] group relative overflow-hidden font-bold transition-all hover:text-verde1 
                                        "
                    >
                      Andrés Uria
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={ClickHandler}
                      href="/profesional/Daniela-Uria"
                      className="text-[15px] lg:text-[14px] inline-block py-[5px] uppercase text-[#333] group relative overflow-hidden font-bold transition-all hover:text-verde1 
                                        "
                    >
                      Daniela Uria
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={ClickHandler}
                      href="/profesional/Fernando-Uria"
                      className="text-[15px] lg:text-[14px] inline-block py-[5px] uppercase text-[#333] group relative overflow-hidden font-bold transition-all hover:text-verde1 
                                        "
                    >
                      Fernando Uria
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={ClickHandler}
                      href="/profesional/Martha-Palma"
                      className="text-[15px] lg:text-[14px] inline-block py-[5px] uppercase text-[#333] group relative overflow-hidden font-bold transition-all hover:text-verde1 
                                        "
                    >
                      Martha Palma
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={ClickHandler}
                      href="/profesional/Shirley-Vera"
                      className="text-[15px] lg:text-[14px] inline-block py-[5px] uppercase text-[#333] group relative overflow-hidden font-bold transition-all hover:text-verde1 
                                        "
                    >
                      Shirley Vera
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={ClickHandler}
                      href="/profesional/Andrea-Tapia"
                      className="text-[15px] lg:text-[14px] inline-block py-[5px] uppercase text-[#333] group relative overflow-hidden font-bold transition-all hover:text-verde1 
                                        "
                    >
                      Andrea Tapia
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="relative inline-block">
                <Link
                  onClick={ClickHandler}
                  href="/contact"
                  className="relative group text-[15px] lg:text-[14px] py-[35px] xl:py-[30px] px-[18px] xl:px-[6px] text-white block uppercase font-base-font font-bold hover:text-verde1 transition-all
                               "
                >
                  Contacto
                </Link>
              </li>
            </ul>
            {/* <div className="text-right relative before:absolute before:w-[1px] before:h-full py-[37px]  pl-[37px] lg:pl-[20px]
                         before:bg-[rgba(255,255,255,.07)] before:bottom-0 before:left-0 before:content-[''] ">
                            <ul>
                                <li className="relative header-search-form-wrapper">
                                    <div className="cart-search-contact text-right text-white border-left cursor-pointer border-[rgba(255,255,255,.07)]">
                                        <div className="search-toggle-btn" onClick={() => setMenuState(!menuActive)}>
                                            <i className={`fi ti-search ${menuActive ? "ti-close" : "fi "}`}></i>
                                        </div>
                                    </div>
                                    <ul className={`header-search-form absolute right-0 top-[300%] w-[263px] bg-white z-20 p-[15px]  transform text-center transition-all opacity-0 invisible  ${menuActive ? "header-search-content-toggle" : ""}`}>
                                        <li>
                                            <form action="search" className="relative" onSubmit={SubmitHandler}>
                                                <input className="bg-white w-full h-[40px] pl-[12.5px] pr-[40px] focus-visible:outline-0 border border-[rgba(64,59,59,0.07)]" type="text" placeholder="search here.." />
                                                <button className="absolute right-0 top-0 w-[40px] h-[40px] bg-[#272c3f] text-white border-0"><i className="fa fa-search "></i></button>
                                            </form>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
