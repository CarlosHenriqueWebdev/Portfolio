import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { buttonClassName } from "@/components/utils/buttonStyle";
import emailjs from "emailjs-com";

const Form = ({ didFormSubmit, setDidFormSubmit }) => {
  const initialFormData = {
    Name: "",
    Email: "",
    Message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const clearForm = () => {
    setFormData(initialFormData);
  };

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  const [isShaking, setShaking] = useState(false);
  const buttonClassIsShaking = `btn ${isShaking ? "shake" : ""}`;

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if the form is already being submitted
    if (isSubmitting) {
      return;
    }

    // Start the submission process
    setSubmitting(true);

    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        await emailjs.send(
          "service_uick65u",
          "template_lngfq3x",
          {
            from_name: formData.Name,
            to_email: formData.Email,
            message: formData.Message,
          },
          "BamDFrE-1b3vTZfHb"
        );

        // After successful submission, clear the form data
        clearForm();

        setDidFormSubmit(true);

        const elementAndOffset =
          document.getElementById("contactSection").getBoundingClientRect()
            .top +
          window.scrollY +
          -73;

        window.scrollTo({ top: elementAndOffset, behavior: "smooth" });
      } catch (error) {
        console.log("unexpected error while sending email:", error.message);
      } finally {
        setSubmitting(false);
      }
    } else {
      setSubmitting(false);

      setShaking(true);

      setTimeout(() => {
        setShaking(false);
      }, 1000);
    }
  };

  const handleChange = (changeEvent) => {
    setFormData({
      ...formData,
      [changeEvent.target.name]: changeEvent.target.value,
    });
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.Name.trim()) {
      errors.Name = "O Nome é obrigatório";
    }

    if (!data.Email.trim()) {
      errors.Email = "O Email é obrigatório";
    } else if (!isValidEmail(data.Email)) {
      errors.Email = "Endereço de email inválido";
    }

    if (!data.Message.trim()) {
      errors.Message = "A Mensagem é obrigatória";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const formFieldsHasError =
    formErrors.Name || formErrors.Email || formErrors.Message;

  const inputClassName =
    "bg-[black] w-full rounded-[4px] py-[8px] px-[12px] border-solid border-[2px] border-primaryBlue focus:border-[#00a1ff] focus:outline-none focus:transition-none focus:static focus:z-0 !text-[white]";

  return (
    <form action="" onSubmit={handleSubmit} className="">
      <div className="flex gap-[48px] flex-col">
        <div className="grid md:grid-cols-2 gap-[32px]">
          <div className="flex flex-col gap-[24px]">
            <div className="flex gap-[4px] flex-col">
              <label className="font-medium cursor-pointer" htmlFor="Name">
                Name:
                <span aria-hidden={true} className="text-lightViolet">
                  *
                </span>
              </label>

              <input
                className={`${inputClassName} ${
                  formErrors.Name ? "!border-crimsonRed" : ""
                }`}
                type="text"
                id="Name"
                name="Name"
                placeholder="Digite seu primeiro nome"
                value={formData.Name}
                onChange={handleChange}
                aria-live="assertive"
                aria-required="true"
              />

              {formErrors.Name && (
                <span aria-hidden={true} className="font-bold text-crimsonRed">
                  {formErrors.Name}
                </span>
              )}
            </div>

            <div className="flex gap-[4px] flex-col">
              <label className="font-medium cursor-pointer" htmlFor="Email">
                Email:
                <span aria-hidden={true} className="text-lightViolet">
                  *
                </span>
              </label>

              <input
                className={`${inputClassName}  ${
                  formErrors.Email ? "!border-crimsonRed" : ""
                }`}
                type="email"
                id="Email"
                name="Email"
                placeholder="Digite seu endereço de email"
                value={formData.Email}
                onChange={handleChange}
                aria-live="assertive"
                aria-required="true"
              />

              {formErrors.Email && (
                <span aria-hidden={true} className="font-bold text-crimsonRed">
                  {formErrors.Email}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-[4px] flex-col">
            <label className="font-medium cursor-pointer" htmlFor="Message">
              Message:
              <span aria-hidden={true} className="text-lightViolet">
                *
              </span>
            </label>

            <textarea
              className={`${inputClassName}  h-full ${
                formErrors.Message ? "!border-crimsonRed" : ""
              }`}
              id="Message"
              name="Message"
              rows="4"
              placeholder="Digite sua mensagem"
              value={formData.Message}
              onChange={handleChange}
              aria-live="assertive"
              aria-required="true"
            ></textarea>

            {formErrors.Message && (
              <span aria-hidden={true} className="font-bold text-crimsonRed">
                {formErrors.Message}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-[32px] flex flex-col gap-[16px] grid md:grid-cols-2 gap-[32px]">
        <button
          className={`${buttonClassIsShaking} button flex gap-[8px] items-center justify-center rounded-[8px] ${
            formFieldsHasError ? "!bg-crimsonRed error-button" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
          <Image
            aria-hidden={true}
            className="w-[16px]"
            src="/plane-icon.svg"
            alt="Avião Icone"
            width={0}
            height={0}
            unoptimized
          />
        </button>

        <div aria-live="assertive" role="alert">
          {formFieldsHasError && (
            <p className="visually-hidden">
              Houve um erro ao enviar o formulário. Por favor, corrija os
              seguintes campos e tente novamente:{" "}
              {formErrors.Name && ` ${formErrors.Name},`}
              {formErrors.LastName && ` ${formErrors.LastName},`}
              {formErrors.Email && ` ${formErrors.Email},`}
              {formErrors.Message && ` ${formErrors.Message},`}
              {formErrors.Location && ` ${formErrors.Location},`}
              {formErrors.InquiryType && ` ${formErrors.InquiryType}.`}
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default Form;
