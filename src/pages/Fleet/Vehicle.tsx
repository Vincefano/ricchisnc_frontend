import { alpha, Box, Card, Tooltip, Typography } from "@mui/material";
import { COLORS } from "../../constants/colors";
import { FC } from "react";
import { CarBrandLogo } from "../../components/CarBrandLogo";
import * as BrandSvgs from "../../assets/brand_svgs";
import { VEHICLE_STATUS_MAPPING } from "./STATUS_MAPPING";
import { useTranslation } from "react-i18next";

export type VehicleProp = {
  status: "free" | "busy" | "maintenance";
  id: number;
  brand: string;
  model: string;
  plate: string;
};

type Props = {
  vehicle: VehicleProp;
  isSelected: boolean;
  setSelected: (id: number | null) => void;
};

export const Vehicle: FC<Props> = ({ vehicle, setSelected, isSelected }) => {
  const { t } = useTranslation();

  const { brand, id, model, plate, status } = vehicle;

  const handleClick = () => {
    if (isSelected) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };
  return (
    <Tooltip
      title={t(`pages.fleet.vehicle.status.${status}`)}
      placement="top"
      arrow
    >
      <Card
        variant="elevation"
        elevation={1}
        sx={{
          position: "relative",
          width: 150,
          height: 150,
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 2,
          border: `5px solid ${isSelected ? alpha(COLORS.primary, 0.8) : "transparent"}`,
          bgcolor: `${isSelected ? alpha(COLORS.primary, 0.05) : "white"}`,
          transition: "all 0.2s",
          userSelect: "none",
          cursor: "pointer",
          ":hover": {
            border: `5px solid ${isSelected ? alpha(COLORS.primary, 0.8) : COLORS.shade}`,
          },
          borderRadius: 2,
        }}
        onClick={handleClick}
        onDoubleClick={() => alert("Hai selezionato " + brand + " " + model)}
      >
        <Box
          sx={{
            position: "absolute",
            borderRadius: 100,
            bgcolor:
              VEHICLE_STATUS_MAPPING[
                vehicle.status as keyof typeof VEHICLE_STATUS_MAPPING
              ],
            width: 10,
            height: 10,
            right: 10,
          }}
        ></Box>
        <CarBrandLogo size="s" name={brand as keyof typeof BrandSvgs} />
        <Typography
          mt={2}
          variant="subtitle1"
          fontWeight={600}
          fontSize={14}
          textAlign="center"
          color={`${isSelected ? COLORS.primary : COLORS.text}`}
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            width: "100%",
          }}
        >
          {brand}
        </Typography>
        <Typography
          textAlign="center"
          variant="caption"
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            width: "100%",
          }}
        >
          {model}
        </Typography>
        <Typography
          variant="caption"
          textAlign="center"
          sx={{
            width: "100%",
            fontSize: 10,
          }}
        >
          {plate}
        </Typography>
      </Card>
    </Tooltip>
  );
};
