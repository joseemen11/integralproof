import React from "react";

const Practice2 = () => {
  return (
    <section
      className="relative bg-no-repeat bg-cover bg-center z-10 pt-[95px] pb-[95px] md:pb-[75px]
          before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[rgba(21,26,48,.66)]  before:-z-10 "
      style={{ backgroundImage: `url(${"/images/integralPro/contactanos/2.jpg"})` }}
    >
      <div className="wraper">
        <div className="col-span-12 text-center">
          <div className="mb-[60px]">
            <h2 className="text-[36px] md:text-[26px] font-medium text-white pb-[20px] relative before:absolute before:content-[''] before:left-[50%] before:bottom-0 before:transform before:-translate-x-1/2 before:w-[60px] before:h-[3px] before:bg-navbar">
              MISIÓN Y VISIÓN
            </h2>
          </div>
        </div>
        {/* Usamos flex en pantallas grandes y grid en pantallas pequeñas */}
        <div className="flex md:flex-col gap-5 justify-center items-center">
          <div className="bg-navbar/80 p-[20px] lg:p-[10px] flex-1 md:max-w-[45%]">
            <div>
              <h3
                className="text-white  text-center text-[30px] col:text-[20px] font-medium pb-[10px] relative mb-[10px]
                before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[30px] before:h-[2px] before:bg-navbar"
              >
                Misión
              </h3>
              <p className="text-white text-[16px] font-normal text-justify">
                {
                  "INTEGRALPRO S.R.L. Consultores en Contabilidad, Auditoría y Gestión Empresarial. Es una empresa multidisciplinaria que se distingue por su compromiso con los más altos estándares de calidad, independencia e integridad. Nos especializamos en ofrecer una amplia gama de servicios profesionales de consultoría externa y asesoramiento, así como coordinar distintas soluciones para entidades del sector público y privado. Además, brindamos capacitación tanto a nivel grupal como individual, adaptada a las necesidades específicas de nuestros clientes."
                }
              </p>
            </div>
          </div>
          <div className="bg-navbar p-[20px] lg:p-[10px] flex-1 md:max-w-[45%]">
            <div>
              <h3
                className="text-white text-center text-[30px]  col:text-[20px] font-medium pb-[10px] relative mb-[10px]
                before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[30px] before:h-[2px] before:bg-navbar"
              >
                Visión
              </h3>
              <p className="text-white text-[16px] font-normal text-justify">
                {"Convertirnos en el referente líder en el ámbito de la consultoría multidisciplinaria, reconocidos por nuestra excelencia, innovación y compromiso con la calidad. Nos esforzamos por ser la primera opción para entidades del sector público y privado que buscan soluciones integrales y personalizadas para sus desafíos más complejos. A través de nuestro enfoque centrado en el cliente y nuestro equipo altamente capacitado, aspiramos a impulsar el crecimiento y el éxito de nuestros clientes, contribuyendo así al desarrollo sostenible de INTEGRALPRO S.R.L."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Practice2;
