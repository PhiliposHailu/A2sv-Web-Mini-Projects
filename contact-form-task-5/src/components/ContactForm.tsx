import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import "../css/style.css";

export default function ContactForm() {
  const form = useForm<formTypes>();
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitting, isSubmitSuccessful } = formState;
  const [submitted, setSubmitted] = useState(false);

  interface formTypes {
    name: string;
    email: string;
    message: string;
  }

  function onSubmit(data: formTypes) {
    console.log("Form submitted:- ", data);
    if (isSubmitSuccessful) {
        setSubmitted(true);
        reset();
        }
  }

  useEffect (() => {
        if (submitted) {
          const timer = setTimeout( () => {
            setSubmitted(false);
          }, 3000);
          return () => clearTimeout(timer);
        }
      }, [submitted, reset]);

  return (
    <>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="inputFieds">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required.",
              },
            })}
          />
        </div>
        <p className="error">{errors.name?.message}</p>

        <div className="inputFieds">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required.",
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email not valid.",
              },
            })}
          />
        </div>
        <p className="error">{errors.email?.message}</p>

        <div className="inputFieds">
          <label htmlFor="message">Message: </label>
          <input
            type="text"
            id="message"
            {...register("message", {
              required: {
                value: true,
                message: "Message is required.",
              },
            })}
          />
        </div>
        <p className="error">{errors.message?.message}</p>

        <button disabled={isSubmitting}>Submit</button>
      </form>
      {submitted && <p className="success">Form submitted successfully!</p>}

    </>
  );
}
