import Blockly from "blockly";
import { JSONGenerator } from "../../generator";
import {
  BLOCK_CATEGORIES,
  CONNECTION_TYPE,
  CustomBlocksCategory,
} from "../../model";
import { FIELDS_COLOR } from "../fields";

export const OPERATORS_COLOR = "#5E81AC";

export default {
  name: "Logical query operators",
  color: OPERATORS_COLOR,
  blocks: [
    {
      type: "logical_operator_and",
      category: BLOCK_CATEGORIES.OPERATORS,
      connections: [CONNECTION_TYPE.STEP_MATCH],
      definition: (block) => {
        block.appendStatementInput("AND").setCheck(null).appendField("and");
        block.setColour(230);
        block.setTooltip("");
        block.setHelpUrl("");
      },
      generator: (block) => {
        const statements = JSONGenerator.statementToCode(block, "AND");
        var code = `"$and": [${statements}]`;
        return code;
      },
    },
    {
      type: "logical_operator_or",
      category: BLOCK_CATEGORIES.OPERATORS,
      connections: [CONNECTION_TYPE.STEP_MATCH],
      definition: (block) => {
        block.appendStatementInput("OR").setCheck(null).appendField("or");
        block.setColour(230);
        block.setTooltip("");
        block.setHelpUrl("");
      },
      generator: (block) => {
        const statements = JSONGenerator.statementToCode(block, "OR");
        var code = `"$or": [${statements}]`;
        return code;
      },
    },
    {
      type: "logical_operator_nor",
      category: BLOCK_CATEGORIES.OPERATORS,
      connections: [CONNECTION_TYPE.STEP_MATCH],
      definition: (block) => {
        block.appendStatementInput("NOR").setCheck(null).appendField("nor");
        block.setColour(230);
        block.setTooltip("");
        block.setHelpUrl("");
      },
      generator: (block) => {
        const statements = JSONGenerator.statementToCode(block, "OR");
        var code = `"$nor": [${statements}]`;
        return code;
      },
    },
    {
      type: "logical_operator_not",
      category: BLOCK_CATEGORIES.OPERATORS,
      connections: [CONNECTION_TYPE.FIELD_EXPR],
      definition: (block) => {
        block.appendStatementInput("NOT").setCheck(null).appendField("not");
        block.setColour(230);
        block.setTooltip("");
        block.setHelpUrl("");
      },
      generator: (block) => {
        const statements = JSONGenerator.statementToCode(block, "NOT");
        var code = `"$not": {${statements}}`;
        return code;
      },
    },
    {
      type: "field_expr",
      category: BLOCK_CATEGORIES.PROJECTION,
      connections: [CONNECTION_TYPE.STEP_MATCH],
      definition: (block) => {
        block
          .appendStatementInput("NAME")
          .setCheck(null)
          .appendField(new Blockly.FieldTextInput("field_name"), "FIELD_NAME");
        block.setPreviousStatement(true, null);
        block.setNextStatement(true, null);
        block.setColour(FIELDS_COLOR);
        block.setTooltip("");
        block.setHelpUrl("");
      },
      generator: (block) => {
        const parent = block.getSurroundParent()?.type;

        const field = block.getFieldValue("FIELD_NAME");
        const value = JSONGenerator.statementToCode(block, "NAME");
        if (
          parent === "logical_operator_and" ||
          parent === "logical_operator_or" ||
          parent === "logical_operator_nor"
        ) {
          return `{"${field}": {${value}}}`;
        }
        return `"${field}": {${value}}`;
      },
    },
  ],
} as CustomBlocksCategory;
