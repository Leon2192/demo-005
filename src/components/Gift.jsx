import {
  Box,
  Typography,
  Button,
  Modal,
  Fade,
  Backdrop,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import ButtonLinks from "./ButtonLinks/ButtonLInks";

const Gift = () => {
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box ref={ref} sx={{ position: "relative", width: "100%" }}>
      {/* Imagen de fondo */}
      <Box
        component="img"
        src="/images/005/textura.png"
        alt="Regalo Fondo"
        sx={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />

      {/* Contenido centrado sobre la imagen */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          textAlign: "center",
          px: 2,
          maxWidth: { xs: "320px", md: "480px" },
        }}
      >
        <Fade in={inView} timeout={1000}>
          <Box>
            {/* Ícono Regalo */}
            <Box
              component="img"
              src="/images/004/regalo.gif"
              alt="Regalo"
              sx={{
                width: 125,
                height: 125,
                mb: 2,
              }}
            />

            {/* Texto */}
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Quicksand'",
                fontSize: { xs: "1.2rem", md: "1.8rem" },
                color: "#000000",
                fontWeight: 500,
                mb: 4,
              }}
            >
              Nuestro mejor regalo
              es tu presencia 
              Peeeero... si queres colaborear con nuestra
              luna de miel...
            </Typography>

            {/* Botón que abre modal */}
            <ButtonLinks
              onClick={handleOpen}
              label="Ver datos Bancarios"
              newTab
            />
          </Box>
        </Fade>
      </Box>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{ backdrop: { timeout: 500 } }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "#fdfaff",
              borderRadius: 3,
              boxShadow: 24,
              p: 4,
              maxWidth: 600,
              width: "90%",
              textAlign: "center",
            }}
          >
            {/* Botón cerrar */}
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "#666",
                "&:hover": {
                  color: "#9a64ea",
                  backgroundColor: "transparent",
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Ícono en modal */}
            <Box
              component="img"
              src="/images/004/regalo.gif"
              alt="Regalo"
              sx={{ width: 100, height: 100, mb: 2 }}
            />

            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{
                fontFamily: "'Eyesome'",
                fontSize: { xs: "2rem", md: "3rem" },
                color: "#000000",
                mb: 2,
              }}
            >
              Datos Bancarios
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Quicksand'",
                fontSize: { xs: "1.1rem", md: "1.4rem" },
                color: "#000000",
                fontWeight: 600,
                lineHeight: 1.6,
              }}
            >
              Alias: <strong>tierramisionera.w</strong> <br />
              CBU: <strong>0070308430004034501620</strong> <br />
              <br />
              También podés dejarnos un sobre en un 📬 que tendremos en el Salón.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Gift;
