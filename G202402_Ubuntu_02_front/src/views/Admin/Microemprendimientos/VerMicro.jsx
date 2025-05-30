import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import { UploadImages } from '../components/UploadImages';
import { useSnackbar } from 'notistack';

export const VerMicro = ({ microemprendimiento, setVer }) => {
  //Manejar alertas Snackbar
  const { enqueueSnackbar } = useSnackbar();
  const handleAlert = (mensaje, color) => {
    enqueueSnackbar(mensaje, {
      variant: color,
    });
  };

  //Llamar informacion de los selects
  const [images, setImages] = useState(microemprendimiento.imagenes || []);

  return (
    <>
      <Container
        component="form"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          width: '100%',
          maxWidth: '600px',
          margin: '10px auto 0',
          padding: '0',
        }}>
        {/* FORMULARIO NOMBRE */}
        <TextField
          fullWidth
          id="nombre"
          name="nombre"
          label="Nombre del Microemprendimiento*"
          variant="outlined"
          value={microemprendimiento.title}
          disabled={true}
          sx={{
            '& .MuiOutlinedInput-input': {
              fontWeight: '400',
            },

            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#090909',
              fontWeight: '400',
            },

            '& .MuiFormLabel-root': {
              color: '#090909 !important',
              fontWeight: '400',
            },

            '& .MuiInputLabel-root.Mui-focused': {
              color: 'azul.main',
            },

            '& .MuiFormHelperText-root': {
              color: '#090909 !important',
              fontWeight: '400',
              fontSize: '13px',
            },

            '& .Mui-disabled': {
              color: `azul.main !important`,
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

        {/* FORMULARIO CATEGORIAS */}
        <TextField
          fullWidth
          id="categoria"
          name="categoria"
          label="Categoria*"
          variant="outlined"
          value={microemprendimiento.category}
          disabled={true}
          sx={{
            '& .MuiOutlinedInput-input': {
              fontWeight: '400',
            },

            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#090909',
              fontWeight: '400',
            },

            '& .MuiFormLabel-root': {
              color: '#090909 !important',
              fontWeight: '400',
            },

            '& .MuiInputLabel-root.Mui-focused': {
              color: `azul.main !important`,
            },

            '& .MuiFormHelperText-root': {
              color: '#090909 !important',
              fontWeight: '400',
              fontSize: '13px',
            },

            '& .Mui-disabled': {
              color: `azul.main !important`,
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

        {/* FORMULARIO Subcategoria */}
        <TextField
          fullWidth
          id="subcategoria"
          name="subcategoria"
          label="Subcategoría*"
          variant="outlined"
          value={microemprendimiento.subcategory}
          disabled={true}
          sx={{
            '& .MuiOutlinedInput-input': {
              fontWeight: '400',
            },

            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#090909',
              fontWeight: '400',
            },

            '& .MuiFormLabel-root': {
              color: '#090909 !important',
              fontWeight: '400',
            },

            '& .MuiInputLabel-root.Mui-focused': {
              color: `azul.main !important`,
            },

            '& .MuiFormHelperText-root': {
              color: '#090909 !important',
              fontWeight: '400',
              fontSize: '13px',
            },

            '& .Mui-disabled': {
              color: `azul.main!important`,
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

        {/* FORMULARIO PAIS */}
        <TextField
          fullWidth
          id="nombre"
          name="nombre"
          label="País*"
          variant="outlined"
          value={microemprendimiento.pais}
          disabled={true}
          sx={{
            '& .MuiOutlinedInput-input': {
              fontWeight: '400',
            },

            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#090909',
              fontWeight: '400',
            },

            '& .MuiFormLabel-root': {
              color: '#090909 !important',
              fontWeight: '400',
            },

            '& .MuiInputLabel-root.Mui-focused': {
              color: `azul.main !important`,
            },

            '& .MuiFormHelperText-root': {
              color: '#090909 !important',
              fontWeight: '400',
              fontSize: '13px',
            },

            '& .Mui-disabled': {
              color: `azul.main !important`,
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

        {/* FORMULARIO Provincias */}
        <TextField
          fullWidth
          id="provincia"
          name="provincia"
          label="Provincia/Estado*"
          variant="outlined"
          value={microemprendimiento.provincia}
          disabled={true}
          sx={{
            '& .MuiOutlinedInput-input': {
              fontWeight: '400',
            },

            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#090909',
              fontWeight: '400',
            },

            '& .MuiFormLabel-root': {
              color: '#090909 !important',
              fontWeight: '400',
            },

            '& .MuiInputLabel-root.Mui-focused': {
              color: `azul.main !important`,
            },

            '& .MuiFormHelperText-root': {
              color: '#090909 !important',
              fontWeight: '400',
              fontSize: '13px',
            },

            '& .Mui-disabled': {
              color: `azul.main !important`,
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

        {/* FORMULARIO ciudad */}
        <TextField
          fullWidth
          id="ciudad"
          name="ciudad"
          label="Ciudad*"
          variant="outlined"
          value={microemprendimiento.ciudad}
          disabled={true}
          sx={{
            '& .MuiOutlinedInput-input': {
              fontWeight: '400',
            },

            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#090909',
              fontWeight: '400',
            },

            '& .MuiFormLabel-root': {
              color: '#090909 !important',
              fontWeight: '400',
            },

            '& .MuiInputLabel-root.Mui-focused': {
              color: `azul.main !important`,
            },

            '& .MuiFormHelperText-root': {
              color: '#090909 !important',
              fontWeight: '400',
              fontSize: '13px',
            },

            '& .Mui-disabled': {
              color: `azul.main!important`,
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

        {/* Field Descripcion */}
        <TextField
          fullWidth
          id="descripcion"
          name="descripcion"
          label="Descripción del Microemprendimiento*"
          variant="outlined"
          multiline
          rows={5}
          value={microemprendimiento.description}
          disabled={true}
          sx={{
            '& .MuiOutlinedInput-input': {
              fontWeight: '400',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#090909',
            },

            '& .MuiFormLabel-root': {
              color: '#090909 !important',
              fontWeight: '400',
            },

            '& .MuiInputLabel-root.Mui-focused': {
              color: `azul.main !important`,
            },

            '& .MuiFormHelperText-root': {
              color: '#090909 !important',
              fontWeight: '400',
              fontSize: '13px',
            },

            '& .Mui-disabled': {
              color: `azul.main !important`,
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

        {/* Field Mas Informacion */}
        <TextField
          fullWidth
          id="masInfo"
          name="masInfo"
          label="Más Información del Microemprendimiento*"
          variant="outlined"
          multiline
          rows={5}
          value={microemprendimiento.moreinfo}
          disabled={true}
          sx={{
            '& .MuiOutlinedInput-input': {
              fontWeight: '400',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#090909',
            },

            '& .MuiFormLabel-root': {
              color: '#090909 !important',
              fontWeight: '400',
            },

            '& .MuiInputLabel-root.Mui-focused': {
              color: `azul.main !important`,
            },

            '& .MuiFormHelperText-root': {
              color: '#090909 !important',
              fontWeight: '400',
              fontSize: '13px',
            },

            '& .Mui-disabled': {
              color: `azul.main !important`,
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

        <UploadImages
          images={images}
          setImages={setImages}
          direction={'row'}
          zoom={true}
        />

        <Button
          onClick={() => {
            setVer([]);
          }}
          sx={{
            width: '100%',
            padding: '0 20px',
            height: '40px',
            my: '10px',
            justifyContent: 'space-evenly',
            borderRadius: '100px',
            color: 'blanco.main',
            backgroundColor: 'azul.main',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'azul.main',
            },
          }}>
          <Typography
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
            }}>
            Volver
          </Typography>
        </Button>
      </Container>
    </>
  );
};
