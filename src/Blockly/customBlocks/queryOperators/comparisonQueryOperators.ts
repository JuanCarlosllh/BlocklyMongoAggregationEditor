import { JSONGenerator } from "../../generator";
import {
  BLOCK_CATEGORIES,
  CustomBlock,
  CustomBlocksCategory,
} from "../../model";

export const OPERATORS_COLOR = "#5E81AC";

const createSimpleQueryComparisonOperator = (
  type: string,
  label: string,
  mongoOperator: string
): CustomBlock => ({
  type,
  category: BLOCK_CATEGORIES.OPERATORS,
  connections: [],
  definition: (block) => {
    block.appendValueInput("OPERATOR").setCheck("VALUE").appendField(label);
    block.setPreviousStatement(true, null);
    block.setNextStatement(true, null);
    block.setColour(230);
    block.setTooltip("");
    block.setHelpUrl("");
  },
  generator: (block) => {
    const parent = block.getSurroundParent()?.type;
    const value = JSONGenerator.statementToCode(block, "OPERATOR");
    if (parent === "logical_operator_and" || parent === "logical_operator_or") {
      return `{"$${mongoOperator}": ${value}}`;
    }
    return `"$${mongoOperator}": ${value}`;
  },
});

export default {
  name: "Query operators",
  color: OPERATORS_COLOR,
  blocks: [
    createSimpleQueryComparisonOperator("comparison_query_equal", "eq", "eq"),
    createSimpleQueryComparisonOperator(
      "comparison_query_not_equal",
      "ne",
      "ne"
    ),
    createSimpleQueryComparisonOperator(
      "comparison_query_greater_than",
      "gt",
      "gt"
    ),
    createSimpleQueryComparisonOperator(
      "comparison_query_greater_than_equal",
      "gte",
      "gte"
    ),
    createSimpleQueryComparisonOperator(
      "comparison_query_less_than",
      "lt",
      "lt"
    ),
    createSimpleQueryComparisonOperator(
      "comparison_query_less_equal_than",
      "lte",
      "lte"
    ),
    createSimpleQueryComparisonOperator("comparison_query_in", "in", "in"),
    createSimpleQueryComparisonOperator("comparison_query_nin", "nin", "nin"),
    createSimpleQueryComparisonOperator(
      "comparison_query_exists",
      "exists",
      "exists"
    ),
  ],
} as CustomBlocksCategory;
