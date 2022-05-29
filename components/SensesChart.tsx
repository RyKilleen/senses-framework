import React, { createRef } from "react";
import SenseBoard from "./SenseBoard";
import ToDoList from "./TodoList";
import { styled } from '@stitches/react'
const Button = styled('button', {
    padding: '0.75rem',
    fontSize: '1.2rem',
    background: '#0070f3',
    color: 'white',
    border: '2px solid #0070f3',
    borderRadius: '8px',
    fontWeight: 'bold',
    '@media (prefers-reduced-motion: no-preference)': {
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    },
    '&:hover': {
        cursor: 'pointer',
        color: '#0070f3',
        background: 'white'
    }
})




export default function SensesChart() {
    const screenshotRef = createRef<HTMLDivElement>();
    const downloadImage = async () => {
        const toPng = (await import('html-to-image')).toPng
        console.log(screenshotRef.current);
        screenshotRef.current && toPng(screenshotRef.current, { quality: 1 }).then(function (dataUrl) {
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
                <div
                    style={{
                        display: 'flex',
                        minHeight: "330px",
                        padding: "0 2rem",
                        minWidth: "330px",
                        justifyContent: "center"
                    }}

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

                </div>
                <div style={{ flex: 'none', display: 'flex', justifyContent: 'end' }}>
                    <Button onClick={downloadImage} >Share Image</Button>
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
