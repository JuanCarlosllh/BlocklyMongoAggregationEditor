import { Block } from "blockly";

export enum CONNECTION_TYPE {
  STEP = "STEP",
  STEP_FIELDS = "STEP_FIELDS",
  STEP_MATCH = "STEP_MATCH",
  FIELD_EXPR = "FIELD_EXPR",
  VALUE = "VALUE",
}

export enum BLOCK_CATEGORIES {
  STEPS = "Steps",
  VALUE_TYPES = "Value types",
  PROJECTION = "Projection",
  OPERATORS = "Operators",
}

export interface ExtendedBlock extends Block {
  itemCount_: number;
}

export interface CustomBlock {
  type: string;
  category: BLOCK_CATEGORIES;
  definition: (block: ExtendedBlock) => void;
  generator: (block: ExtendedBlock) => string | [string, number];
  connections?: [CONNECTION_TYPE[], CONNECTION_TYPE[]] | CONNECTION_TYPE[];
}

export interface CustomBlocksCategory {
  name: string;
  color: string;
  blocks: CustomBlock[];
}
