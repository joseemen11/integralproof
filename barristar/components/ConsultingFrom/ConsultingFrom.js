
  import React, { useState } from "react";
  import SimpleReactValidator from "simple-react-validator";

  // Mensajes en español
  const mensajesEnEspañol = {
    accepted: 'El campo :attribute debe ser aceptado.',
    after: 'El campo :attribute debe ser una fecha después de :date.',
    after_or_equal: 'El campo :attribute debe ser una fecha igual o posterior a :date.',
    alpha: 'El campo :attribute solo puede contener letras.',
    alpha_space: 'El campo :attribute solo puede contener letras y espacios.',
    alpha_num: 'El campo :attribute solo puede contener letras y números.',
    alpha_num_space: 'El campo :attribute solo puede contener letras, números y espacios.',
    alpha_num_dash: 'El campo :attribute solo puede contener letras, números y guiones.',
    array: 'El campo :attribute debe ser un arreglo.',
    before: 'El campo :attribute debe ser una fecha antes de :date.',
    between: 'El campo :attribute debe estar entre :min y :max.',
    boolean: 'El campo :attribute debe ser verdadero o falso.',
    card_exp: 'El campo :attribute debe ser una fecha de expiración válida.',
    card_num: 'El campo :attribute debe ser un número de tarjeta de crédito válido.',
    currency: 'El campo :attribute debe ser una moneda válida.',
    date: 'El campo :attribute debe ser una fecha válida.',
    email: 'El campo :attribute debe ser un correo electrónico válido.',
    integer: 'El campo :attribute debe ser un número entero.',
    max: 'El campo :attribute no debe ser mayor a :max.',
    min: 'El campo :attribute debe ser al menos :min.',
    numeric: 'El campo :attribute debe ser un número.',
    phone: 'El campo :attribute debe ser un número de teléfono válido.',
    regex: 'El formato de :attribute no es válido.',
    required: 'El campo :attribute es obligatorio.',
    url: 'El campo :attribute debe ser una URL válida.',
  };

  const ConsultingForm = () => {
    const [forms, setForms] = useState({
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    });

    const [validator] = useState(
      new SimpleReactValidator({
        className: "errorMessage",
        messages: mensajesEnEspañol, // Aquí pasamos los mensajes en español
      })
    );

    const changeHandler = (e) => {
      setForms({ ...forms, [e.target.name]: e.target.value });
      validator.showMessageFor(e.target.name);
    };

    const submitHandler = (e) => {
      e.preventDefault();
      if (validator.allValid()) {
        alert("Formulario enviado correctamente");
        setForms({
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
        });
        validator.hideMessages();
      } else {
        validator.showMessages(); // Muestra los mensajes si hay errores
      }
    };

    return (
      <form
        method="post"
        className="contact-validation-active mx-[-15px] overflow-hidden contact-form"
        id="contact-form-main"
        onSubmit={submitHandler}
      >
        <div className="w-[calc(50%-30px)] float-left mx-[15px] mb-[25px] col:float-none col:w-[calc(100%-25px)]">
          <input
            className="form-control w-full font-normal bg-white h-[50px] border border-azul1 text-black transition-all pl-[15px] focus:outline-0 focus:shadow-none focus:border-transparent focus:bg-white"
            value={forms.name}
            type="text"
            name="name"
            onBlur={changeHandler}
            onChange={changeHandler}
            placeholder="Tu Nombre"
          />
          {validator.message("name", forms.name, "required|alpha_space")}
        </div>
        <div className="w-[calc(50%-30px)] float-left mx-[15px] mb-[25px] col:float-none col:w-[calc(100%-25px)]">
          <input
            className="form-control w-full font-normal bg-white h-[50px] border border-azul1 text-black transition-all pl-[15px] focus:outline-0 focus:shadow-none focus:border-transparent focus:bg-white"
            value={forms.email}
            type="email"
            name="email"
            onBlur={changeHandler}
            onChange={changeHandler}
            placeholder="Tu Correo"
          />
          {validator.message("email", forms.email, "required|email")}
        </div>
        <div className="w-[calc(50%-30px)] float-left mx-[15px] mb-[25px] col:float-none col:w-[calc(100%-25px)]">
          <input
            className="form-control w-full font-normal bg-white h-[50px] border border-azul1 text-black transition-all pl-[15px] focus:outline-0 focus:shadow-none focus:border-transparent focus:bg-white"
            value={forms.phone}
            type="text"
            name="phone"
            onBlur={changeHandler}
            onChange={changeHandler}
            placeholder="Tu Teléfono"
          />
          {validator.message("phone", forms.phone, "required|phone")}
        </div>
        <div className="w-[calc(50%-30px)] float-left mx-[15px] mb-[25px] col:float-none col:w-[calc(100%-25px)]">
          <select
            className="form-control w-full font-normal bg-white h-[50px] border border-azul1 text-black transition-all pl-[15px] focus:outline-0 focus:shadow-none focus:border-transparent focus:bg-white"
            value={forms.subject}
            name="subject"
            onBlur={changeHandler}
            onChange={changeHandler}
          >
            <option value="">Selecciona un servicio</option>
            <option value="Contabilidad">Servicio de Contabilidad</option>
            <option value="Auditoria">Servicio de Auditoría</option>
            <option value="Gestion">Servicio de Gestión Empresarial</option>
            <option value="Gestion">Servicio de Capacitación</option>
          </select>
          {validator.message("subject", forms.subject, "required")}
        </div>
        <div className="w-[calc-(100%-25px)] mb-[25px] mx-[15px]">
          <textarea
            className="form-control w-full bg-white h-[150px] border border-azul1 text-black transition-all pt-[15px] pl-[15px] focus:outline-0 focus:shadow-none focus:border-transparent focus:bg-white"
            value={forms.message}
            name="message"
            placeholder="Tu Mensaje"
            onBlur={changeHandler}
            onChange={changeHandler}
          />
          {validator.message("message", forms.message, "required")}
        </div>
        <div className="text-left w-full mb-[10px] ml-[16px]">
          <button
            type="submit"
            className="bg-azul1 text-[16px] rounded-lg font-semibold text-white px-[38px] py-[10px] capitalize inline-block mt-[6px] transition ease-in-out duration-300 hover:bg-verde1"
          >
            Enviar
          </button>
        </div>
      </form>
    );
  };

  export default ConsultingForm;