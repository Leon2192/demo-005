import { Box, Typography, Slide, Button } from "@mui/material";
import { useInView } from "react-intersection-observer";

const InfoEvent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const direccion =
    "Polo House - Av. Dorrego 3400 - CABA, Buenos Aires";

  const mapsUrl =
    "https://www.google.com/maps/place/Polo+House,+Av.+Dorrego+3400,+C1425+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/data=!4m2!3m1!1s0x95bcb5b1bbec7449:0x7156b149213fd199?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI1LjM3LjEYACCenQoqmQEsOTQyNjc3MjcsOTQyODQ1MTEsOTQyMjMyOTksOTQyMTY0MTMsOTQyODA1NzYsOTQyMTI0OTYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTc1MjMsOTQyMTg2NTMsOTQyMjk4MzksOTQyNzUxNjgsOTQyNzk2MTksNDcwODQzOTMsOTQyMTMyMDAsOTQyNTgzMjVCAkFS&skid=3b849db4-1a13-4557-93d3-396c66fce02e&g_st=am";

  return (
    <Box ref={ref} sx={{ position: "relative", width: "100%" }}>
      {/* Imagen de fondo */}
      <Box
        component="img"
        src="/images/005/ceremonia.webp"
        alt="Ceremonia y Fiesta"
        sx={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />

      {/* Contenido centrado dentro de la parte blanca */}
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
        <Slide in={inView} direction="up" timeout={800}>
          <Box>
            <br />
            <br />
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontFamily: "'Eyesome'",
                fontSize: { xs: "2rem", md: "2.8rem" },
                color: "#000000",
                fontWeight: 600,
                lineHeight: 1.2,
              }}
            >
              Ceremonia & Fiesta
            </Typography>

            <Typography
              sx={{
                mb: 1,
                fontFamily: "'Quicksand', serif",
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "#000000",
                fontWeight: "bold",
                lineHeight: 1.4,
              }}
            >
              Sábado 29 de Noviembre de 2025
            </Typography>

            <Typography
              sx={{
                mb: 1,
                fontFamily: "'Quicksand', serif",
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "#000000",
                fontWeight: "bold",
                lineHeight: 1.4,
              }}
            >
              19:30 hs
            </Typography>

            <Typography
              sx={{
                mb: 3,
                fontFamily: "'Quicksand', serif",
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "#000000",
                fontWeight: "bold",
                lineHeight: 1.4,
              }}
            >
              {direccion}
            </Typography>

            {/* Nuevo botón personalizado */}
            <Button
              variant="contained"
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: "#000000",
                color: "#ffffff",
                borderRadius: "50px", // bien redondeado
                px: 2,
                py: 1,
                fontFamily: "'Quicksand', serif",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#333333",
                },
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
