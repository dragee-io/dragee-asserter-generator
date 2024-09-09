import { Command } from 'commander';
import { generatorHandler } from './src/command.handler.ts';

export const generateAsserter = new Command('generate-asserter')
    .alias('ga')
    .requiredOption('-n, --name <string>', 'name of the asserter project')
    .requiredOption('-od, --output-dir <string>', 'output dir for the asserter project')
    .action(generatorHandler);