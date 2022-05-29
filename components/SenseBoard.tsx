import Slider from "./Slider";

const SenseBoard = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        marginBottom: "2rem",
        borderRadius: "12px",
        background: `linear-gradient(
            0deg,
            rgba(83, 106, 137, 1) 0%,
            rgba(58, 71, 79, 1) 40%,
            rgba(83, 97, 106, 1) 40%,
            rgba(83, 97, 106, 1) 60%,
            rgba(58, 71, 79, 1) 60%,
            rgba(138, 91, 73, 1) 100%
          )`
      }}
    >
      <Slider
        label="vision"
        displayText="👁️"
        onChange={(value) => console.log(value)}
      />
      <Slider
        label="sound"
        displayText="👂"
        onChange={(value) => console.log(value)}
      />
      <Slider
        label="taste"
        displayText="👄"
        onChange={(value) => console.log(value)}
      />
      <Slider
        label="smell"
        displayText="👃"
        onChange={(value) => console.log(value)}
      />
      <Slider
        label="touch"
        displayText="✋"
        onChange={(value) => console.log(value)}
      />
      <Slider
        label="proprioception"
        displayText="👤"
        onChange={(value) => console.log(value)}
      />
      <Slider
        label="nociception"
        displayText="🏃"
        onChange={(value) => console.log(value)}
      />
      <Slider
        label="neuroception"
        displayText="🧠"
        onChange={(value) => console.log(value)}
      />
    </div>
  );
};

export default SenseBoard;
