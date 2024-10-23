import { alpha, Card, Typography } from "@mui/material";
import { AttachFile } from "@mui/icons-material";
import { COLORS } from "../../constants/colors";
import { FC } from "react";

type Props = {
  document: {
    id: number;
    title: string;
    description: string;
    creationDate: string;
  };
  isSelected: boolean;
  setSelected: (id: number | null) => void;
};

export const EstimateDocument: FC<Props> = ({
  document,
  isSelected,
  setSelected,
}) => {
  const handleClick = () => {
    if (isSelected) {
      setSelected(null);
    } else {
      setSelected(document.id);
    }
  };
  return (
    <Card
      variant="elevation"
      elevation={1}
      sx={{
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
      onDoubleClick={() => alert("Apre il preventivo N. " + document.id)}
    >
      <AttachFile color={isSelected ? "primary" : "inherit"} fontSize="large" />
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
        {document.title}
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
        {document.description}
      </Typography>
      <Typography
        variant="caption"
        textAlign="center"
        sx={{
          width: "100%",
          fontSize: 10,
        }}
      >
        {document.creationDate}
      </Typography>
    </Card>
  );
};
