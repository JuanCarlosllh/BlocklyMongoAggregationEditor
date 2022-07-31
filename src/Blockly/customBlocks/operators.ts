import Blockly from "blockly";
import {
  BLOCK_CATEGORIES,
  CONNECTION_TYPE,
  CustomBlocksCategory,
} from "../model";

export const OPERATORS_COLOR = "#5E81AC";

export default {
  name: "Operators",
  color: OPERATORS_COLOR,
  blocks: [
    {
      type: "filter_equal",
      category: BLOCK_CATEGORIES.OPERATORS,
      connections: [CONNECTION_TYPE.STEP_MATCH],
      definition: (block) => {
        block
          .appendDummyInput()
          .appendField(new Blockly.FieldTextInput(""), "EQ_LEFT")
          .appendField("eq")
          .appendField(new Blockly.FieldTextInput(""), "EQ_RIGHT");
        block.setColour(OPERATORS_COLOR);
      },
      generator: () => "",
    },
  ],
} as CustomBlocksCategory;
