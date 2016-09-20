const chalk = require('chalk');

export function consoleOk(msg1: any, msg2?: any, msg3?: any) {
    console.log(chalk.bgGreen(msg1), chalk.bgGreen(msg2 || ""), chalk.bgGreen(msg3 || ""));
}

export function consoleError(msg1: any, msg2?: any, msg3?: any) {
    console.log(chalk.bgRed(msg1), chalk.bgRed(msg2 || ""), chalk.bgRed(msg3 || ""));
}
