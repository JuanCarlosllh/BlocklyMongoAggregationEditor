import Blockly from "blockly";
import { CONNECTION_TYPE } from "../model";
import { createCustomBlock } from "../utils";

createCustomBlock("filter_equal", {
  definition: (block) => {
    block
      .appendDummyInput()
      .appendField(new Blockly.FieldTextInput(""), "EQ_LEFT")
      .appendField("eq")
      .appendField(new Blockly.FieldTextInput(""), "EQ_RIGHT");
    block.setColour(230);
  },
  generator: () => "",
  connections: [CONNECTION_TYPE.STEP_MATCH],
});
