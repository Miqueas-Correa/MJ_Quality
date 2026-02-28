import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from '/quality_logo.png';

export default function Header (){
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <AppBar sx={{ padding: 0,
            background: `
            radial-gradient(circle at 20% 30%, rgba(0, 191, 255, 0.35), transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.35), transparent 40%),
            radial-gradient(circle at 60% 80%, rgba(0, 102, 255, 0.35), transparent 45%),
            linear-gradient(135deg, #0A2540 0%, #111827 100%)
            `,
        }}>
            <Toolbar>
                {/* Logo */}
                <Button onClick={handleLogoClick}>
                    <img src={Logo} alt="Logo" className='w-6 h-6'/>
                </Button>

                {/* Navbar items */}
                <Box sx={{ display: 'flex', gap: 2, marginLeft: 'auto' }}>
                    <Button onClick={() => {
                            navigate('/');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }} 
                        color="inherit" sx={{ color: '#F8FAFC',
                        borderRadius: 2,
                        textTransform: 'none',
                        '&:hover': {
                            textDecoration: 'underline',
                            textUnderlineOffset: '4px',
                        },
                    }}>
                        Home
                    </Button>

                    <Button onClick={() => navigate('/servicios')} color="inherit" sx={{ color: '#F8FAFC',
                        borderRadius: 2,
                        textTransform: 'none',
                        '&:hover': {
                            textDecoration: 'underline',
                            textUnderlineOffset: '4px',
                        },
                    }}>
                        Servicies
                    </Button>

                    <Button onClick={() => navigate('/sobre-nosotros')} color="inherit" sx={{ color: '#F8FAFC',
                        borderRadius: 2,
                        textTransform: 'none',
                        '&:hover': {
                            textDecoration: 'underline',
                            textUnderlineOffset: '4px',
                        },
                    }}>
                        About us
                    </Button>

                    <Button onClick={() => navigate('/contacto')} sx={{ color: '#F8FAFC',
                        borderRadius: 2,
                        textTransform: 'none',
                        '&:hover': {
                            textDecoration: 'underline',
                            textUnderlineOffset: '4px',
                        },
                    }}>
                        Contact
                    </Button>
                </Box>
  
            </Toolbar>
        </AppBar>
    );
}