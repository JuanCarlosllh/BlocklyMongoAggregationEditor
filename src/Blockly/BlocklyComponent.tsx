import { useState } from "react";
import { useEffect, useRef } from "react";
import Blockly from "blockly/core";
import locale from "blockly/msg/en";

import categories from "../Blockly/customBlocks";
import "./generator";
import { JSONGenerator } from "./generator";
import { createCustomBlocks, generateToolbox } from "./utils";

// @ts-ignore
Blockly.setLocale(locale);
createCustomBlocks(categories.map((categories) => categories.blocks).flat());

interface BlocklyComponentProps extends Partial<Blockly.Options> {
  initialXml?: string;
  onChange?: (parsedCode: Object) => void;
}

export const BlocklyComponent = (props: BlocklyComponentProps) => {
  const [isInitialized, setInitialized] = useState(false);
  const blocklyDiv = useRef<HTMLDivElement>(null);
  let primaryWorkspace = useRef<Blockly.WorkspaceSvg>();

  useEffect(() => {
    if (blocklyDiv?.current && !isInitialized && !primaryWorkspace.current) {
      const { initialXml, ...rest } = props;
      primaryWorkspace.current = Blockly.inject(blocklyDiv.current, {
        toolbox: generateToolbox(categories),
        trashcan: false,
        scrollbars: false,

        theme: {
          fontStyle: {
            family: "Roboto Mono, monospace",
            size: 11,
            weight: "bold",
          },
          componentStyles: {
            workspaceBackgroundColour: "#3B4252",
            toolboxBackgroundColour: "#4C566A",
            toolboxForegroundColour: "#E5E9F0",
            flyoutBackgroundColour: "#4C566A",
            flyoutForegroundColour: "#E5E9F0",
            scrollbarColour: "#4C566A",
            insertionMarkerColour: "  #A3BE8C",
          },
        },
        sounds: false,

        ...(rest as any),
      });

      primaryWorkspace.current.addChangeListener((event: any) => {
        if (event.type === "move" || event.type === "change") {
          var code = JSONGenerator.workspaceToCode(primaryWorkspace.current);
          const parsedCode = JSON.parse(`[${code}]`);
          if (props.onChange) {
            props.onChange(parsedCode);
          }
        }
      });

      if (initialXml) {
        Blockly.Xml.domToWorkspace(
          Blockly.Xml.textToDom(initialXml),
          primaryWorkspace.current
        );
      }
      setInitialized(true);
    }
  }, [primaryWorkspace, blocklyDiv, props]);

  return (
    <div style={{ position: "relative", height: "100%" }}>
      <div
        ref={blocklyDiv}
        id="blocklyDiv"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
    </div>
  );
};
