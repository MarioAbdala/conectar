import { FormValues } from "../interfaces";
import emailjs from 'emailjs-com';

export const sendEmail = async ({ nombre, email, consulta, telefono }: FormValues) => {
  try {
    emailjs.init(import.meta.env.VITE_SOME_KEY);

    const templateParams = {
      nombre,
      email,
      consulta,
      telefono
    };

    const response = await emailjs.send("service_h4z8dsa", "template_axo51oq", templateParams);

    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};