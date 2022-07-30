export const toolbox = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Steps",
      colour: 105,
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
      colour: 285,
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
      colour: 230,
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
