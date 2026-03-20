import { Card, CardContent, Typography, Button } from '@mui/material';
import { useState } from 'react';
import ContentButton from './ContentButton';
import ConvertButton from './ConvertButton';

const Model = ({ type }) => {   
    
    const toggleType = () => {
        setType(prev => prev === "image" ? "audio" : "image");
    };

    return(
        <div className="
            w-[650px] h-[350px] mx-auto mt-12 md:mt-10
            bg-white/8 backdrop-blur-2xl
            border border-white/10 rounded-3xl
            shadow-2xl shadow-black/25
            p-10 md:p-12
            text-center
            transition-all duration-400 hover:shadow-3xl hover:-translate-y-2
        ">
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                Choose {type === "image" ? "an Image" : "an Audio"}
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10">
                Upload an { type == "image" ? "an image" : "an audio" } and convert it to high-quality — instantly.
            </p>

            <ContentButton
                accept={type === "image" ? "image/*" : "audio/*"}
                label={`Upload ${type}`}
            />

            <ConvertButton />
        </div>
    )
}

export default Model;