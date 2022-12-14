import Blockly, { Block } from "blockly";
import { ExtendedBlock } from "./model";

type GeneratorCodeFN = (block: ExtendedBlock) => [string, number] | string;

type NewGenerators = Record<string, GeneratorCodeFN>;

// @ts-ignore
interface JSONGeneratorInterface extends Blockly.Generator {
  PRECEDENCE: number;
  ORDER_ATOMIC: number;
  scrub_: () => string;
}

export const JSONGenerator = new Blockly.Generator(
  "JSON"
) as unknown as JSONGeneratorInterface & NewGenerators;
JSONGenerator.PRECEDENCE = 0;

// @ts-ignore
JSONGenerator.scrub_ = (block: Block, code: string, opt_thisOnly: boolean) => {
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  if (nextBlock && !opt_thisOnly) {
    return code + ",\n" + JSONGenerator.blockToCode(nextBlock);
  }
  return code;
};
