import * as yup from 'yup';

const formContact = yup.object().shape({
  nombre: yup
    .string()
    .min(2, 'El texto debe tener al menos 5 caracteres')
    .required('Este campo es obligatorio'),
  email: yup
    .string()
    .email('Debe ser un correo electrónico válido')
    .required('Este campo es obligatorio'),
  telefono: yup
    .number('Debe ser un número de teléfono o celular válido')
    .required('Este campo es obligatorio'),
  mensaje: yup
    .string()
    .min(5, 'El mensaje debe tener al menos 5 caracteres')
    .required('Debes escribir un mensaje'),
});

export default formContact;