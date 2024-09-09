import { Command } from 'commander';
import { generatorHandler } from './src/command.handler.ts';

const program = new Command();

export const generateAsserter = new Command('generate-asserter')
    .requiredOption('-n, --name <string>', 'name of the asserter project')
    .requiredOption('-od, --output-dir <string>', 'output dir for the asserter project')
    .action(generatorHandler);

program
    .addCommand(generateAsserter)
    .showHelpAfterError()
    .showSuggestionAfterError()
    .parse(process.argv);
