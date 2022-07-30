import React from "react";
import { BlocklyComponent } from "./BlocklyComponent";
import { BlockTypes } from "./model";

const Block = (props: {
  type: BlockTypes;
  is?: string;
  children?: JSX.Element;
}) => {
  props.is = "blockly";
  return React.createElement("block", props, props.children);
};

export { Block, BlocklyComponent };
