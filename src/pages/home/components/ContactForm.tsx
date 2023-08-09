import { useState } from 'react';
import { FormikErrors, useFormik } from 'formik';
import { FormValues } from '../../../interfaces';
import { sendEmail } from '../../../helpers';
import { Spinner } from '.';
import './ContactForm.css';

export const ContactForm = () => {
    const [submit, setSubmit] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const validate = ({ nombre, email, consulta, telefono }: FormValues) => {
        const errors: FormikErrors<FormValues> = {};
        if (!nombre) {
            errors.nombre = 'input-error';
        };
        if (!email) {
            errors.email = 'input-error';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'input-error';
        };
        if (!consulta) {
            errors.consulta = 'input-error';
        };
        if (!telefono) {
            errors.telefono = 'input-error';
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
                setIsLoading(true);
                await sendEmail(values);
                setSubmit(true);
                setIsLoading(false);
            } catch (error) {
                console.error('Error sending email: ', error);
                setIsLoading(false);
            };
        },
        validate
    });
    return (
        <div className="contact-container">
            {!isLoading ? (
                !submit ? (
                    <div className="contact-form">
                        <h2>Dejanos tu consulta</h2>
                        <hr className="divider"></hr>
                        <form noValidate onSubmit={handleSubmit} action="#" className="contact">
                            <div className="triple-form-input">
                                <div className="form-input">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input type="text" id="nombre" name="nombre" onChange={handleChange} onBlur={handleBlur} value={values.nombre} className={`${(touched.nombre && errors.nombre) ? errors.nombre : ""}`} />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} className={`${(touched.email && errors.email) ? errors.email : ""}`} />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="telefono">Teléfono</label>
                                    <input type="text" id="telefono" name="telefono" onChange={handleChange} onBlur={handleBlur} value={values.telefono} className={`${(touched.telefono && errors.telefono) ? errors.telefono : ""}`} />
                                </div>
                            </div>
                            <div className="form-input contact-question">
                                <label htmlFor="consulta">Consulta</label>
                                <textarea id="consulta" name="consulta" onChange={handleChange} onBlur={handleBlur} value={values.consulta} placeholder="Escribir..." className={`${(touched.consulta && errors.consulta) ? errors.consulta : ""}`} />
                            </div>
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
                )
            ) : (
                <div className="contact-loading">
                    <Spinner />
                </div>
            )}
        </div>
    )
};