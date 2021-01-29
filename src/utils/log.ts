import chalk from 'chalk';

class Log {
    public info(msg: string):void {
        console.log(chalk.green(msg));
    }

    public warning(msg: string):void {
        console.log(chalk.yellow(msg));
    }

    public error(msg: string):void {
        console.log(chalk.red(msg));
    }
    
    public log(msg: string):void {
        console.log(chalk.gray(msg));
    }
}

export default new Log;