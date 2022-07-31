import { FIELDS_COLOR } from "./customBlocks/fields";
import { OPERATORS_COLOR } from "./customBlocks/operators";
import { STEP_COLOR } from "./customBlocks/steps";

export const toolbox = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Steps",
      colour: STEP_COLOR,
      contents: [
        {
          kind: "block",
          type: "step_project",
        },
        {
          kind: "block",
          type: "step_match",
        },
        {
          kind: "block",
          type: "step_group",
        },
      ],
    },
    {
      kind: "category",
      name: "Value types",
      colour: 285,
      contents: [
        {
          kind: "block",
          type: "value_number",
        },
      ],
    },
    {
      kind: "category",
      name: "Projection",
      colour: FIELDS_COLOR,
      contents: [
        {
          kind: "block",
          type: "projection_field",
        },
      ],
    },
    {
      kind: "category",
      name: "Operators",
      colour: OPERATORS_COLOR,
      contents: [
        {
          kind: "label",
          text: "Comparison",
        },
        {
          kind: "block",
          type: "filter_equal",
        },
      ],
    },
  ],
};
