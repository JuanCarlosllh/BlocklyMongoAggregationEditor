import Blockly from "blockly";
import { JSONGenerator } from "../generator";
import { CONNECTION_TYPE } from "../model";
import { createCustomBlock } from "../utils";

export const STEP_COLOR = "#88ab6a";

createCustomBlock("step_project", {
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

  connections: [CONNECTION_TYPE.STEP],
});

createCustomBlock("step_match", {
  definition: (block) => {
    block.appendDummyInput().appendField("Filter");
    block.appendStatementInput("MATCH").setCheck(CONNECTION_TYPE.STEP_MATCH);
    block.setColour(STEP_COLOR);
  },
  generator: (block) => {
    const statement_members = JSONGenerator.statementToCode(block, "MATCH");
    const code = `{"$match":{${statement_members}}}`;
    return code;
  },
  connections: [CONNECTION_TYPE.STEP],
});

createCustomBlock("step_group", {
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
    var aggregates = Blockly.JavaScript.statementToCode(block, "AGGREGATES");
    const code = {
      group: {
        _id: `$${_id}`,
        aggregates,
      },
    };
    return JSON.stringify(code);
  },
  connections: [CONNECTION_TYPE.STEP],
});
