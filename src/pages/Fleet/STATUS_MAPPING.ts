import { COLORS } from "../../constants/colors";

type Status = "busy" | "free" | "maintenance";

export const VEHICLE_STATUS_MAPPING: Record<Status, string> = {
  free: COLORS.success,
  busy: COLORS.error,
  maintenance: COLORS.warning,
};
