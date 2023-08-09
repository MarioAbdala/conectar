import { FormValues } from "../interfaces";

export const createEmail = ({ nombre, email, telefono, consulta } : FormValues) => {
  return `Hola Mario, ${nombre} tiene una consulta. \n ${nombre} tiene la siguiente consulta : '${consulta}'. \n Su email es: '${email}', y su teléfono '${telefono}'. \n Gracias!`;
};