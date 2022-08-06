import StepBlocks from "./steps";
import FieldBlocks from "./fields";
import OperatorsBlocks from "./queryOperators/queryOperators";
import ComparisonQueryOperators from "./queryOperators/comparisonQueryOperators";
import ValueTypeBlocks from "./valueTypes";
import { CustomBlocksCategory } from "../model";

export default [
  StepBlocks,
  FieldBlocks,
  OperatorsBlocks,
  ComparisonQueryOperators,
  ValueTypeBlocks,
] as CustomBlocksCategory[];
