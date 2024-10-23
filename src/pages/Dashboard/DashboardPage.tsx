import { Box, Button, Typography } from "@mui/material";
import { Add, CalendarMonth } from "@mui/icons-material";
import { DashboardScheduler } from "./DashboardScheduer";

export const DashboardPage = () => {
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
            <Typography variant="button">Crea Nuovo Evento</Typography>
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
                Calendario Noleggio
              </Typography>
              <CalendarMonth color="primary" sx={{ ml: 1 }} />
            </Box>
            <Box>
              <DashboardScheduler />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
