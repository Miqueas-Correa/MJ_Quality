import { Button } from "@mui/material";

const ConvertButton = ({ onClick, disabled }) => {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            sx={{
                width: 150,
                p: 1.2,
                borderRadius: "16px",
                textTransform: "none",
                background: disabled
                    ? "rgba(255,255,255,0.1)"
                    : "linear-gradient(to right, #3B82F6, #06B6D4)",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "12px",
                boxShadow: "0 10px 30px rgba(30,58,138,0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                    background: "linear-gradient(to right, #2563EB, #0891B2)",
                    boxShadow: "0 15px 40px rgba(59,130,246,0.4)",
                },
                "&:active": {
                    transform: "scale(0.95)",
                }
            }}
        >
            Convert
        </Button>
    );
};

export default ConvertButton;