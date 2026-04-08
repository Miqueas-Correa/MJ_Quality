import { Typography, Box } from '@mui/material';

const Footer = () => {
    return (
        <footer>
            <div className="max-w-4xl mx-auto px-6">
                <p className="text-sm p-0.5">
                    © 2026 Quality - All rights reserved
                </p>

                {/* Devs */}
                <p className="text-sm p-0.5">
                    Developed by: 
                    <a href="linkedin o portafolio">
                        Brenda Yañez
                    </a>, 
                    <a href="linkedin o portafolio">
                        Miqueas Correa
                    </a>
                </p>
            </div>

        </footer>
    );
}

export default Footer;