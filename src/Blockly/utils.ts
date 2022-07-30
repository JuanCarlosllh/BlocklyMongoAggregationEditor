import Blockly, { Block } from "blockly";
import { JSONGenerator } from "./generator";
import { BlockTypes, CONNECTION_TYPE, ExtendedBlock } from "./model";

type BlockConnection = [CONNECTION_TYPE[], CONNECTION_TYPE[]];
export const createCustomBlock = (
  type: BlockTypes,
  implementation: {
    definition: (block: Block) => void;
    generator: (block: ExtendedBlock) => string;
    connections?: CONNECTION_TYPE[] | BlockConnection;
  }
) => {
  const { definition, connections, generator } = implementation;

  Blockly.Blocks[type] = {
    init: function () {
      const block = this as Block;
      definition(block);
      console.log(type, connections);
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
};
