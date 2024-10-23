import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "dayjs/locale/it"; // Importa la lingua italiana
import "react-big-calendar/lib/css/react-big-calendar.css";

dayjs.locale("it"); // Imposta il locale di dayjs su italiano

const localizer = dayjsLocalizer(dayjs);

export const DashboardScheduler = () => (
  <div>
    <Calendar
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      onDoubleClickEvent={(event) => alert(event.title)}
      events={[
        {
          start: new Date("2024-10-12"),
          end: new Date("2024-10-25"),
          title: "Mercedes A-Class",
        },
        {
          start: new Date("2024-10-22"),
          end: new Date("2024-10-30"),
          title: "Opel Corsa",
        },
        { start: new Date(), end: new Date(), title: "Opel Corsa" },
      ]}
      style={{ height: 800 }}
      defaultView="month"
      views={["month", "day"]}
      culture="it"
    />
  </div>
);
