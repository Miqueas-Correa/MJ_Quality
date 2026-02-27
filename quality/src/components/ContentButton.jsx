import { styled } from '@mui/material/styles';
import { Button } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const ContentButton = ({ accept, label }) => {
  return(
    <Button
      component="label"
      variant="contained"
      startIcon={<CloudUploadIcon />}
      sx={{
        mt: 6,
        px: 2,
        py: 2,
        gap: 2,
        borderRadius: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#10b9819d",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(52,211,153,0.3)",
        color: "#F8FAFC",
        fontWeight: 600,
        fontSize: "14px",
        boxShadow: "0 10px 30px rgba(6,78,59,0.3)",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "#7DD3FC",
          transform: "scale(1.05)",
        },
        // backgroundColor: '#10B981',
        // '&:hover': {
        //   backgroundColor: '#38BDF8'
        // }
        "&:active": {
          transform: "scale(0.95)",
        }
      }}
    >
      {label}

      <VisuallyHiddenInput
        type="file"
        accept={accept}
        onChange={(event) => console.log(event.target.files[0])}
      />
    </Button>
  )
}

export default ContentButton;