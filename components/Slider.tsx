import * as React from "react";
import MUISlider, { SliderThumb } from "@mui/material/Slider";

const CustomThumb = (props: unknown) => 
(
    <SliderThumb
      {...props}
      // @ts-ignore  TODO: figure out typing
      sx={{ width: "16px", borderRadius: "14%", height: "24px" }}
    />
)

type Props = {
  label: string;
  onChange?: (value: number | number[]) => void;
  displayText?: string;
};
export default function Slider({ label, onChange, displayText }: Props) {
  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
        height: "100%"
      }}
    >
      <MUISlider
        aria-label={label}
        orientation="vertical"
        defaultValue={0}
        min={-100}
        max={100}
        step={10}
        marks={[{ value: -50 }, { value: 0 }, { value: 50 }]}
        valueLabelDisplay="auto"
        onChangeCommitted={(e, value) => onChange && onChange(value)}
        track={false}
        sx={{
          color: "primary.contrastText",
          paddingRight: "1rem",
          paddingLeft: "1rem"
        }}
        components={{
          Thumb: CustomThumb
        }}
      />
      {displayText && (
        <span
          style={{
            position: "absolute",
            bottom: "-2rem",
            left: "50%",
            transform: "translateX(-50%)"
          }}
        >
          {displayText}
        </span>
      )}
    </span>
  );
}
