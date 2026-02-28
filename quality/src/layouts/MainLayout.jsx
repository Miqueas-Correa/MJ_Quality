import { useState } from 'react';
import Model from '../components/Model';

const MainLayout = () => {
    const [type, setType] = useState("image");

    const toggleType = () => {
        setType(prev => prev === "image" ? "audio" : "image");
    };

    return(
        <section id="main" className="min-h-screen w-full">

            <button onClick={toggleType} 
            className="self-start mt-32 w-[250px]
                px-2 py-2.5 text-sm font-medium
                bg-white/10 backdrop-blur-lg border border-white/20 rounded-full
                text-white/90 hover:text-white hover:bg-white/15 hover:scale-105
                transition-all duration-300
            ">
                Change to {type === "image" ? "audio" : "image"}
            </button>

            <Model type={type} />

        </section>
    );
}

export default MainLayout;