import { Block } from "blockly";

export enum CONNECTION_TYPE {
  STEP = "STEP",
  STEP_FIELDS = "STEP_FIELDS",
  STEP_MATCH = "STEP_MATCH",
}

export type STEP_BLOCKS = "step_project" | "step_match" | "step_group";
export type PROJECTION_BLOCKS = "projection_field";
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
