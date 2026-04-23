import { Box, Typography } from '@mui/material';
import Logo from '/quality_logo.png';

const Footer = () => {
    return (
        <footer className='mt-auto'>
            <Box sx={{
                marginTop: '1rem',
                marginBottom: '1rem',
                padding: '15px 16px',
                borderRadius: '8px',
                background: `
                    radial-gradient(circle at 20% 30%, rgba(0, 191, 255, 0.35), transparent 40%),
                    radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.35), transparent 40%),
                    radial-gradient(circle at 60% 80%, rgba(0, 102, 255, 0.35), transparent 45%),
                    linear-gradient(135deg, #0A2540 0%, #111827 100%)
                `,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                {/* Logo */}
                <img src={Logo} alt="Logo" className='w-6 h-6'/>

                {/* Copyright */}
                <Typography variant="body2" sx={{ color: '#F8FAFC', fontSize: '0.75rem' }}>
                    © 2026 Quality - All rights reserved
                </Typography>

                {/* Devs */}
                <Typography variant="body2" sx={{ color: '#F8FAFC', fontSize: '0.75rem' }}>
                    Developed by:{' '}
                    <a href="https://www.linkedin.com/in/brendayw" style={{ color: '#7DD3FC' }}>
                        Brenda Yañez
                    </a>,{' '}
                    <a href="https://www.linkedin.com/in/miqueas-correa-4a1509318/" style={{ color: '#7DD3FC' }}>
                        Miqueas Correa
                    </a>
                </Typography>
            </Box>
        </footer>
    );
}

export default Footer;