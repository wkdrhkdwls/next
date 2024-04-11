import { vars } from "@custom/themes";
import * as React from "react";
import { forwardRef, Ref } from "react";
import { textStyle } from "./style.css";
import { HeadingProps } from "./types";
import { clsx } from "clsx";
import { StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";

const Heading = (props: HeadingProps, ref: Ref<HTMLElement>) => {
  const { as = "h1", fontSize, background, color = "gray", children } = props;

  return React.createElement(
    as,
    {
      ...props,
      ref,
      className: clsx([
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        textStyle({
          fontSize,
        }),
        props.className,
      ]),
      style: {
        color: vars.colors.$scale?.[color]?.[700] ?? color,
        background: vars.colors.$scale?.[background]?.[100] ?? background,
        ...props.style,
      },
    },
    children,
  );
};

const _Heading = forwardRef(Heading);
export { _Heading as Heading };
