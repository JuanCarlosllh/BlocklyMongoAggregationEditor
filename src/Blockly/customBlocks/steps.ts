import Blockly from "blockly";
import { JSONGenerator } from "../generator";
import {
  BLOCK_CATEGORIES,
  CONNECTION_TYPE,
  CustomBlocksCategory,
} from "../model";

export const STEP_COLOR = "#88ab6a";

export default {
  name: "Steps",
  color: STEP_COLOR,
  blocks: [
    {
      type: "step_project",
      category: BLOCK_CATEGORIES.STEPS,
      connections: [CONNECTION_TYPE.STEP],
      definition: (block) => {
        block.appendDummyInput().appendField("Fields");
        block
          .appendStatementInput("PROJECTION")
          .setCheck(CONNECTION_TYPE.STEP_FIELDS);
        block.setColour(STEP_COLOR);
      },
      generator: (block) => {
        const statement_members = JSONGenerator.statementToCode(
          block,
          "PROJECTION"
        );
        const code = `{"$project":{${statement_members}}}`;
        return code;
      },
    },
    {
      type: "step_match",
      category: BLOCK_CATEGORIES.STEPS,
      connections: [CONNECTION_TYPE.STEP],
      definition: (block) => {
        block.appendDummyInput().appendField("Filter");
        block
          .appendStatementInput("MATCH")
          .setCheck(CONNECTION_TYPE.STEP_MATCH);
        block.setColour(STEP_COLOR);
      },
      generator: (block) => {
        const statement_members = JSONGenerator.statementToCode(block, "MATCH");
        const code = `{"$match":{${statement_members}}}`;
        return code;
      },
    },
    {
      type: "step_group",
      category: BLOCK_CATEGORIES.STEPS,
      connections: [CONNECTION_TYPE.STEP],
      definition: (block) => {
        block
          .appendDummyInput()
          .appendField("Group by")
          .appendField(new Blockly.FieldTextInput(""), "GROUP_BY");
        block
          .appendStatementInput("AGGREGATES")
          .setCheck(null)
          .appendField("aggregate");
        block.setPreviousStatement(true, null);
        block.setNextStatement(true, null);
        block.setColour(STEP_COLOR);
        block.setTooltip("");
        block.setHelpUrl("");
      },
      generator: (block) => {
        var _id = block.getFieldValue("GROUP_BY");
        var aggregates = Blockly.JavaScript.statementToCode(
          block,
          "AGGREGATES"
        );
        const code = {
          group: {
            _id: `$${_id}`,
            aggregates,
          },
        };
        return JSON.stringify(code);
      },
    },
  ],
} as CustomBlocksCategory;
