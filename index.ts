import {$} from "bun"
import {Command} from "commander"
import {join, resolve} from 'path'
import {cloneRepos, readJsonByPath} from "./src/utils/utils";
import {existsSync, mkdirSync} from "fs";
import chalk from "chalk";

const program = new Command();

program
    .name('gmc')
    .description('Utility to clone multiple Git repositories on the same directory')
    .version('1.0.0');

program
    .command('clone')
    .description('Clone Git repositories basing on "repositories.json" file')
    .option('--file, -f <string>', 'set a custom repositories json file path', join('.', 'repositories.json'))
    .option('--target, -s <string>', 'set a custom target folder where repositories will be cloned', resolve('.', 'output'))
    .action(async (options) => {
        const jsonFilePath = options.file;
        const targetFolderPath = options.target;
        if(!existsSync(targetFolderPath)){
          mkdirSync(targetFolderPath)
        }

        try {
          const repositories = await readJsonByPath(jsonFilePath)
          await cloneRepos(repositories, targetFolderPath)
          console.log(chalk.greenBright('Process finished with success!'))
        } catch (error) {
          console.log(chalk.red('Process finished with Errors!'))
        }
    });

program.parse();