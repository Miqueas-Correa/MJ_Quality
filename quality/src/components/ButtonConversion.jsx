import { useState } from 'react';
import Model from './FileConversion';
// Llamada al custom hook para manejar la subida de archivos y la respuesta del backend
import useUpgrade from '../hooks/useUpgrade';
// Componente para mostrar anuncios de Google AdSense
import AdBanner from './AdBanner';

const ButtonConversion = () => {
    const [type, setType] = useState("image");

    const toggleType = () => {
        setType(prev => prev === "image" ? "audio" : "image");
    };

    // const { loading, error, result } = useUpgrade(file, type);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>Error: {error?.message}</div>;
    // }

    // if (result) {
    //     return <div>Result: {result}</div>;
    // }

    return(
        <section id="main" className="min-h-screen w-full flex flex-col items-center justify-start gap-10 py-10">

            {/* Ad Banner */}
            <AdBanner />

            <button onClick={toggleType} 
            className="self-center mt-10 w-62.5
                px-2 py-2.5 text-sm font-medium
                bg-white/10 backdrop-blur-lg border border-white/20 rounded-full
                text-white/90 hover:text-white hover:bg-white/15 hover:scale-105
                transition-all duration-300
            ">
                Change to {type === "image" ? "audio" : "image"}
            </button>

            <Model type={type} />

            {/* Ad Banner */}
            <AdBanner />

        </section>
    );
}

export default ButtonConversion;