import { Typography, Box, Button } from '@mui/material';
import { useState } from 'react';
import Model from '../components/Model';

const MainLayout = () => {
    const [type, setType] = useState("image");

    const toggleType = () => {
        setType(prev => prev === "image" ? "audio" : "image");
    };

    return(
        <section className="flex flex-col items-center justify-center">
            
            <Typography 
                variant="h1" 
                sx={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 55,
                    fontWeight: 600,
                    color: '#111827',
                    textAlign: 'center',
                    mb: 6,
                }}
            >
                Qual<span className='text-[#7DD3FC]'>ity</span>
            </Typography>

            <Button 
                onClick={toggleType}
                size="small"
                sx={{ 
                    position: "absolute",
                    top: 140,
                    left: 300,
                    px: 2,
                    py: 0.5,
                    textTransform: "none",
                    fontSize: "12px",
                    fontWeight: 500,
                    borderRadius: "999px",
                    border: "1px solid #10B981",
                    backdropFilter: "blur(8px)",
                    transition: "all 0.3s ease",
                    color: type == "audio" ? '#F8FAFC' : '#10B981',
                    backgroundColor: type === "audio" ? "#10B981" : "transparent",
                    "&:hover": {
                        backgroundColor: "#7DD3FC",
                        color: "#F8FAFC",
                        border: 'none'
                    }
                }}
            >
                Change to {type === "image" ? "audio" : "image"}
            </Button>

            <Model type={type} />

        </section>
    );
}

export default MainLayout;