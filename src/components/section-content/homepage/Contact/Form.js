import Image from "next/image";
import React from "react";
import { useState } from "react";

import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const Form = ({ setDidFormSubmit }) => {
  const { t } = useTranslation();

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
  const [hasErrorOnSubmit, setHasErrorOnSubmit] = useState(false);

  const [isShaking, setShaking] = useState(false);
  const buttonClassIsShaking = `btn ${isShaking ? "shake" : ""}`;

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if the form is already being submitted
    if (isSubmitting) {
      return;
    }

    // Start the submission process
    setHasErrorOnSubmit(false);
    setSubmitting(true);

    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.Name,
            to_email: formData.Email,
            message: formData.Message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
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
        setHasErrorOnSubmit(true);

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
      errors.Name = t("formErrorText1");
    }

    if (!data.Email.trim()) {
      errors.Email = t("formErrorText2");
    } else if (!isValidEmail(data.Email)) {
      errors.Email = t("formErrorText3");
    }

    if (!data.Message.trim()) {
      errors.Message = t("formErrorText4");
    }

    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const formFieldsHasError =
    formErrors.Name ||
    formErrors.Email ||
    formErrors.Message ||
    hasErrorOnSubmit;

  const inputClassName =
    "bg-color03 w-full rounded-[4px] py-[8px] px-[12px]  focus:border-[#00a1ff] focus:outline-none focus:transition-none focus:static focus:z-0 !text-[white]";

  return (
    <form action="" onSubmit={handleSubmit} className="">
      <div className="flex gap-[48px] flex-col">
        <div className="grid md:grid-cols-2 gap-[32px]">
          <div className="flex flex-col gap-[24px]">
            <div className="flex gap-[4px] flex-col">
              <label className="font-medium cursor-pointer" htmlFor="Name">
                {t("labelText1")}:
                <span aria-hidden={true} className="text-color02">
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
                placeholder={t("placeHolderText1")}
                value={formData.Name}
                onChange={handleChange}
                aria-live="assertive"
                aria-required="true"
                aria-invalid={formErrors.Name ? "true" : "false"}
                aria-describedby="name-error"
              />

              {formErrors.Name && (
                <span
                  id="name-error"
                  role="alert"
                  className="font-bold text-crimsonRed"
                >
                  {formErrors.Name}
                </span>
              )}
            </div>

            <div className="flex gap-[4px] flex-col">
              <label className="font-medium cursor-pointer" htmlFor="Email">
                {t("labelText2")}:
                <span aria-hidden={true} className="text-color02">
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
                placeholder={t("placeHolderText2")}
                value={formData.Email}
                onChange={handleChange}
                aria-live="assertive"
                aria-required="true"
                aria-invalid={formErrors.Email ? "true" : "false"}
                aria-describedby="email-error"
              />

              {formErrors.Email && (
                <span
                  id="email-error"
                  role="alert"
                  className="font-bold text-crimsonRed"
                >
                  {formErrors.Email}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-[4px] flex-col">
            <label className="font-medium cursor-pointer" htmlFor="Message">
              {t("labelText3")}:
              <span aria-hidden={true} className="text-color02">
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
              placeholder={t("placeHolderText3")}
              value={formData.Message}
              onChange={handleChange}
              aria-live="assertive"
              aria-required="true"
              aria-invalid={formErrors.Message ? "true" : "false"}
              aria-describedby="message-error"
            ></textarea>

            {formErrors.Message && (
              <span
                id="message-error"
                role="alert"
                className="font-bold text-crimsonRed"
              >
                {formErrors.Message}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-[32px]  flex-col  grid md:grid-cols-2 gap-[32px]">
        <button
          className={`${buttonClassIsShaking} font-bold w-full button flex gap-[8px] items-center justify-center rounded-[8px] ${
            formFieldsHasError ? "!bg-crimsonRed error-button" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? t("formButtonText2") : t("formButtonText1")}
          <Image
            aria-hidden={true}
            className="w-[16px]"
            src="/assets/plane-icon.svg"
            alt={t("altText7")}
            width={0}
            height={0}
            unoptimized
          />
        </button>
      </div>
      {hasErrorOnSubmit && (
        <p
          role="alert"
          aria-live="assertive"
          className="text-crimsonRed mt-[12px] font-bold"
        >
          {t("accessibilityText12")}
        </p>
      )}
    </form>
  );
};

export default Form;
