import { vars } from "@custom/themes";
import { style } from "@vanilla-extract/css";

export const blockStyle = style({
  width: "100px",
  height: "100px",
  backgroundColor: vars.colors.$scale.pink[500],
});
