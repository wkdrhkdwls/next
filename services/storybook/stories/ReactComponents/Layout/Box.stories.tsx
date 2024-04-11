import { Box as _Box } from "@custom/react-components-layout";
import "@custom/react-components-layout/style.css";

export default {
  title: "React Components/Layout/Box",
  component: _Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const BoxStory = {
  args: {
    as: "button",
    padding: "5",
    background: "green",
    boxShadow: "xl",
    borderRadius: "md",
  },
};
