import Blockly from "blockly";
import {
  BLOCK_CATEGORIES,
  CONNECTION_TYPE,
  CustomBlocksCategory,
} from "../model";

export const FIELDS_COLOR = "#b38cac";

export default {
  name: "Projection",
  color: FIELDS_COLOR,
  blocks: [
    {
      type: "projection_field",
      category: BLOCK_CATEGORIES.PROJECTION,
      connections: [CONNECTION_TYPE.STEP_FIELDS],
      definition: (block) => {
        block
          .appendDummyInput()
          .appendField("Field")
          .appendField(new Blockly.FieldTextInput("field_name"), "FIELD");
        block.setPreviousStatement(true, null);
        block.setNextStatement(true, null);
        block.setColour(FIELDS_COLOR);
        block.setTooltip("");
        block.setHelpUrl("");
      },
      generator: (block) => {
        const textField = block.getFieldValue("FIELD");
        return `"${textField}": 1`;
      },
    },
    {
      type: "projection_field_with_alias",
      category: BLOCK_CATEGORIES.PROJECTION,
      connections: [CONNECTION_TYPE.STEP_FIELDS],
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
    },
  ],
} as CustomBlocksCategory;
