import { Typography, Box } from '@mui/material';

const Footer = () => {
    return (
        <section id='footer' className='min-w-screen p-0'>
            <Box color="#0A2540" py={2} textAlign="center">
                <Typography variant="body2"
                    sx={{ textAlign:'center', fontSize: "12px", fontFamily: 'Inter, sans-serif', color: '#111827' }}
                >
                    © 2026 Quality - Todos los derechos reservados
                </Typography>
            </Box>
        </section>
    );
}

export default Footer;