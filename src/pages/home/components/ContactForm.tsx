import { useState } from 'react';
import { FormikErrors, useFormik } from 'formik';
import { FormValues } from '../../../interfaces';
import { sendEmail } from '../../../helpers';
import './ContactForm.css';

export const ContactForm = () => {
    const [submit, setSubmit] = useState(false);
    const validate = ({ nombre, email, consulta }: FormValues) => {
        const errors: FormikErrors<FormValues> = {};
        if (!nombre) {
            errors.nombre = 'Requerido';
        };
        if (!email) {
            errors.email = 'Requerido';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Correo inválido';
        };
        if (!consulta) {
            errors.consulta = 'Requerido';
        };
        return errors;
    };
    const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
        initialValues: {
            nombre: '',
            email: '',
            telefono: '',
            consulta: ''
        },
        onSubmit: async (values) => {
            try {
                await sendEmail(values);
                setSubmit(true);
            } catch (error) {
                console.error('Error sending email: ', error);
            };
        },
        validate
    });
    return (
        <div className="contact-container">
            {!submit ? (
                <div className="contact-form">
                    <h2>Dejanos tu consulta</h2>
                    <hr className="divider"></hr>
                    <form noValidate onSubmit={handleSubmit} action="#" className="contact">
                        <div className="triple-form-input">
                            <div className="form-input">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" id="nombre" name="nombre" onChange={handleChange} onBlur={handleBlur} value={values.nombre} />
                            </div>
                            <div className="form-input">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                            </div>
                            <div className="form-input">
                                <label htmlFor="telefono">Teléfono</label>
                                <input type="text" id="telefono" name="telefono" onChange={handleChange} onBlur={handleBlur} value={values.telefono} />
                            </div>
                        </div>
                        <div className="triple-error-message">
                            {touched.nombre && errors.nombre && <span>{errors.nombre}</span>}
                            {touched.email && errors.email && <span>{errors.email}</span>}
                        </div>
                        <div className="form-input contact-question">
                            <label htmlFor="consulta">Consulta</label>
                            <textarea id="consulta" name="consulta" onChange={handleChange} onBlur={handleBlur} value={values.consulta} placeholder="Escribir..." />
                        </div>
                        {touched.consulta && errors.consulta && <span>{errors.consulta}</span>}
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            ) : (
                <div className="contact-success">
                    <h2>Consulta enviada</h2>
                    <hr className="divider"></hr>
                    <img className="success-icon" src="/icons/success.svg" alt="success icon" />
                    <p>Te contestaremos a la brevedad. Muchas gracias.</p>
                </div>
            )}
        </div>
    )
};