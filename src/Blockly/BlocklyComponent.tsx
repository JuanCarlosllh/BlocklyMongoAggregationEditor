import React, { useState } from "react";
import { useEffect, useRef } from "react";

import Blockly from "blockly/core";
import locale from "blockly/msg/en";
import "blockly/blocks";
import "./generator";
import "./customBlocks";
import { toolbox } from "./toolbox";
import { JSONGenerator } from "./generator";

// @ts-ignore
Blockly.setLocale(locale);

interface BlocklyComponentProps extends Partial<Blockly.Options> {
  initialXml?: string;
  children: React.ReactNode;
  onChange?: (parsedCode: Object) => void;
}

export const BlocklyComponent = (props: BlocklyComponentProps) => {
  const [isInitialized, setInitialized] = useState(false);
  const blocklyDiv = useRef<HTMLDivElement>(null);
  let primaryWorkspace = useRef<Blockly.WorkspaceSvg>();

  const generateCode = () => {
    var code = JSONGenerator.workspaceToCode(primaryWorkspace.current);

    const parsedCode = JSON.parse(`[${code}]`);
    if (props.onChange) {
      props.onChange(parsedCode);
    }
  };

  useEffect(() => {
    if (blocklyDiv?.current && !isInitialized && !primaryWorkspace.current) {
      const { initialXml, ...rest } = props;
      primaryWorkspace.current = Blockly.inject(blocklyDiv.current, {
        toolbox,
        sounds: false,

        ...(rest as any),
      });

      if (initialXml) {
        Blockly.Xml.domToWorkspace(
          Blockly.Xml.textToDom(initialXml),
          primaryWorkspace.current
        );
      }
      setInitialized(true);
    }
  }, [primaryWorkspace, toolbox, blocklyDiv, props]);

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <button onClick={generateCode}>Convert</button>
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
    </div>
  );
};
