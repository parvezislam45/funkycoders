import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./vite.svg";
import "./App.css";
import Tooltip from "./components/Tooltip";

interface TooltipData {
  id: number;
  text: string;
  icon: string;
}

function App(): JSX.Element {
  const tooltipsData: TooltipData[] = [
    { id: 1, text: "Tooltip 1", icon: "Pause" },
    { id: 2, text: "Tooltip 2", icon: "Step up" },
    { id: 3, text: "Tooltip 3", icon: "Step down" },
  ];

  return (
    <div className="App">
      {tooltipsData.map((tooltip: TooltipData) => (
        <Tooltip key={tooltip.id} text={tooltip.text}>
          <button>{tooltip.icon}</button>
        </Tooltip>
      ))}
    </div>
  );
}

export default App;
