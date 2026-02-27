import { Card, CardContent, Typography, Button } from '@mui/material';
import { useState } from 'react';
import ContentButton from './ContentButton';
import ConvertButton from './ConvertButton';

const Model = ({ type }) => {   
    
    const toggleType = () => {
        setType(prev => prev === "image" ? "audio" : "image");
    };

    return(
        <Card
            sx={{ 
                width: 650, 
                height: 300, 
                p: 4,
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "34px",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
                textAlign: "center",
                position: "relative",
                "&:hover": {
                    boxShadow: "0 30px 60px -12px rgba(0,0,0,0.35)"
                }
            }}
        >
            <CardContent sx={{ textAlign: "center" }}>
        
                <Typography variant="h6" marginTop={-2}>
                    Choose {type === "image" ? "an Image" : "an Audio"}
                </Typography>

                <Typography fontSize={12} marginTop={2}>
                    Upload an { type == "image" ? "an image" : "an audio" } and convert it to high-quality
                </Typography>

                <ContentButton
                    accept={type === "image" ? "image/*" : "audio/*"}
                    label={`Upload ${type}`}
                />
            </CardContent>

            <ConvertButton />
        </Card>
    )
}

export default Model;