import { Box, Button, Typography } from "@mui/material";
import { Add, History } from "@mui/icons-material";
import { EstimateDocument } from "./EstimateDocument";
import { useState } from "react";
import { EstimateTable } from "./EstimateTable";

const MOCK_DATA = [
  {
    title: "Preventivo 1",
    creationDate: "10-05-2024",
    description: "Descrizione 1 ",
    id: 1,
  },
  {
    title: "Preventivo 2",
    creationDate: "10-05-2024",
    description: "Descrizione 1",
    id: 2,
  },
  {
    title: "Preventivo 3",
    creationDate: "10-05-2024",
    description: "Descrizione 1",
    id: 3,
  },
  {
    title: "Preventivo 4",
    creationDate: "10-05-2024",
    description: "Descrizione 1",
    id: 4,
  },
  {
    title: "Preventivo 5",
    creationDate: "10-05-2024",
    description: "Descrizione 1",
    id: 5,
  },
];

export const EstimatePage = () => {
  const [selectedElement, setSelectedElement] = useState(null);
  return (
    <Box
      maxWidth={"calc(100vw - 2em)"}
      display="flex"
      flexDirection="column"
      gap={2}
    >
      <Box sx={{ height: "100%", width: "100%" }} pb={2}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{ width: "auto", height: "auto" }}
          >
            <Typography variant="button">Crea Nuovo Preventivo</Typography>
            <Add sx={{ ml: 1 }} />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "white",
          height: 300,
          transition: "all .2s",
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          overflow: "hidden",
          borderRadius: 2,
          gap: 2,
          p: 4,
        }}
      >
        <Box
          display="flex"
          width="100%"
          flexShrink="0"
          maxWidth="calc(100vw - 3em)"
        >
          <Box display="flex" flexDirection="column" width="100%">
            <Box
              display="flex"
              flexDirection="row"
              alignContent="center"
              alignItems="center"
              mb={3}
              maxWidth="calc(100vw - 6em)"
            >
              <Typography variant="h6" color="primary" fontWeight={600} px={1}>
                Ultimi preventivi
              </Typography>
              <History color="primary" sx={{ ml: 1 }} />
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              sx={{ overflowX: "auto" }}
              gap={2}
              p={1}
              maxWidth="calc(100vw - 6em)"
            >
              {MOCK_DATA.map((element) => (
                <EstimateDocument
                  key={element.id}
                  document={element}
                  isSelected={selectedElement === element.id}
                  setSelected={setSelectedElement}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "white",
          minHeight: "200px",
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          gap: 2,
          overflow: "hidden",
          p: 4,
          py: 3,
        }}
      >
        <EstimateTable />
      </Box>
    </Box>
  );
};
