import React, { createRef } from "react";
import Stack from "@mui/material/Stack";
import SenseBoard from "./SenseBoard";
import { toJpeg } from "html-to-image";
import ToDoList from "./TodoList";

export default function SensesChart() {
  const screenshotRef = createRef<HTMLDivElement>();
  const downloadImage = () => {
    console.log(screenshotRef.current);
    screenshotRef.current &&  toJpeg(screenshotRef.current, { quality: 1 }).then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = "sensory-board.jpeg";
      link.href = dataUrl;
      link.click();
    });
  };
  return (
    <div>
      <h1>Placeholder title</h1>
      <section>
        <Stack
          sx={{
            minHeight: "330px",
            padding: "0 2rem",
            minWidth: "330px",
            justifyContent: "center"
          }}
          spacing={1}
          direction="row"
        >
          <div
            ref={screenshotRef}
            style={{
              display: "flex",
              padding: "1rem",
              paddingBottom: "2rem",
              background: "#3A474F",
              aspectRatio: "3/2"
            }}
          >
            <SenseBoard />
          </div>
        </Stack>

        <div>
          <button onClick={downloadImage}>Download</button>
        </div>
      </section>
      <section>
        <h2>About</h2>
        <p>
          [Blurb],{" "}
          <a href="https://twitter.com/laurenancona/status/1529588578841509888">
            Twitter context
          </a>
        </p>
        <address>
          <a href="https://twitter.com/laurenancona">Lauren Ancona, creator</a>
        </address>
      </section>
      <hr style={{ marginTop: "3rem" }} />
      <ToDoList />
    </div>
  );
}
