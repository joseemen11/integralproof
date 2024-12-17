import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
// import L from "leaflet";
import ContactForm from "../ContactFrom/ContactForm";

// Carga dinámica del mapa para evitar errores de SSR
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

const Contactpage = () => {
  const position = [-16.50304876202815, -68.13146458952413]; // Coordenadas de La Paz, Bolivia
  const [isClient, setIsClient] = useState(false);
  const [customIcon, setCustomIcon] = useState(null);

  // Asegurarse de que el renderizado ocurre solo en el cliente
  useEffect(() => {
    setIsClient(true);

    // Dynamically import leaflet and set up the custom icon
    import("leaflet").then((L) => {
      const newCustomIcon = new L.Icon({
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl:
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
        shadowSize: [41, 41],
      });

      setCustomIcon(newCustomIcon);
    });
  }, []);

  return (
    <section className="relative pt-[120px] pb-0 z-30">
      <div className="wraper">
        <div className="grid grid-cols-12">
          <div className="col-span-1"></div>
          <div className="col-span-10 md:col-span-12">
            <div className="pb-[100px] sm:pb-[60px]">
              <div className="grid grid-cols-12 gap-3">
                {/* Información de contacto */}
                <div className="col-span-4 md:col-span-6 sm:col-span-12 md:mb-7">
                  <div className="text-center p-[40px] shadow-[0_5px_15px_0_rgba(62,65,159,0.1)]">
                    <div className="w-[85px] h-[85px] bg-[#f5f5f5] leading-[85px] text-center mx-auto rounded-[50%]">
                      <div className="icon">
                        <i
                          className="text-[35px] leading-[85px] text-[#282e3f] fa fa-map-marker"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <h2 className="text-[25px] text-[#282e3f] font-medium my-[20px]">
                      Dirección
                    </h2>
                    <p className="text-[#666] text-[14px] leading-[15px]">
                      El Prado - Av 16 de Julio Edificio Ex Hotel Plaza, Piso 4
                      OF. 417
                    </p>
                  </div>
                </div>
                {/* Correo */}
                <div className="col-span-4 md:col-span-6 sm:col-span-12 md:mb-7">
                  <div className="text-center p-[40px] shadow-[0_5px_15px_0_rgba(62,65,159,0.1)]">
                    <div className="w-[85px] h-[85px] bg-[#f5f5f5] leading-[85px] text-center mx-auto rounded-[50%]">
                      <div className="icon">
                        <i
                          className="text-[35px] leading-[85px] text-[#282e3f] fa fa-envelope"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <h2 className="text-[25px] text-[#282e3f] font-medium my-[20px]">
                      Correo
                    </h2>
                    <p className="text-[#666] text-[16px] leading-[22px]">
                      integralprosrl@gmail.com
                    </p>
                  </div>
                </div>
                {/* Teléfono */}
                <div className="col-span-4 md:col-span-6 sm:col-span-12 md:mb-7">
                  <div className="text-center p-[40px] shadow-[0_5px_15px_0_rgba(62,65,159,0.1)]">
                    <div className="w-[85px] h-[85px] bg-[#f5f5f5] leading-[85px] text-center mx-auto rounded-[50%]">
                      <div className="icon">
                        <i
                          className="text-[35px] leading-[85px] text-[#282e3f] fa fa-phone"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <h2 className="text-[25px] text-[#282e3f] font-medium my-[20px]">
                      Teléfono
                    </h2>
                    <p className="text-[#666] text-[16px] leading-[22px]">
                      <a
                        href="https://wa.me/76721382"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        76721382
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[440px] mx-auto text-center mb-[50px]">
              <h2 className="text-[35px] col:text-[25px] text-[#282e3f] font-base-font font-bold mb-[20px]">
                ¿Tienes alguna duda?
              </h2>
              <p className="text-[#666] text-[16px] leading-[22px]">
                Envía tu mensaje y nosotros contestaremos al correo
              </p>
            </div>
            <div className="p-[50px] bg-white relative z-50 shadow-[0_8px_17px_0_rgba(0,0,0,20%),0_6px_20px_0_rgba(0,0,0,19%)] sm:p-7 sm:pt-[50px]">
              <ContactForm />
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
      {/* Mapa */}
      <div className="wpo-contact-map-section relative z-10">
        <h2 className="hidden">Mapa de contacto</h2>
        <div className="h-[550px]">
          {isClient && customIcon && (
            <MapContainer
              center={position}
              zoom={20}
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position} icon={customIcon}>
                <Popup>
                  <a
                    href={`https://www.google.com/maps?q=${position[0]},${position[1]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Abrir en Google Maps
                  </a>
                </Popup>
              </Marker>
            </MapContainer>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
