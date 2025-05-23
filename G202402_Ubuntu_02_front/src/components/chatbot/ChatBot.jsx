import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import AddIcon from '@mui/icons-material/Add';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useEffect } from 'react';
import { getPreguntas } from '../../utils/services/axiosConfig';

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const handleDial = boleean => setOpen(boleean);

  const [preguntaSeleccionada, setPreguntaSeleccionada] = useState({});
  const [anterior, setAnterior] = useState([4]);

  const seleccionarPregunta = id => {
    setAnterior(prevAnterior => {
      const nuevoAnterior = [...prevAnterior, id];
      return nuevoAnterior;
    });
    traerMasPreguntas(id);
  };

  const volverAtras = () => {
    setAnterior(prevAnterior => {
      const nuevoAnterior = [...prevAnterior];
      nuevoAnterior.pop();
      const idPreguntaAnterior = nuevoAnterior[nuevoAnterior.length - 1];
      traerMasPreguntas(idPreguntaAnterior);
      return nuevoAnterior;
    });
  };

  const traerMasPreguntas = id => {
    getPreguntas(id).then(nuevasPreguntas => {
      setPreguntaSeleccionada(nuevasPreguntas);
      if (nuevasPreguntas) {
        setPreguntaSeleccionada(nuevasPreguntas);
      } else {
        setPreguntaSeleccionada({ pregunta: 'No hay más preguntas' });
      }
    });
  };

  useEffect(() => {
    seleccionarPregunta(4);
  }, [open]);

  //Array para revisar array
  const todosIguales = arr => arr.every(val => val === arr[0]);

  return (
    <div
      onClick={() => {
        handleDial(false), setAnterior([4]);
      }}>
      <Box
        sx={{
          position: 'fixed',
          height: 330,
          flexGrow: 1,
          bottom: '0',
          right: '0',
          zIndex: 1000,
          minWidth: open ? '100%' : 'fit-content',
        }}>
        <Backdrop open={open} />
        <SpeedDial
          open={open}
          onClick={e => {
            e.stopPropagation();
            if (!open) {
              handleDial(true);
            } else if (
              todosIguales(anterior) &&
              anterior[anterior.length - 1] === 4
            ) {
              setAnterior([4]);
              handleDial(false);
            } else {
              volverAtras();
            }
          }}
          ariaLabel="SpeedDial tooltip example"
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            display: 'flex',
            flexDirection: 'column-reverse',
            alignItems: 'flex-end',
          }}
          icon={
            <SpeedDialIcon
              icon={
                open ? (
                  !(
                    todosIguales(anterior) &&
                    anterior[anterior.length - 1] === 4
                  ) ? (
                    <CallReceivedIcon />
                  ) : (
                    <AddIcon />
                  )
                ) : (
                  <svg
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 28 32"
                    width="22"
                    height="24"
                    fill="white">
                    <path d="M28,32 C28,32 23.2863266,30.1450667 19.4727818,28.6592 L3.43749107,28.6592 C1.53921989,28.6592 0,27.0272 0,25.0144 L0,3.6448 C0,1.632 1.53921989,0 3.43749107,0 L24.5615088,0 C26.45978,0 27.9989999,1.632 27.9989999,3.6448 L27.9989999,22.0490667 L28,22.0490667 L28,32 Z M23.8614088,20.0181333 C23.5309223,19.6105242 22.9540812,19.5633836 22.5692242,19.9125333 C22.5392199,19.9392 19.5537934,22.5941333 13.9989999,22.5941333 C8.51321617,22.5941333 5.48178311,19.9584 5.4277754,19.9104 C5.04295119,19.5629428 4.46760991,19.6105095 4.13759108,20.0170667 C3.97913051,20.2124916 3.9004494,20.4673395 3.91904357,20.7249415 C3.93763774,20.9825435 4.05196575,21.2215447 4.23660523,21.3888 C4.37862552,21.5168 7.77411059,24.5386667 13.9989999,24.5386667 C20.2248893,24.5386667 23.6203743,21.5168 23.7623946,21.3888 C23.9467342,21.2215726 24.0608642,20.9827905 24.0794539,20.7254507 C24.0980436,20.4681109 24.0195551,20.2135019 23.8614088,20.0181333 Z"></path>
                  </svg>
                )
              }
              sx={{
                bgcolor: '#093C59',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          }>
          {preguntaSeleccionada.respuesta &&
            preguntaSeleccionada.respuesta.preguntas &&
            preguntaSeleccionada.respuesta.preguntas.map(preguntas => (
              <SpeedDialAction
                key={preguntas.id}
                onClick={event => {
                  event.stopPropagation();
                  seleccionarPregunta(preguntas.id);
                }}
                sx={{
                  bgcolor: '#093C59',
                  color: 'white',
                  maxWidth: '500px',
                  width: 'fit-content',
                  height: 'fit-content',
                  borderRadius: '10px',
                  padding: '5px 8px',
                  textTransform: 'none',
                  alignSelf: 'flex-end',
                  '&:hover': {
                    bgcolor: 'gris.oscuro',
                  },
                }}
                icon={
                  <Typography
                    sx={{
                      textAlign: 'center',
                      textWrap: 'wrap',
                    }}
                    variant="body1">
                    {preguntas.pregunta}
                  </Typography>
                }
              />
            ))}
          {preguntaSeleccionada.respuesta && (
            <SpeedDialAction
              sx={{
                bgcolor: 'gris.claro',
                color: '#093C59',
                maxWidth: '500px',
                width: 'fit-content',
                height: 'fit-content',
                borderRadius: '6px',
                padding: '5px 8px',
                textTransform: 'none',
                alignSelf: 'flex-end',
                cursor: 'default',
                '&:hover': {
                  bgcolor: 'gris.claro',
                },
              }}
              icon={
                <Typography
                  sx={{
                    textAlign: 'center',
                    textWrap: 'wrap',
                    fontSize: '14px',
                    width: '100%',
                    fontWeight: 600,
                  }}
                  variant="body1">
                  {preguntaSeleccionada.respuesta.respuesta}
                </Typography>
              }
              onClick={event => {
                event.stopPropagation();
              }}
            />
          )}
          {preguntaSeleccionada && (
            <SpeedDialAction
              sx={{
                bgcolor: 'white',
                color: '#093C59',
                maxWidth: '500px',
                width: 'fit-content',
                height: 'fit-content',
                borderRadius: '6px',
                padding: '5px 8px',
                textTransform: 'none',
                alignSelf: 'flex-end',
                cursor: 'default',
                '&:hover': {
                  bgcolor: 'gris.claro',
                },
              }}
              icon={
                <Typography
                  sx={{
                    textAlign: 'center',
                    textWrap: 'wrap',
                    fontSize: '14px',
                    width: '100%',
                    fontWeight: 600,
                  }}
                  variant="body1">
                  {preguntaSeleccionada.pregunta}
                </Typography>
              }
              onClick={event => {
                event.stopPropagation();
              }}
            />
          )}
        </SpeedDial>
      </Box>
    </div>
  );
}
