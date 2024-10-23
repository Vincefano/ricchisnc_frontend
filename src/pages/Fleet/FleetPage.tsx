import { Box, Button, Typography } from "@mui/material";
import { Add, CarRepair } from "@mui/icons-material";
import { MOCK_DATA } from "./MOCK_DATA";
import { Vehicle, VehicleProp } from "./Vehicle";
import { useState } from "react";

export const FleetPage = () => {
  const [selectedElement, setSelectedElement] = useState(null);

  return (
    <Box width="100%" display="flex" flexDirection="column" gap={2}>
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
            <Typography variant="button">Aggiungi Nuovo Veicolo</Typography>
            <Add sx={{ ml: 1 }} />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "white",
          height: "auto",
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
        <Box display="flex" width="100%" flexShrink="0">
          <Box display="flex" flexDirection="column" width="100%">
            <Box
              display="flex"
              flexDirection="row"
              alignContent="center"
              alignItems="center"
              mb={3}
              width="100%"
            >
              <Typography variant="h6" color="primary" fontWeight={600} px={1}>
                Veicoli Esistenti
              </Typography>
              <CarRepair color="primary" sx={{ ml: 1 }} />
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignContent="center"
              flexWrap="wrap"
              gap={3}
              alignItems="center"
              justifyContent="center"
              mb={3}
              sx={{
                ":after": {
                  content: "''",
                  flex: "0 0 100%",
                },
              }}
            >
              {MOCK_DATA.map((vehicle) => (
                <Vehicle
                  key={vehicle.id}
                  vehicle={vehicle}
                  isSelected={selectedElement === vehicle.id}
                  setSelected={setSelectedElement}
                  status={vehicle.status}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
