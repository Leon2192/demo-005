import { Box, Typography, Slide, Button } from "@mui/material";
import { useInView } from "react-intersection-observer";

const InfoEvent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const mapsUrl =
    "https://www.google.com/maps/place/Polo+House,+Av.+Dorrego+3400,+C1425+Cdad.+Aut%C3%B3noma+de+Buenos+Aires";

  return (
    <Box ref={ref} sx={{ position: "relative", width: "100%" }}>
      {/* Imagen de fondo */}
      <Box
        component="img"
        src="/images/modificaciones/CEREMONIA.webp"
        alt="Ceremonia y Fiesta"
        sx={{ width: "100%", height: "auto", display: "block" }}
      />

      {/* Contenido centrado */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          textAlign: "center",
          px: 2,
          maxWidth: { xs: "300px", md: "360px" },
        }}
      >
        <br />
        <br />
        <Slide in={inView} direction="up" timeout={800}>

          <Box>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Eyesome'",
                fontSize: { xs: "2rem", md: "2.8rem" },
                color: "#000000",
                fontWeight: 600,
                lineHeight: 1.2,
                mb: 1.5, // margen uniforme
              }}
            >
              Ceremonia & Fiesta
            </Typography>

            {/* Fecha */}
            <Typography
              sx={{
                mb: 1.5,
                fontFamily: "'Quicksand', serif",
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "#000000",
                fontWeight: "bold",
                lineHeight: 1.3,
                whiteSpace: "nowrap",
              }}
            >
              Sábado 29 de Noviembre
            </Typography>

            {/* Hora */}
            <Typography
              sx={{
                mb: 1.5,
                fontFamily: "'Quicksand', serif",
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "#000000",
                fontWeight: "bold",
                lineHeight: 1.3,
                whiteSpace: "nowrap",
              }}
            >
              19:30 hs
            </Typography>

            {/* Dirección */}
            <Typography
              sx={{
                mb: 1.5,
                fontFamily: "'Quicksand', serif",
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "#000000",
                fontWeight: "bold",
                lineHeight: 1.3,
              }}
            >
              Polo House
            </Typography>

            <Typography
              sx={{
                mb: 1.5,
                fontFamily: "'Quicksand', serif",
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "#000000",
                fontWeight: "bold",
                lineHeight: 1.3,
              }}
            >
              Avenida Dorrego 3400
            </Typography>

            <Typography
              sx={{
                mb: 1.5,
                fontFamily: "'Quicksand', serif",
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "#000000",
                fontWeight: "bold",
                lineHeight: 1.3,
              }}
            >
              CABA
            </Typography>

            {/* Botón */}
            <Button
              variant="contained"
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                mt: 1.5, // mismo espacio arriba que los demás
                backgroundColor: "#000000",
                color: "#ffffff",
                borderRadius: "50px",
                px: 2,
                py: 1,
                fontFamily: "'Quicksand', serif",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#333333" },
              }}
            >
              CÓMO LLEGAR
            </Button>
          </Box>
        </Slide>
      </Box>
    </Box>
  );
};

export default InfoEvent;
