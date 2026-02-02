#!/usr/bin/env bun

import arg from 'arg';
import chalk from 'chalk';

const bannerLines = [
  '██████╗ ██████╗  █████╗  ██████╗██╗   ██╗██╗      █████╗ ',
  '██╔══██╗██╔══██╗██╔══██╗██╔════╝██║   ██║██║     ██╔══██╗',
  '██║  ██║██████╔╝███████║██║     ██║   ██║██║     ███████║',
  '██║  ██║██╔══██╗██╔══██║██║     ██║   ██║██║     ██╔══██║',
  '██████╔╝██║  ██║██║  ██║╚██████╗╚██████╔╝███████╗██║  ██║',
  '╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝',
  '                                                         ',
  ' Try to write --help                                     ',
];

const gradientBanner = bannerLines.map((line, i) => {
  const ratio = i / (bannerLines.length - 1);
  const r = Math.round(0 + ratio * 255);
  const g = Math.round(255 - ratio * 255);
  const b = 255;
  return chalk.rgb(r, g, b)(line);
}).join('\n');

console.log('\n' + gradientBanner)
const argSpec = {
  '--say': String,
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
Dracula - A simple Bun.js CLI application

Usage: dracula [options]

Options:
  --say <text>         Say something
  --start              Start dracula
  --build              Build dracula
  --output <path>      Specify output directory
  --help, -h           Show this help message
    `);
    process.exit(0);
  }

  if (args['--say']) {
    console.log(chalk.green(`Dracula says: ${args['--say']}`));
  }

  if (args['--start']) {
    console.log(' Starting dracula...');
  }

  if (args['--build']) {
    console.log(chalk.blue('Building dracula...'));
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