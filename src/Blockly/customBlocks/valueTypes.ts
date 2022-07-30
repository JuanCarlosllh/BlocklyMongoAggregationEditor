import Blockly from "blockly";
import { CONNECTION_TYPE } from "../model";

import { createCustomBlock } from "../utils";

createCustomBlock("value_number", {
  definition: (block) => {
    block
      .appendDummyInput()
      .appendField(new Blockly.FieldTextInput("0"), "VALUE");
    block.setInputsInline(false);
    block.setOutput(true, null);
    block.setColour(230);
    block.setTooltip("");
    block.setHelpUrl("");
  },

  generator: () => {
    return "";
  },
});
