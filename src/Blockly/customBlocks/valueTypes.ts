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
          .appendField(new Blockly.FieldTextInput("0"), "VALUE");
        block.setInputsInline(false);
        block.setOutput(true, null);
        block.setColour(VALUE_TYPES_COLOR);
        block.setTooltip("");
        block.setHelpUrl("");
      },
      generator: () => "",
    },
  ],
} as CustomBlocksCategory;
