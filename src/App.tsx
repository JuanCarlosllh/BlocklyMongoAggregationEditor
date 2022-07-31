import { Box, SimpleGrid } from "@mantine/core";
import { useState } from "react";
import ReactJson from "react-json-view";

import { BlocklyComponent } from "./Blockly/BlocklyComponent";

function App() {
  const [code, setCode] = useState<Object>({});
  return (
    <SimpleGrid
      cols={2}
      spacing="lg"
      sx={{
        margin: "20px",
        flex: 1,
        overflow: "hidden",
      }}
    >
      <Box sx={{ borderRadius: "6px", overflow: "hidden", height: "100%" }}>
        <BlocklyComponent
          readOnly={false}
          moveOptions={{
            scrollbars: true,
            drag: true,
            wheel: true,
          }}
          onChange={setCode}
        />
      </Box>
      <Box sx={{ borderRadius: "6px", overflow: "hidden" }}>
        <ReactJson
          style={{ height: "100%", padding: "16px" }}
          src={code}
          // theme="ocean"
          onEdit={false}
          onAdd={false}
          onDelete={false}
          enableClipboard={false}
          displayDataTypes={false}
          collapsed={false}
          displayObjectSize={false}
          displayArrayKey={false}
          theme={{
            base00: "#3B4252",
            base01: "#BF616A",
            base02: "#A3BE8C",
            base03: "#EBCB8B",
            base04: "#81A1C1",
            base05: "#B48EAD",
            base06: "#88C0D0",
            base07: "#E5E9F0",
            base08: "#4C566A",
            base09: "#D08770",
            base0A: "#3B4252",
            base0B: "#434C5E",
            base0C: "#D8DEE9",
            base0D: "#ECEFF4",
            base0E: "#5E81AC",
            base0F: "#8FBCBB",
          }}
        />
      </Box>
    </SimpleGrid>
  );
}

export default App;
