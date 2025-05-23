import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { HEADER_HEIGHT } from '../../utils/services/constants';
import { useState } from 'react';
import PerfilAdmin from '../../components/PerfilAdmin';

const drawerWidth = 256;
const navItems = [
  'Dashboard Administrador',
  'Microemprendimientos',
  'Solicitudes de Contacto',
  'Publicaciones',
];

function AdminHeader(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        bgcolor: 'azul.main',
        height: '100%',
        marginTop: HEADER_HEIGHT,
        display: 'flex',
      }}>
      <List
        sx={{
          height: '100%',
          width: '100%',
          padding: '20px 0',
        }}>
        <ListItem
          disablePadding
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <Box
            sx={{
              width: '100%',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
            <ListItemText
              sx={{
                color: 'blanco.main',
                fontFamily: 'Lato',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '20px',
                width: '100%',
                flexGrow: 0,
                padding: '8px 16px',
              }}
              primaryTypographyProps={{ variant: 'none' }}
              primary="Administrador"
            />
            {navItems.map(item => (
              <Link
                key={item}
                to={
                  item === 'Dashboard Administrador'
                    ? '/Admin'
                    : item === 'Solicitudes de Contacto'
                    ? '/Admin/contactos'
                    : `/Admin/${item.toLowerCase()}`
                }
                style={{ textDecoration: 'none' }}>
                <ListItemText
                  sx={{
                    color: 'blanco.main',
                    fontFamily: 'Lato',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '20px',
                    width: '100%',
                    flexGrow: 0,
                    padding: '0 16px',
                  }}
                  primaryTypographyProps={{ variant: 'none' }}
                  primary={item}
                />
              </Link>
            ))}
          </Box>
          <Link
            to="/"
            style={{
              width: '100%',
              textDecoration: 'none',
            }}>
            <ListItemText
              sx={{
                color: 'blanco.main',
                fontFamily: 'Lato',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '20px',
                padding: '0px 16px',
              }}
              primaryTypographyProps={{ variant: 'none' }}
              primary="Visitante"
            />
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', position: 'relative' }}>
      <AppBar
        component="nav"
        sx={{
          bgcolor: 'blanco.main',
          color: 'negro.main',
          boxShadow: 'none',
          height: HEADER_HEIGHT,
        }}>
        <Toolbar sx={{ display: 'flex' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: 'block',
              position: 'relative',
              zIndex: 2,
            }}>
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Link
            to="/Admin"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              height: HEADER_HEIGHT,
              left: '50%',
              top: 0,
              transform: 'translate(-50%,0)',
              zIndex: '0',
            }}>
            <img
              src="/UBUNTU.png"
              alt="UBUNTU Financiamiento Sostenible"
              style={{
                height: '100%',
                padding: '3px',
              }}
            />
          </Link>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 'auto',
            }}>
            <PerfilAdmin />
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'block', height: '56px' }} />
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: 'block',
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
            zIndex: 1,
          }}>
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default AdminHeader;
