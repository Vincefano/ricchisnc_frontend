import { Avatar } from "@mui/material";
import * as BrandSvgs from "../../assets/brand_svgs";
import { convertStringToPascalCase } from "../../utils/convertStringToPascalCase";

type Props = {
  size: "xs" | "s" | "m" | "l" | "xl";
  name: keyof typeof BrandSvgs;
};

/** Accepted sizes */
const SIZE_MAPPING = {
  xs: "1.5em",
  s: "2em",
  m: "4em",
  l: "8em",
  xl: "16em",
};

/** Icon component based on the downloaded and mapped icons */
export const CarBrandLogo = ({ size, name }: Props) => {
  return (
    <Avatar
      variant="square"
      imgProps={{
        draggable: false,
      }}
      alt={`${name} logo`}
      src={BrandSvgs[convertStringToPascalCase(name) as keyof typeof BrandSvgs]}
      sx={{ width: SIZE_MAPPING[size], height: "auto" }}
      draggable={false}
    />
  );
};
