import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "dayjs/locale/it"; // Importa la lingua italiana
import "react-big-calendar/lib/css/react-big-calendar.css";
import { ToolbarProps } from "react-big-calendar"; // Importa il componente Toolbar
import { COLORS } from "../../constants/colors";
import { Box, Button, Tooltip } from "@mui/material";
import {
  CalendarMonth,
  ChevronLeft,
  ChevronRight,
  Class,
  Today,
} from "@mui/icons-material";

dayjs.locale("it"); // Imposta il locale di dayjs su italiano

const localizer = dayjsLocalizer(dayjs);

// Messaggi personalizzati in italiano
const messages = {
  allDay: "Tutto il giorno",
  previous: "Indietro",
  next: "Avanti",
  today: "Oggi",
  month: "Mese",
  week: "Settimana",
  day: "Giorno",
  agenda: "Agenda",
  date: "Data",
  time: "Ora",
  event: "Evento",
  noEventsInRange: "Nessun evento in questo intervallo",
  showMore: (total: string) => `+ altri ${total}`,
};

const events = [
  {
    start: new Date("2024-10-12"),
    end: new Date("2024-10-25"),
    title: "Mercedes A-Class - AA000AA",
  },
  {
    start: new Date("2024-10-22"),
    end: new Date("2024-10-30"),
    title: "Opel Corsa - BB000BB",
  },
  { start: new Date(), end: new Date(), title: "Renault Clio - DD000DD" },
  {
    start: new Date("2024-11-01"),
    end: new Date("2024-11-04"),
    title: "Renault Clio - CC000CC",
  },
];

const eventStyleGetter = (event) => {
  let backgroundColor = "";

  // Cambia il colore in base al titolo dell'evento (modello auto)
  switch (event.title) {
    // case "Opel Corsa":
    //   backgroundColor = COLORS.error;
    //   break;
    // case "Renault Clio":
    //   backgroundColor = COLORS.info;
    //   break;
    default:
      backgroundColor = COLORS.primary;
  }

  // Restituisci un oggetto di stile
  const style = {
    backgroundColor: backgroundColor,
    color: "white", // Colore del testo
    borderRadius: "5px", // Bordo arrotondato per un aspetto più elegante
    opacity: 0.8,
    display: "block",
  };

  return {
    style: style,
  };
};

// Toolbar personalizzata
const CustomToolbar = (toolbar: ToolbarProps) => {
  return (
    <div className="rbc-toolbar">
      <Box className="rbc-btn-group">
        <Tooltip title="Mese Precedente" placement="top" arrow>
          <Button
            variant="text"
            onClick={() => toolbar.onNavigate("PREV")}
            size="small"
          >
            <ChevronLeft fontSize="small" />
          </Button>
        </Tooltip>
        <Tooltip title="Mese Corrente" placement="top" arrow>
          <Button
            size="small"
            variant="text"
            onClick={() => toolbar.onNavigate("TODAY")}
          >
            <Today fontSize="small" />
          </Button>
        </Tooltip>
        <Tooltip title="Mese Successivo" placement="top" arrow>
          <Button
            size="small"
            variant="text"
            onClick={() => toolbar.onNavigate("NEXT")}
          >
            <ChevronRight fontSize="small" />
          </Button>
        </Tooltip>
      </Box>

      <span className="rbc-toolbar-label">{toolbar.label}</span>

      {/* Bottoni di visualizzazione */}
      <Box className="rbc-btn-group">
        <Tooltip title="Calendario" placement="top" arrow>
          <Button
            size="small"
            variant="text"
            onClick={() => toolbar.onView("month")}
          >
            <CalendarMonth fontSize="small" />
          </Button>
        </Tooltip>
        <Tooltip title="Agenda" placement="top" arrow>
          <Button
            size="small"
            variant="text"
            onClick={() => toolbar.onView("day")}
          >
            <Class fontSize="small" />
          </Button>
        </Tooltip>
      </Box>
    </div>
  );
};

export const DashboardScheduler = () => (
  <Calendar
    localizer={localizer}
    startAccessor="start"
    endAccessor="end"
    onDoubleClickEvent={(event) => alert(event.title)}
    events={events}
    style={{ height: 1000 }}
    defaultView="month"
    culture="it"
    messages={{
      ...messages,
      showMore: (count: number) => `+ altri ${count}`,
    }}
    components={{
      toolbar: CustomToolbar,
    }}
    eventPropGetter={eventStyleGetter}
  />
);
