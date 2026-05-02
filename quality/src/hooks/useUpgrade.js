import api from '../services/qualityAPI';
import { useState, useEffect } from 'react';

// Custom hook para manejar la subida de archivos y la respuesta del backend
export default function useUpgrade(file, extraRoute = "") {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);

    useEffect(() => {
        if (file) {
            setLoading(true);
            setError(null);
            setResult(null);

            const formData = new FormData();
            formData.append('file', file);

            api.post(`/${extraRoute}`, formData, {
                responseType: 'arraybuffer',
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => {
                setResult(response.data);
            })
            .catch(err => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
        }
    }, [file, extraRoute]);

    return { loading, error, result };
}