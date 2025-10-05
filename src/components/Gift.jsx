import { Box, Typography, Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";

const Gift = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box ref={ref} sx={{ position: "relative", width: "100%" }}>
      {/* Imagen de fondo */}
      <Box
        component="img"
        src="/images/modificaciones/FONDODRESS.webp"
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
          maxWidth: { xs: "80%", md: "900px" }, // más ancho en mobile y desktop
          width: "100%",
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
                fontSize: { xs: "1.1rem", md: "1.8rem" },
                color: "#000000",
                fontWeight: 500,
                mb: 3,
                lineHeight: 1.6,
                maxWidth: "100%", // texto puede expandirse
              }}
            >
              Si querés colaborar con nuestra luna de miel...
            </Typography>

            {/* Caja con alias */}
            <Typography
              sx={{
                fontFamily: "'Quicksand'",
                fontSize: { xs: "1.1rem", md: "1.5rem" },
                fontWeight: "bold",
                color: "#000000",
                maxWidth: "100%",
              }}
            >
              Alias: chechuynacho
            </Typography>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};

export default Gift;
