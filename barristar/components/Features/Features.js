import React from 'react';
import ContabilidadIcon from '../../public/svg/accounting';
import BusinessIcon from '../../public/svg/business';
import InvoiceIcon from '../../public/svg/invoice';
import ManagementIcon from '../../public/svg/management';

const Features = (props) => {
  return (
    <div className="bg-[#f1f1f1] pt-[50px] pb-[30px]">
      <div className="mx-10">
        <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
          <div className="mb-5">
            <div className="bg-white flex items-center sm:mx-[30px] col:mx-0">
              <div className="bg-azul1 h-[100px] col:h-[80px] col:w-[80px] w-[100px] text-center flex justify-center items-center px-[18px] col:p-0">
                {/* <i className="fi flaticon-lawyer text-[60px] col:text-[50px] text-white"></i> */}
                <ContabilidadIcon/>
              </div>
              <div className="pl-[24px]">
                <span className="text-azul1 text-[16px] font-normal">Contabilidad</span>
                <h3 className="text-[#333] text-[27px] col:text-[22px] font-medium">Integral</h3>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <div className="bg-white flex items-center sm:mx-[30px] col:mx-0">
              <div className="bg-azul1 h-[100px] col:h-[80px] col:w-[80px] w-[100px] text-center flex justify-center items-center px-[18px] col:p-0">
                {/* <i className="fi flaticon-scale text-[60px] col:text-[50px] text-white"></i> */}
                <BusinessIcon/>
              </div>
              <div className="pl-[24px]">
                <span className="text-azul1 text-[16px] font-normal">Auditoría</span>
                <h3 className="text-[#333] text-[27px] col:text-[22px] font-medium">Especializada</h3>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <div className="bg-white flex items-center sm:mx-[30px] col:mx-0">
              <div className="bg-azul1 h-[100px] col:h-[80px] col:w-[80px] w-[100px] text-center flex justify-center items-center px-[18px] col:p-0">
                {/* <i className="fi flaticon-network text-[60px] col:text-[50px] text-white"></i> */}
                <ManagementIcon/>
              </div>
              <div className="pl-[24px]">
                <span className="text-azul1 text-[16px] font-normal">Gestión</span>
                <h3 className="text-[#333] text-[27px] col:text-[22px] font-medium">Empresarial</h3>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <div className="bg-white flex items-center sm:mx-[30px] col:mx-0">
              <div className="bg-azul1 h-[100px] col:h-[80px] col:w-[80px] w-[100px] text-center flex justify-center items-center px-[18px] col:p-0">
                <i className="fi flaticon-network text-[60px] col:text-[50px] text-white"></i>
              </div>
              <div className="pl-[24px]">
                <span className="text-azul1 text-[16px] font-normal">Capacitación </span>
                <h3 className="text-[#333] text-[27px] col:text-[22px] font-medium">Individual y Colectiva</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
