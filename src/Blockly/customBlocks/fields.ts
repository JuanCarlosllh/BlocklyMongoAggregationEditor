import Blockly from "blockly";
import { CONNECTION_TYPE } from "../model";

import { createCustomBlock } from "../utils";

export const FIELDS_COLOR = "#b38cac";

createCustomBlock("projection_field", {
  definition: (block) => {
    block
      .appendDummyInput()
      .appendField("Field")
      .appendField(new Blockly.FieldTextInput("field_name"), "FIELD")
      .appendField("as")
      .appendField(new Blockly.FieldTextInput(""), "ALIAS");
    block.setPreviousStatement(true, null);
    block.setNextStatement(true, null);
    block.setColour(FIELDS_COLOR);
    block.setTooltip("");
    block.setHelpUrl("");
  },
  generator: (block) => {
    const textField = block.getFieldValue("FIELD");
    const textAlias = block.getFieldValue("ALIAS");
    if (textAlias === "") {
      return `"${textField}": 1`;
    }
    return `"${textAlias}": "$${textField}"`;
  },
  connections: [CONNECTION_TYPE.STEP_FIELDS],
});
