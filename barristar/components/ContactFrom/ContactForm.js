import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Mensajes en español
const mensajesEnEspañol = {
  accepted: "El campo :attribute debe ser aceptado.",
  after: "El campo :attribute debe ser una fecha después de :date.",
  after_or_equal:
    "El campo :attribute debe ser una fecha igual o posterior a :date.",
  alpha: "El campo :attribute solo puede contener letras.",
  alpha_space: "El campo :attribute solo puede contener letras y espacios.",
  alpha_num: "El campo :attribute solo puede contener letras y números.",
  alpha_num_space:
    "El campo :attribute solo puede contener letras, números y espacios.",
  alpha_num_dash:
    "El campo :attribute solo puede contener letras, números y guiones.",
  array: "El campo :attribute debe ser un arreglo.",
  before: "El campo :attribute debe ser una fecha antes de :date.",
  between: "El campo :attribute debe estar entre :min y :max.",
  boolean: "El campo :attribute debe ser verdadero o falso.",
  card_exp: "El campo :attribute debe ser una fecha de expiración válida.",
  card_num:
    "El campo :attribute debe ser un número de tarjeta de crédito válido.",
  currency: "El campo :attribute debe ser una moneda válida.",
  date: "El campo :attribute debe ser una fecha válida.",
  email: "El campo :attribute debe ser un correo electrónico válido.",
  integer: "El campo :attribute debe ser un número entero.",
  max: "El campo :attribute no debe ser mayor a :max.",
  min: "El campo :attribute debe ser al menos :min.",
  numeric: "El campo :attribute debe contener números.",
  phone: "El campo :attribute debe ser un número de teléfono válido.",
  regex: "El formato de :attribute no es válido.",
  required: "El campo :attribute es obligatorio.",
  url: "El campo :attribute debe ser una URL válida.",
};

const ContactForm = () => {
  const [forms, setForms] = useState({
    nombre: "",
    email: "",
    servicio: "",
    telefono: "",
    mensaje: "",
  });

  const serviceID = "service_2gnwr1d";
  const templateID = "template_728cbrd";
  const userID = "Z7T5FvMNez2BKIgdt";

  const [validator] = useState(
    new SimpleReactValidator({
      className: "errorMessage",
      messages: mensajesEnEspañol,
    })
  );

  const changeHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
    validator.showMessageFor(e.target.name); // Mostrar mensaje de error en el campo correspondiente
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      const emailData = {
        to_name: "IntegralPro",

        from_name: forms.nombre,

        message: `Servicio: ${forms.servicio}\nTeléfono: ${forms.telefono}\nMensaje: ${forms.mensaje}`,

        email_id: forms.email,
      };
      emailjs
        .send(serviceID, templateID, emailData, userID)
        .then((response) => {
          toast.success("Formulario enviado correctamente");
          setForms({
            nombre: "",
            email: "",
            servicio: "",
            telefono: "",
            mensaje: "",
          });
          validator.hideMessages();
        })
        .catch((error) => {
          console.error("Error al enviar el email:", error.text);
          toast.error(
            "Hubo un error al enviar el formulario, inténtalo de nuevo."
          );
        });
    } else {
      validator.showMessages(); // Mostrar mensajes si hay errores
    }
  };

  return (
    <form
      method="post"
      className="contact-validation-active mx-[-15px] overflow-hidden"
      id="contact-form-main"
      onSubmit={submitHandler}
    >
      <div className="w-[calc(50%-30px)] float-left mx-[15px] mb-[25px] col:float-none col:w-[calc(100%-25px)]">
        <input
          className="form-control w-full bg-transparent h-[50px] border border-[#ebebeb] text-[#666] transition-all pl-[25px] focus:outline-0 focus:shadow-none focus:border-section focus:bg-transparent"
          value={forms.nombre}
          type="text"
          name="nombre"
          onBlur={changeHandler}
          onChange={changeHandler}
          placeholder="Tu Nombre"
        />
        {validator.message("nombre", forms.nombre, "required|alpha_space")}
      </div>

      <div className="w-[calc(50%-30px)] float-left mx-[15px] mb-[25px] col:float-none col:w-[calc(100%-25px)]">
        <input
          className="form-control w-full bg-transparent h-[50px] border border-[#ebebeb] text-[#666] transition-all pl-[25px] focus:outline-0 focus:shadow-none focus:border-section focus:bg-transparent"
          value={forms.email}
          type="email"
          name="email"
          onBlur={changeHandler}
          onChange={changeHandler}
          placeholder="Tu Correo"
        />
        <div style={{ minHeight: "15px" }}>
          {validator.message("email", forms.email, "required|email")}
        </div>
      </div>

      <div className="w-[calc(50%-30px)] float-left mx-[15px] mb-[25px] col:float-none col:w-[calc(100%-25px)]">
        <input
          className="form-control w-full bg-transparent h-[50px] border border-[#ebebeb] text-[#666] transition-all pl-[25px] focus:outline-0 focus:shadow-none focus:border-section focus:bg-transparent"
          value={forms.telefono}
          type="text"
          name="telefono"
          onBlur={changeHandler}
          onChange={changeHandler}
          placeholder="Tu Teléfono"
        />
        <div style={{ minHeight: "15px" }}>
          {validator.message("telefono", forms.telefono, "required|numeric")}
        </div>
      </div>

      <div className="w-[calc(50%-30px)] float-left mx-[15px] mb-[25px] col:float-none col:w-[calc(100%-25px)]">
        <select
          className="form-control w-full bg-transparent h-[50px] border border-[#ebebeb] text-[#666] transition-all pl-[25px] focus:outline-0 focus:shadow-none focus:border-section focus:bg-transparent"
          value={forms.servicio}
          name="servicio"
          onBlur={changeHandler}
          onChange={changeHandler}
        >
          <option value="">Selecciona un servicio</option>
          <option value="Contabilidad">Servicio de Contabilidad</option>
          <option value="Auditoria">Servicio de Auditoría</option>
          <option value="Gestion">Servicio de Gestión Empresarial</option>
        </select>
        <div style={{ minHeight: "15px" }}>
          {validator.message("servicio", forms.servicio, "required")}
        </div>
      </div>

      <div className="w-[calc-(100%-25px)] mb-[25px] mx-[15px]">
        <textarea
          className="form-control w-full bg-transparent h-[180px] border border-[#ebebeb] text-[#666] transition-all pt-[15px] pl-[25px] focus:outline-0 focus:shadow-none focus:border-section focus:bg-transparent"
          value={forms.mensaje}
          name="mensaje"
          placeholder="Tu Mensaje"
          onBlur={changeHandler}
          onChange={changeHandler}
        />
        {validator.message("mensaje", forms.mensaje, "required")}
      </div>

      <div className="text-center w-full mb-[10px]">
        <button
          type="submit"
          className="bg-navbar text-[#fff] inline-block py-[12px] px-[22px] border border-section rounded-[55px] capitalize transition-all hover:bg-section hover:border-transparent"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
