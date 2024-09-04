import { Command } from 'commander';
import { handler } from './src/command.handler.ts';

export const program = new Command();

program
    .version('0.0.1')
    .description('A CLI for generating a dragee asserter')
    .argument('generate', 'generate new asserter project')
    .requiredOption('-n, --name <string>', 'name of the asserter project')
    .requiredOption('-od, --output-dir <string>', 'output dir for the asserter project')
    .action(handler);

program.showHelpAfterError().showSuggestionAfterError().parse(process.argv);
