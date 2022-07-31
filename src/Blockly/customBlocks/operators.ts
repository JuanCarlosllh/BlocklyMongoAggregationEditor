import Blockly from "blockly";
import { JSONGenerator } from "../generator";
import {
  BLOCK_CATEGORIES,
  CONNECTION_TYPE,
  CustomBlocksCategory,
} from "../model";
import { FIELDS_COLOR } from "./fields";

export const OPERATORS_COLOR = "#5E81AC";

export default {
  name: "Operators",
  color: OPERATORS_COLOR,
  blocks: [
    {
      type: "logical_operator_and",
      category: BLOCK_CATEGORIES.OPERATORS,
      connections: [CONNECTION_TYPE.STEP_MATCH],
      definition: (block) => {
        block.appendStatementInput("AND").setCheck(null).appendField("And");
        block.setColour(230);
        block.setTooltip("");
        block.setHelpUrl("");
      },
      generator: (block) => {
        const statements_and = JSONGenerator.statementToCode(block, "AND");
        var code = `"$and": [${statements_and}]`;
        return code;
      },
    },
    {
      type: "logical_operator_or",
      category: BLOCK_CATEGORIES.OPERATORS,
      connections: [CONNECTION_TYPE.STEP_MATCH],
      definition: (block) => {
        block.appendStatementInput("OR").setCheck(null).appendField("Or");
        block.setColour(230);
        block.setTooltip("");
        block.setHelpUrl("");
      },
      generator: (block) => {
        const statements_and = JSONGenerator.statementToCode(block, "OR");
        var code = `"$or": [${statements_and}]`;
        return code;
      },
    },
    {
      type: "field_expr",
      category: BLOCK_CATEGORIES.PROJECTION,
      connections: [CONNECTION_TYPE.STEP_FIELDS],
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
          parent === "logical_operator_or"
        ) {
          return `{"${field}": {${value}}}`;
        }
        return `"${field}": {${value}}`;
      },
    },
    {
      type: "comparison_query_equal",
      category: BLOCK_CATEGORIES.OPERATORS,
      connections: [],
      definition: (block) => {
        block.appendValueInput("EQ").setCheck("VALUE").appendField("Equal");
        block.setPreviousStatement(true, null);
        block.setNextStatement(true, null);
        block.setColour(230);
        block.setTooltip("");
        block.setHelpUrl("");
      },
      generator: (block) => {
        const parent = block.getSurroundParent()?.type;
        const value = JSONGenerator.statementToCode(block, "EQ");
        if (
          parent === "logical_operator_and" ||
          parent === "logical_operator_or"
        ) {
          return `{"$eq": ${value}}`;
        }
        return `"$eq": ${value}`;
      },
    },
    {
      type: "filter_equal",
      category: BLOCK_CATEGORIES.OPERATORS,
      definition: (block) => {
        block
          .appendValueInput("LEFT_EQ")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_CENTRE);
        block.appendDummyInput().appendField("equals");
        block.appendValueInput("RIGHT_EQ").setCheck(null);
        block.setInputsInline(true);
        block.setColour(230);
        block.setTooltip("");
        block.setHelpUrl("");
      },
      generator: (block) => {
        const left = JSONGenerator.valueToCode(block, "LEFT_EQ", 0);
        var right = JSONGenerator.valueToCode(block, "RIGHT_EQ", 0);
        return `"$eq": [${left}, ${right}]`;
      },
    },
  ],
} as CustomBlocksCategory;
