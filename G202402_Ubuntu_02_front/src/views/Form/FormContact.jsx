import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import formContact from '../../utils/schemas/schemaFormContact';
import { enviarFormulario } from '../../utils/services/axiosConfig';
import { AlertModal } from '../../components/AlertModal';
import { useAlertModal } from '../../utils/hooks/useAlertModal';
import { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';

export const FormContact = ({ idMic }) => {
  //Manejar alertas Snackbar
  const { enqueueSnackbar } = useSnackbar();
  const handleAlert = (mensaje, color) => {
    enqueueSnackbar(mensaje, {
      variant: color,
    });
  };

  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      telefono: '',
      mensaje: '',
    },
    validationSchema: formContact,
    onSubmit: formData => {
      try {
        formik.setSubmitting(true);

        const formEnviar = {
          descripcion: formData.mensaje.trim(),
          usuarioSolicitante: {
            nombre: formData.nombre.trim(),
            email: formData.email.trim(),
            telefono: formData.telefono.trim(),
          },
        };

        enviarFormulario(formEnviar, idMic)
          .then(response => {
            //MANEJO DE ALERTAS
            if (response && response.status === 200) {
              openAlert(
                true,
                'Formulario enviado con éxito',
                'Gracias por contactarnos, nos comunicaremos en breve'
              );
            } else {
              openAlert(
                false,
                'Error al enviar el formulario',
                'Por favor, volvé a intentarlo'
              );
            }
          })
          .catch(error => {
            console.error('Error al enviar el formulario:', error);
            openAlert(
              false,
              'Error al enviar el formulario',
              'Por favor, volvé a intentarlo'
            );
          });

        formik.setSubmitting(false);
      } catch (error) {
        formik.setSubmitting(false);
        console.log(error);
      }
    },
  });

  const [alertModal, openAlert, closeAlert, resendAlert] = useAlertModal(
    formik.handleSubmit
  );

  //Desabilitar boton de enviar
  const [sending, setSending] = useState(false);
  const [disabledButton, setDisableButton] = useState(false);
  useEffect(() => {
    if (
      Object.keys(formik.errors).length > 0 ||
      formik.isSubmitting ||
      sending ||
      formik.values.nombre === ""
    ) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [
    idMic,
    formik.errors,
    formik.isSubmitting,
    sending,
    formik.values,
  ]);

  const handleDisableButton = () => {
    setSending(true);
    openAlert(
      'loading',
      'Enviando Formulario',
      'Por favor, aguarde unos segundos'
    );
  };

  return (
    <>
      <AlertModal
        closeAlert={closeAlert}
        resendAlert={resendAlert}
        alert={alertModal}
        returnTo={'/microemprendimientos/categorias'}
      />
      <Container
        component="form"
        onSubmit={formik.handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          width: '100%',
          maxWidth: '600px',
          margin: 'auto',
        }}>
        <TextField
          fullWidth
          id="nombre"
          name="nombre"
          label="Nombre y Apellido"
          variant="outlined"
          value={formik.values.nombre}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={formik.isSubmitting}
          error={formik.touched.nombre && Boolean(formik.errors.nombre)}
          helperText={formik.touched.nombre && formik.errors.nombre}
          sx={{
            '& .MuiOutlinedInput-input': {
              fontWeight: '400',
            },

            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#090909',
              fontWeight: '400',
            },

            '& .MuiFormLabel-root': {
              color: theme =>
                formik.touched.nombre && formik.errors.nombre
                  ? theme.palette.gestion.error
                  : '#090909 !important',
              fontWeight: '400',
            },

            '& .MuiInputLabel-root.Mui-focused': {
              color: theme =>
                formik.touched.nombre && formik.errors.nombre
                  ? theme.palette.gestion.error
                  : `${theme.palette.primary.main} !important`,
            },

            '& .MuiFormHelperText-root': {
              color: theme =>
                formik.touched.nombre && formik.errors.nombre
                  ? theme.palette.gestion.error
                  : '#090909 !important',
              fontWeight: '400',
            },

            '& .Mui-disabled': {
              color: theme => `${theme.palette.primary.main} !important`,
            },
          }}
          InputProps={{
            sx: {
              '& .Mui-disabled': {
                WebkitTextFillColor: '#090909 !important',
              },
            },
          }}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Correo electrónico"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={formik.isSubmitting}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{
            '& .MuiOutlinedInput-input': {
              fontWeight: '400',
            },

            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#090909',
            },

            '& .MuiFormLabel-root': {
              color: theme =>
                formik.touched.email && formik.errors.email
                  ? theme.palette.gestion.error
                  : '#090909 !important',
              fontWeight: '400',
            },

            '& .MuiInputLabel-root.Mui-focused': {
              color: theme =>
                formik.touched.email && formik.errors.email
                  ? theme.palette.gestion.error
                  : `${theme.palette.primary.main} !important`,
            },

            '& .MuiFormHelperText-root': {
              color: theme =>
                formik.touched.email && formik.errors.email
                  ? theme.palette.gestion.error
                  : '#090909 !important',
              fontWeight: '400',
            },

            '& .Mui-disabled': {
              color: theme => `${theme.palette.primary.main} !important`,
            },
          }}
          InputProps={{
            sx: {
              '& .Mui-disabled': {
                WebkitTextFillColor: '#090909 !important',
              },
            },
          }}
        />
        <TextField
          fullWidth
          id="telefono"
          name="telefono"
          label="Teléfono"
          variant="outlined"
          value={formik.values.telefono}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={formik.isSubmitting}
          error={formik.touched.telefono && Boolean(formik.errors.telefono)}
          helperText={
            formik.touched.telefono && formik.errors.telefono
              ? formik.errors.telefono
              : 'Con el siguiente formato +54 9 261 002 002'
          }
          sx={{
            '& .MuiOutlinedInput-input': {
              fontWeight: '400',
            },

            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#090909',
            },

            '& .MuiFormLabel-root': {
              color: theme =>
                formik.touched.telefono && formik.errors.telefono
                  ? theme.palette.gestion.error
                  : '#090909 !important',
              fontWeight: '400',
            },

            '& .MuiInputLabel-root.Mui-focused': {
              color: theme =>
                formik.touched.telefono && formik.errors.telefono
                  ? theme.palette.gestion.error
                  : `${theme.palette.primary.main} !important`,
            },

            '& .MuiFormHelperText-root': {
              color: theme =>
                formik.touched.telefono && formik.errors.telefono
                  ? theme.palette.gestion.error
                  : '#090909 !important',
              fontWeight: '400',
            },

            '& .Mui-disabled': {
              color: theme => `${theme.palette.primary.main} !important`,
            },
          }}
          InputProps={{
            sx: {
              '& .Mui-disabled': {
                WebkitTextFillColor: '#090909 !important',
              },
            },
          }}
        />
        <Box>
          <TextField
            fullWidth
            id="mensaje"
            name="mensaje"
            label="Mensaje"
            variant="outlined"
            multiline
            rows={4}
            value={formik.values.mensaje}
            inputProps={{
              maxLength: 300,
            }}
            onChange={e => {
              if (e.target.value.length <= 300) {
                formik.handleChange(e);
              }
            }}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
            error={formik.touched.mensaje && Boolean(formik.errors.mensaje)}
            helperText={formik.touched.mensaje && formik.errors.mensaje}
            sx={{
              '& .MuiOutlinedInput-input': {
                fontWeight: '400',
              },

              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#090909',
              },

              '& .MuiFormLabel-root': {
                color: theme =>
                  formik.touched.mensaje && formik.errors.mensaje
                    ? theme.palette.gestion.error
                    : '#090909 !important',
                fontWeight: '400',
              },

              '& .MuiInputLabel-root.Mui-focused': {
                color: theme =>
                  formik.touched.mensaje && formik.errors.mensaje
                    ? theme.palette.gestion.error
                    : `${theme.palette.primary.main} !important`,
              },

              '& .MuiFormHelperText-root': {
                color: theme =>
                  formik.touched.mensaje && formik.errors.mensaje
                    ? theme.palette.gestion.error
                    : '#090909 !important',
                fontWeight: '400',
              },

              '& .Mui-disabled': {
                color: theme => `${theme.palette.primary.main} !important`,
              },
            }}
            InputProps={{
              sx: {
                '& .Mui-disabled': {
                  WebkitTextFillColor: '#090909 !important',
                },
              },
            }}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
              padding: '0 15px',
              '& p': {
                fontSize: '13px',
                lineHeight: '1.66',
                fontWeight: 400,
                marginTop: '3px',
                padding: '0',
              },
            }}>
            <Typography
              component="p"
              color={theme =>
                formik.touched.mensaje && formik.errors.mensaje
                  ? theme.palette.gestion.error
                  : '#090909'
              }>
              Máximo 300 caracteres
            </Typography>
            <Typography
              component="p"
              color={theme =>
                formik.touched.mensaje && formik.errors.mensaje
                  ? theme.palette.gestion.error
                  : '#090909'
              }>
              {formik.values.mensaje.length}/300
            </Typography>
          </Box>
        </Box>
        <Button
          type="submit"
          disabled={disabledButton}
          sx={{
            width: '100%',
            padding: '0 20px',
            height: '40px',
            my: '10px',
            justifyContent: 'space-evenly',
            borderRadius: '100px',
            color: 'blanco.main',
            backgroundColor: disabledButton ? 'gris.medio' : 'azul.main',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'azul.main',
            },
            '&:disabled': {
              brackgoundColor: 'gris.medio',
              color: 'gris.oscuro',
              cursor: 'not-allowed',
            },
          }}>
          <Typography
            onClick={handleDisableButton}
            sx={{
              fontWeight: '700',
              fontSize: '16px',
              lineHeight: '30px',
              textAlign: 'center',
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '&:disabled': {
                color: theme => theme.palette.white,
                cursor: 'not-allowed',
              },
            }}>
            Enviar
          </Typography>
        </Button>
      </Container>
    </>
  );
};
