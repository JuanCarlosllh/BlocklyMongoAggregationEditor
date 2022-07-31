import { Global } from "@mantine/core";

export const GlobalStyles = () => (
  <Global
    styles={{
      "html, body": {
        margin: 0,
        height: "100%",
      },
      "#root": {
        height: "100%",
        width: "100%",
        display: "flex",
        backgroundColor: "#2A2E39",
      },
      ".blocklyToolboxDiv": {
        paddingLeft: "8px",
      },
      ".blocklyToolboxCategory": { paddingRight: "16px" },
      ".blocklyTreeRow": {
        borderLeftWidth: "8px !important",
      },
      ".blocklyMainBackground": {
        stroke: "transparent",
      },
    }}
  />
);
