import { useState } from 'react';
import ContentButton from './ContentButton';
import ConvertButton from './ConvertButton';
import useUpgrade from '../hooks/useUpgrade';

const FileConversion = ({ type }) => {
    const [file, setFile] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const { loading, error, result } = useUpgrade(submitted ? file : null, type === 'image' ? 'img' : type);

    const handleFileChange = (selectedFile) => {
        setFile(selectedFile);
        setSubmitted(false);
    };

    const handleConvert = () => {
        if (file) setSubmitted(true);
    };

    const handleDownload = () => {
        const url = URL.createObjectURL(new Blob([result]));
        const a = document.createElement('a');
        a.href = url;
        const originalExt = file.name.split('.').pop();
        const outExt = originalExt === 'jfif' ? 'jpg' : originalExt;
        a.download = `${file.name.split('.')[0]}_Quality.${outExt}`;
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="
            w-162.5 min-h-87.5 mx-auto mt-12 md:mt-10
            bg-white/8 backdrop-blur-2xl
            border border-white/10 rounded-3xl
            shadow-2xl shadow-black/25
            p-10 md:p-12
            text-center
            transition-all duration-400 hover:shadow-3xl hover:-translate-y-2
        ">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                Choose {type === "image" ? "an Image" : "an Audio"}
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-6">
                Upload {type === "image" ? "an image" : "an audio"} and convert it to high-quality — instantly.
            </p>

            {file && (
                <div className="mb-4 px-4 py-3 bg-white/10 border border-white/20 rounded-xl flex items-center gap-3">
                    <span className="text-2xl">{type === 'image' ? '🖼️' : '🎵'}</span>
                    <div className="text-left">
                        <p className="text-white font-medium text-sm">{file.name}</p>
                        <p className="text-white/50 text-xs">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                    </div>
                </div>
            )}

            <ContentButton
                accept={type === "image" ? "image/*" : "audio/*"}
                label={`Upload ${type}`}
                onFileChange={handleFileChange}
            />

            {loading && (
                <p className="mt-4 text-white/60 text-sm animate-pulse">Processing...</p>
            )}

            {error && (
                <p className="mt-4 text-red-400 text-sm">{error.message}</p>
            )}

            {result && (
                <div className="mt-4 px-4 py-3 bg-white/10 border border-white/20 rounded-xl flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl">✅</span>
                        <div className="text-left">
                            <p className="text-white font-medium text-sm">{file.name.split('.')[0]}_Quality</p>
                            <p className="text-white/50 text-xs">Ready to download</p>
                        </div>
                    </div>
                    <button
                        onClick={handleDownload}
                        className="px-3 py-1.5 text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-white rounded-lg transition-all"
                    >
                        Download
                    </button>
                </div>
            )}

            <div className="relative mt-6">
                <ConvertButton onClick={handleConvert} disabled={!file || loading} />
            </div>
        </div>
    );
};

export default FileConversion;