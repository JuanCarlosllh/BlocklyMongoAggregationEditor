import Blockly from "blockly";
import { CONNECTION_TYPE } from "../model";
import { createCustomBlock } from "../utils";

export const OPERATORS_COLOR = "#5E81AC";

createCustomBlock("filter_equal", {
  definition: (block) => {
    block
      .appendDummyInput()
      .appendField(new Blockly.FieldTextInput(""), "EQ_LEFT")
      .appendField("eq")
      .appendField(new Blockly.FieldTextInput(""), "EQ_RIGHT");
    block.setColour(OPERATORS_COLOR);
  },
  generator: () => "",
  connections: [CONNECTION_TYPE.STEP_MATCH],
});
