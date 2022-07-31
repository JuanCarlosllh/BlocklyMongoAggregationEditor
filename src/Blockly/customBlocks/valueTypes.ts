import Blockly from "blockly";
import { BLOCK_CATEGORIES, CustomBlocksCategory } from "../model";

const VALUE_TYPES_COLOR = "#EBCB8B";

export default {
  name: "Value types",
  color: VALUE_TYPES_COLOR,
  blocks: [
    {
      type: "value_number",
      category: BLOCK_CATEGORIES.OPERATORS,
      definition: (block) => {
        block
          .appendDummyInput()
          .appendField(new Blockly.FieldNumber(0), "VALUE");
        block.setInputsInline(false);
        block.setOutput(true, null);
        block.setColour(VALUE_TYPES_COLOR);
        block.setTooltip("");
        block.setHelpUrl("");
      },
      generator: (block) => {
        const value = block.getFieldValue("VALUE");
        return `${value}`;
      },
    },
    {
      type: "value_string",
      category: BLOCK_CATEGORIES.OPERATORS,
      definition: (block) => {
        block
          .appendDummyInput()
          .appendField(new Blockly.FieldTextInput("String"), "VALUE");
        block.setInputsInline(false);
        block.setOutput(true, null);
        block.setColour(VALUE_TYPES_COLOR);
        block.setTooltip("");
        block.setHelpUrl("");
      },
      generator: (block) => {
        const value = block.getFieldValue("VALUE");
        return `"${value}"`;
      },
    },
    {
      type: "value_boolean",
      category: BLOCK_CATEGORIES.OPERATORS,
      definition: (block) => {
        block.appendDummyInput().appendField(
          new Blockly.FieldDropdown([
            ["true", "true"],
            ["false", "false"],
          ]),
          "VALUE"
        );
        block.setInputsInline(false);
        block.setOutput(true, null);
        block.setColour(VALUE_TYPES_COLOR);
        block.setTooltip("");
        block.setHelpUrl("");
      },
      generator: (block) => {
        const value = block.getFieldValue("VALUE");
        return `${value}`;
      },
    },
  ],
} as CustomBlocksCategory;
