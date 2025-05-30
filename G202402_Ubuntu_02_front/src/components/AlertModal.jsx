import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Button, Modal, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

export const AlertModal = ({
  alert,
  closeAlert,
  resendAlert,
  returnTo,
  setSelectedContacto,
  setValue,
  setCrear,
  setEditar,
}) => {
  // Define la animación
  const slideInFromLeft = keyframes`
0% {
  transform: translateY(-100%);
  opacity: 0;
}
100% {
  transform: translateY(0);
  opacity: 1;
}
`;

  return (
    <div>
      <Modal
        open={alert.open}
        onClose={closeAlert}
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          animation: `${slideInFromLeft} 0.5s forwards`,
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '328px',
            height: '200px',
            bgcolor: 'blanco.main',
            borderRadius: '20px',
            padding: '16px',
            textAlign: 'center',
            gap: '10px',
          }}>
          {alert.icon === 'loading' ? (
            <CloudUploadIcon
              sx={{
                color: 'azul.main',
                width: '50px',
                height: '50px',
              }}
            />
          ) : alert.icon ? (
            <CheckCircleOutlineIcon
              sx={{
                color: 'gestion.exito',
                width: '50px',
                height: '50px',
              }}
            />
          ) : (
            <HighlightOffIcon
              sx={{
                color: 'gestion.error',
                width: '50px',
                height: '50px',
              }}
            />
          )}
          <Typography
            sx={{
              fontSize: '18px',
              lineHeight: '25px',
              fontWeight: 400,
              color: 'negro.main',
            }}>
            {alert.title}
          </Typography>
          {alert.info && (
            <Typography
              sx={{
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: 400,
                color: 'negro.main',
                textAlign: 'start',
              }}>
              {alert.info}
            </Typography>
          )}
          {alert.icon === 'loading' ? null : (
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                m: 0,
                justifyContent: 'end',
              }}>
              <Button
                sx={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: 600,
                  color: 'azul.main',
                  textAlign: 'center',
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: 'gris.medio',
                  },
                }}
                onClick={() => {
                  if (setSelectedContacto) setSelectedContacto(null);
                  if (setValue) setValue('1');
                  if (setCrear) setCrear(false);
                  if (setEditar) setEditar([]);
                  closeAlert(returnTo);
                }}>
                {alert.icon ? 'Aceptar' : 'Cancelar'}
              </Button>
              {!alert.icon ? (
                <Button
                  sx={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontWeight: 600,
                    color: 'azul.main',
                    textAlign: 'center',
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: 'gris.medio',
                    },
                  }}
                  onClick={resendAlert}>
                  Intentar Nuevamente
                </Button>
              ) : null}
            </Box>
          )}
        </Box>
      </Modal>
    </div>
  );
};
