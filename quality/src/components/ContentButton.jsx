import { Button } from "@mui/material";
import { useRef } from "react";

const ContentButton = ({ accept, label, onFileChange }) => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.click();
    };

    const handleChange = (e) => {
        const selected = e.target.files[0];
        if (selected && onFileChange) {
            onFileChange(selected);
        }
    };

    return (
        <>
            <input
                type="file"
                accept={accept}
                ref={inputRef}
                onChange={handleChange}
                style={{ display: 'none' }}
            />
            <Button onClick={handleClick} variant="outlined" sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
                {label}
            </Button>
        </>
    );
};

export default ContentButton;