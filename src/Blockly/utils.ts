import Blockly from "blockly";
import { JSONGenerator } from "./generator";
import {
  CONNECTION_TYPE,
  CustomBlock,
  CustomBlocksCategory,
  ExtendedBlock,
} from "./model";

export const generateToolbox = (
  CustomBlocksCategories: CustomBlocksCategory[]
) => ({
  kind: "categoryToolbox",
  contents: CustomBlocksCategories.map((category) => ({
    kind: "category",
    name: category.name,
    colour: category.color,
    contents: category.blocks.map((block) => ({
      kind: "block",
      type: block.type,
    })),
  })),
});

export const createCustomBlocks = (customBlocks: CustomBlock[]) => {
  customBlocks.forEach((customBlock) => {
    const { definition, connections, generator, type } = customBlock;

    Blockly.Blocks[type] = {
      init: function () {
        const block = this as ExtendedBlock;
        definition(block);
        if (connections) {
          if (typeof connections[0] === "string") {
            block.setPreviousStatement(true, connections as string[]);
            block.setNextStatement(true, connections as string[]);
          } else {
            block.setPreviousStatement(true, connections[0]);
            block.setPreviousStatement(true, connections[1]);
          }
        } else {
          block.setPreviousStatement(false);
          block.setNextStatement(false);
        }
      },
    };

    JSONGenerator[type] = generator;
  });
};
