import { useTheme } from "@emotion/react";
import { Close, Description } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  Link,
  useMediaQuery,
} from "@mui/material";
const ResumeModal = ({ resumeModalOpen, setResumeModalOpen }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setResumeModalOpen(false);
  };

  return (
    <div>
      <Dialog
        PaperProps={{ sx: { background: "#c1cace" } }}
        scroll="body"
        fullWidth
        maxWidth="xl"
        fullScreen={fullScreen}
        open={resumeModalOpen}
        onClose={handleClose}
      >
        <div class="flex ">
          <DialogTitle textAlign={"center"} id="responsive-dialog-title">
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Description fontSize="large" />
              Resume
            </Box>
          </DialogTitle>
          <DialogActions className="ml-auto">
            <Fab
              onClick={handleClose}
              size="small"
              color="error"
              aria-label="add"
              sx={{
                background: "hsl(310, 6%, 29%)",
                borderRadius: "10px",
                ":hover": { background: "hsl(310, 6%, 39%)" },
              }}
            >
              <Close />
            </Fab>
          </DialogActions>
        </div>
        <DialogContent>
          <DialogContentText gutterBottom textAlign={"center"}>
            <object
              data="/2023_Resume_Tigran_Farmanyan.pdf"
              type="application/pdf"
              width="100%"
              height="900px"
            >
              <p className="text-2xl leading-10">
                Your web browser doesn't have a PDF plugin. Instead you can{" "}
                <Link
                  className="font-medium"
                  href="/2023_Resume_Tigran_Farmanyan.pdf"
                >
                  click here to download the PDF file.
                </Link>
              </p>
            </object>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ResumeModal;
