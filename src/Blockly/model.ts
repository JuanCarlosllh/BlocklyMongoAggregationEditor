import { Block } from "blockly";

export enum CONNECTION_TYPE {
  STEP = "STEP",
  STEP_FIELDS = "STEP_FIELDS",
  STEP_MATCH = "STEP_MATCH",
}

export enum BLOCK_CATEGORIES {
  STEPS = "Steps",
  VALUE_TYPES = "Value types",
  PROJECTION = "Projection",
  OPERATORS = "Operators",
}

export type STEP_BLOCKS = "step_project" | "step_match" | "step_group";
export type PROJECTION_BLOCKS =
  | "projection_field"
  | "projection_field_with_alias";
export type VALUE_BLOCKS = "value_number";
export type OPERATOR_BLOCKS = "filter_equal";

export type BlockTypes =
  | STEP_BLOCKS
  | PROJECTION_BLOCKS
  | VALUE_BLOCKS
  | OPERATOR_BLOCKS;

export interface ExtendedBlock extends Block {
  itemCount_: number;
}

export interface CustomBlock {
  type: BlockTypes;
  category: BLOCK_CATEGORIES;
  definition: (block: ExtendedBlock) => void;
  generator: (block: ExtendedBlock) => string;
  connections?: [CONNECTION_TYPE[], CONNECTION_TYPE[]] | CONNECTION_TYPE[];
}

export interface CustomBlocksCategory {
  name: string;
  color: string;
  blocks: CustomBlock[];
}
