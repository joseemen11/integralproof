import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Attorneys from "../../api/attorneys";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Image from "next/image";
import Link from "next/link";
import CaseStudies from "../../components/CaseStudies/CaseStudies";
import Cases from "../../api/case";

const AttorneysSinglePage = (props) => {
  const router = useRouter();

  const AttorneyDetails = Attorneys.find(
    (item) => item.slug === router.query.slug
  );

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <Fragment>
      <Navbar />
      {/* <PageTitle pageTitle={AttorneyDetails?.name} pagesub='Attorney Single' /> */}
      <section className="pt-[100px] pb-[80px] md:pt-[90px] md:pb-[60px] sm:pt-[80px] sm:pb-[50px]">
        <div className="wraper">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-1"></div>
            <div className="col-span-10 md:col-span-12">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6 md:col-span-6 sm:col-span-12">
                  <div className="bg-[#f5f5f5] text-center pt-[47px] md:pt-[56px]">
                    <div className="w-[380px] h-[450px] md:w-[350px] md:h-[350px] col:w-[300px] col:h-[300px] mx-auto mb-[47px] md:mb-[56px]">
                      <Image
                        className="rounded-full border-[1px] border-azul1 object-cover w-full h-full"
                        src={AttorneyDetails?.AtImg}
                        alt={AttorneyDetails?.AtImg}
                      />
                    </div>
                    <div className="bg-navbar/10 py-[25px]">
                      <h2 className="text-[30px] font-normal text-[#282e3f] col:text-[20px]">
                        {AttorneyDetails?.name}
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="col-span-6 md:col-span-6 sm:col-span-12">
                  <div className="bg-[#f5f5f5] sm:mt-[30px]">
                    <div className="bg-navbar/30 py-[25px]">
                      <h3 className="text-center text-[30px] text-[#666] col:text-[20px]">
                        Información
                      </h3>
                    </div>
                    <div className="p-[30px] pb-0">
                      <ul>
                        <li className="text-[20px] text-[#666] font-bold ">
                          {/* <span className="text-[#666] text-[20px] font-bold font-heading-font">
                            Posición:{" "}
                          </span>{" "} */}
                          {AttorneyDetails?.title}
                        </li>
                        <li className="text-[16px] text-[#666] mt-[15px] md:mt-[12px]">
                          <span className="text-[#666] text-[18px] font-bold ">
                            Áreas de práctica:{" "}
                          </span>
                          Contabilidad, Auditoría, Gestión Empresarial,
                          Capacitación
                        </li>
                        
                        <li className="text-[16px] text-[#666] mt-[15px] md:mt-[12px]">
                          <span className="text-[#666] text-[18px] font-bold ">
                            Redes Sociales:{" "}
                          </span>
                          {AttorneyDetails?.email}
                        </li>
                    
                      </ul>
                      <ul className="overflow-hidden mt-[22px] pb-[36px]">
                        {AttorneyDetails?.facebook ? (
                          <li className="w-[40px] h-[40px] leading-[40px] float-left text-center mr-[5px] group">
                            <Link
                              href={`${AttorneyDetails?.facebook}`}
                              className="block text-[#333] border bg-transparent border-[#ddd] transition-all ease-in-out group-hover:border-transparent group-hover:bg-[#666] group-hover:text-white"
                               target="_blank"
                    rel="noopener noreferrer"
                            >
                              <i className="fa fa-facebook"></i>
                            </Link>
                          </li>
                        ) : null}
                        {AttorneyDetails?.instagram ? (
                          <li className="w-[40px] h-[40px] leading-[40px] float-left text-center mr-[5px] group">
                            <Link
                              href={`${AttorneyDetails?.instagram}`}
                              className="block text-[#333] border bg-transparent border-[#ddd] transition-all ease-in-out group-hover:border-transparent group-hover:bg-[#666] group-hover:text-white"
                             target="_blank"
                    rel="noopener noreferrer"
                            >
                              <i className="fa fa-instagram"></i>
                            </Link>
                          </li>
                        ) : null}
                        {AttorneyDetails?.linkdin ? (
                          <li className="w-[40px] h-[40px] leading-[40px] float-left text-center mr-[5px] group">
                            <Link
                              href={`${AttorneyDetails?.linkdin}`}
                              className="block text-[#333] border bg-transparent border-[#ddd] transition-all ease-in-out group-hover:border-transparent group-hover:bg-[#666] group-hover:text-white"
                             target="_blank"
                    rel="noopener noreferrer"
                              >
                              <i className="fa fa-linkedin"></i>
                            </Link>
                          </li>
                        ) : null}

                        {/* <li className="w-[40px] h-[40px] leading-[40px] float-left text-center mr-[5px] group">
                          <Link
                            href="/attorneys-single/Eshan-Golly"
                            className="block text-[#333] border bg-transparent border-[#ddd] transition-all ease-in-out group-hover:border-transparent group-hover:bg-[#666] group-hover:text-white"
                          >
                            <i
                              className="fa fa-google-plus"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-[50px]">
                {/* <h2 className="text-[30px] md:text-[25px] font-normal mb-[30px] text-[#282e3f]">
                  Descripción
                </h2> */}
                <p className="text-[#666] text-[16px] leading-[28px] mb-[20px] text-justify">
                  {AttorneyDetails?.description1}
                </p>
                <p className="text-[#666] text-[16px] leading-[28px] mb-[20px] text-justify">
                  {AttorneyDetails?.description2}
                </p>
              </div>
              {AttorneyDetails?.formacion ? (
                <div className="mb-[50px]">
                  <h2 className="text-[30px] md:text-[25px] font-normal mb-[30px] text-[#282e3f]">
                    Formación Académica
                  </h2>
                  <ul>
                    {AttorneyDetails?.formacion?.map((item) => (
                      <li
                        key={item.id}
                        className="relative pl-[15px] pb-[10px] text-[15px] text-[#333]
            before:absolute before:left-0 before:top-0 before:content-['\f0da'] before:font-['FontAwesome']
            before:text-[#c0b596] before:text-[16px]"
                      >
                        {item.form}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <CaseStudies title={"Áreas de práctica"} />
              {/* <div className="mb-[50px]">
                                <h2 className="text-[30px] md:text-[25px] font-normal mb-[30px] text-[#282e3f]">Language</h2>
                                <p className="text-[#666] text-[16px] leading-[28px]">French(fluent), English (fluent), Greek , chinese.</p>
                            </div> */}

              {/* <div className="mt-[40px]">
                <h2 className="text-[36px] md:text-[25px] text-[#282e3f] pb-[20px] mb-[20px]">
                  Áreas de práctica
                </h2>
                <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
                  {Cases.slice(0, 4).map((cases, i) => (
                    <div
                      className="col-span-1"
                      key={i}
                    >
                      <div className="relative group">
                        <div className="studies-single">
                          <Image className="w-full" src={cases.cImg} alt="" />
                        </div>
                        <div
                          className="absolute bottom-[-80px] bg-[#151a30cc] w-[calc(100%)] h-[calc(100%)] transition ease-in-out duration-500 opacity-0 invisible 
                               group-hover:opacity-100 group-hover:visible group-hover:bottom-0"
                        >
                          <div className="absolute left-[5%] top-[5%] w-[90%] h-[90%] text-center border-[2px] border-[#c0b596] z-10 flex justify-center flex-col">
                            <p className="text-[#c0b596] text-[16px] leading-[28px]">
                              {cases.sub}
                            </p>
                            <h3
                              className="relative text-white text-[22px] pt-[10px] pb-[25px] font-medium 
                                    before:absolute before:left-[50%] before:top-full before:content-[''] before:bg-[#c0b596] before:transform before:-translate-x-1/2
                                    before:w-[60px] before:h-[3px] before:z-10"
                            >
                              <Link
                                onClick={ClickHandler}
                                href="/servicio-esp/[slug]"
                                as={`/servicio-esp/${cases.slug}`}
                                className="text-white transition ease-in-out duration-300 hover:text-[#c0b596]"
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
              </div> */}
              <div className="grid grid-cols-12 gap-4">
                {/* <div className="col-span-9 md:col-span-10 sm:col-span-12">
                  <div className="mt-[60px]">
                    <h2 className="text-[30px] md:text-[25px] font-normal mb-[30px] text-[#282e3f]">
                      Contact Me
                    </h2>
                    <form
                      method="post"
                      className="contact-validation-active overflow-hidden mx-[-15px]"
                      id="contact-form"
                      onSubmit={SubmitHandler}
                    >
                      <div className="float-left w-1/2 col:w-full px-[15px] pb-[30px] col:pb-[20px]">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="bg-[#ebebeb] border-0 h-[50px] py-[6px] px-[15px] text-[#333] text-[15px] w-full focus:outline-0 focus:shadow-none focus-visible"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="float-left w-1/2 col:w-full px-[15px] pb-[30px] col:pb-[20px]">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="bg-[#ebebeb] border-0 h-[50px] py-[6px] px-[15px] text-[#333] text-[15px] w-full focus:outline-0 focus:shadow-none focus-visible"
                          placeholder="Your Email"
                        />
                      </div>
                      <div className="float-left w-1/2 col:w-full px-[15px] pb-[30px] col:pb-[20px]">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          className="bg-[#ebebeb] border-0 h-[50px] py-[6px] px-[15px] text-[#333] text-[15px] w-full focus:outline-0 focus:shadow-none focus-visible"
                          placeholder="Your Phone"
                        />
                      </div>
                      <div className="float-left w-1/2 col:w-full px-[15px] pb-[30px] col:pb-[20px]">
                        <input
                          type="text"
                          name="address"
                          id="address"
                          className="bg-[#ebebeb] border-0 h-[50px] py-[6px] px-[15px] text-[#333] text-[15px] w-full focus:outline-0 focus:shadow-none focus-visible"
                          placeholder="Address"
                        />
                      </div>
                      <div className="px-[15px] pb-[30px] col:pb-[20px]">
                        <textarea
                          className="bg-[#ebebeb] border-0 h-[150px] p-[15px]  text-[#333] text-[15px] w-full focus:outline-0 focus:shadow-none focus-visible"
                          name="note"
                          id="note"
                          placeholder="Case Description..."
                        ></textarea>
                      </div>
                      <div className="submit-btn-wrapper px-[15px]">
                        <button
                          type="submit"
                          className="bg-[#c0b596] cursor-pointer text-[16px] font-semibold text-white px-[38px] py-[10px]  capitalize inline-block mt-[6px] transition ease-in-out duration-300 hover:bg-[#d4c291]
                                   col:mb-[5px] col:mt-[15px] col:text-[15px] col:px-[18px] col:py-[8px]"
                        >
                          Appointment
                        </button>
                        <div id="loader">
                          <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
                        </div>
                      </div>
                      <div className="clearfix error-handling-messages">
                        <div id="success">Thank you</div>
                        <div id="error">
                          {" "}
                          Error occurred while sending email. Please try again
                          later.{" "}
                        </div>
                      </div>
                    </form>
                  </div>
                </div> */}
                <div className="col-span-3 md:col-span-2"></div>
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </section>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default AttorneysSinglePage;
