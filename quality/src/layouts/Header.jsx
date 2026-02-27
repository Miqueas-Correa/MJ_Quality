import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from '/quality_logo.png';

export default function Header (){
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <AppBar sx={{background: '#F8FAFC', padding: 0}}>
            <Toolbar>
                {/* Logo */}
                <Button onClick={handleLogoClick}>
                    <img src={Logo} alt="Logo" className='w-6 h-6'/>
                </Button>

                {/* Navbar items */}
                <Box sx={{ display: 'flex', gap: 2, marginLeft: 'auto' }}>
                    <Button onClick={() => navigate('/')} color="inherit" sx={{ color: '#111827',
                        borderRadius: 2,
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: '#7DD3FC', // fondo en hover
                            color: '#F8FAFC',           // opcional: cambiar color del texto
                        },
                    }}>
                        Inicio
                    </Button>

                    <Button onClick={() => navigate('/servicios')} color="inherit" sx={{ color: '#111827',
                        borderRadius: 2,
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: '#7DD3FC', // fondo en hover
                            color: '#F8FAFC',           // opcional: cambiar color del texto
                        },
                    }}>
                        Servicios
                    </Button>

                    <Button onClick={() => navigate('/sobre-nosotros')} color="inherit" sx={{ color: '#111827',
                        borderRadius: 2,
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: '#7DD3FC', // fondo en hover
                            color: '#F8FAFC',           // opcional: cambiar color del texto
                        },
                    }}>
                        Sobre Nosotros
                    </Button>

                    <Button onClick={() => navigate('/contacto')} sx={{ color: '#111827',
                        borderRadius: 2,
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: '#7DD3FC', // fondo en hover
                            color: '#F8FAFC',           // opcional: cambiar color del texto
                        },
                    }}>
                        Contacto
                    </Button>
                </Box>
  
            </Toolbar>
        </AppBar>
    );
}