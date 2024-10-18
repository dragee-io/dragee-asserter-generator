import { Command } from 'commander';
import { generatorHandler } from './src/command.handler.ts';

export const generateAsserter = new Command('generate-asserter')
    .alias('ga')
    .summary('generates a new asserter project')
    .description(
        'Generates a new asserter project.\nBased on a standard dragee asserter template, with mandatory dependancies and a sample rule.'
    )
    .requiredOption('-n, --name <string>', 'name of the new asserter project')
    .requiredOption('-od, --output-dir <string>', 'output dir for the new asserter project')
    .action(generatorHandler);
