#!/usr/bin/env bun

import arg from 'arg';
import chalk from 'chalk';

console.log(chalk.yellow(`
 ██████╗██╗     ██╗   ████████╗ ██████╗  ██████╗ ██╗      ██████╗ ██╗   ██╗███╗   ██╗
██╔════╝██║     ██║   ╚══██╔══╝██╔═══██╗██╔═══██╗██║      ██╔══██╗██║   ██║████╗  ██║
██║     ██║     ██║█████╗██║   ██║   ██║██║   ██║██║█████╗██████╔╝██║   ██║██╔██╗ ██║
██║     ██║     ██║╚════╝██║   ██║   ██║██║   ██║██║╚════╝██╔══██╗██║   ██║██║╚██╗██║
╚██████╗███████╗██║      ██║   ╚██████╔╝╚██████╔╝███████╗ ██████╔╝╚██████╔╝██║ ╚████║
 ╚═════╝╚══════╝╚═╝      ╚═╝    ╚═════╝  ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝

 Try to write --help                                                                                   
`))
const argSpec = {
  '--start': Boolean,
  '--build': Boolean,
  '--output': String,
  '--help': Boolean,
  '-h': '--help',
};
try {
  const args = arg(argSpec);

  if (args['--help']) {
    console.log(`
CLI Tool - A simple Bun.js CLI application

Usage: cli-tool [options]

Options:
  --start              Start the application
  --build              Build the project
  --output <path>      Specify output directory
  --help, -h           Show this help message
    `);
    process.exit(0);
  }

  if (args['--start']) {
    console.log(' Starting the application...');
  }

  if (args['--build']) {
    console.log(chalk.blue('Building the project...'));
  }

  if (args['--output']) {
    console.log(`Output directory: ${args['--output']}`);
  }
} catch (error) {
  if (error instanceof Error) {
    console.log(chalk.red('Error parsing arguments:', error.message));
  }
  process.exit(1);
}