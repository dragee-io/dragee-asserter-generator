import { cpSync, readFileSync, readdirSync, renameSync, writeFileSync } from 'node:fs';

const templateDir = `${import.meta.dir}/../template/`;
const charEncoding = 'utf-8';

type Options = {
    name: string;
    outputDir: string;
};

export const handler = async (argument: string, options: Options) => {
    const outputDir = `${options.outputDir}/${options.name}-asserter`;
    const name = options.name.toLowerCase();

    // Copy all files
    cpSync(templateDir, outputDir, { recursive: true });

    // Rename and replace all "template" placeholders by asserter name
    const files = readdirSync(outputDir, { recursive: true, withFileTypes: true }).filter(
        file => !file.isDirectory()
    );
    for (const file of files) replaceTemplate(`${file.parentPath}/${file.name}`, name);
};

const replaceTemplate = (filePath: string, name: string) => {
    // Rename file
    const newFilePath = filePath.replace(/template/g, name);
    renameSync(filePath, newFilePath);

    // Replace placeholders
    const fileBuffer = readFileSync(newFilePath, charEncoding);
    const result = fileBuffer
        .replace(/template/g, name)
        .replace(/Template/g, capitalizeFirstLetter(name));
    writeFileSync(newFilePath, result);
};

const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);
