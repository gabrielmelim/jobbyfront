import { useState } from "react";
import {
  Typography,
  Box,
  Button,
} from "@mui/material";
import { ModalCandidato } from "./components/ModalCandidato";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Box
      sx={{
        margin: 5,
      }}
    >
      <Typography
        variant="h2"
        align="center"
        fontWeight="bold"
        sx={{ marginBottom: 5 }}
      >
        Jobby
      </Typography>

      <Button
        variant="contained"
        onClick={() => setOpenModal(true)}
        sx={{ marginRight: 5 }}
      >
        Cadastrar Candidato
      </Button>

      <Button
        variant="outlined"
        target="_blank"
        href="http://localhost:8080/v1/swagger-ui/index.html"
      >
        Documentação API
      </Button>

      <ModalCandidato open={openModal} onClose={() => setOpenModal(false)} />
    </Box>
  );
}

export default App;
