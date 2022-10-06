export interface ILogger {
  fatal(message: string): void
  error(message: string): void
  warn(message: string): void
  info(message: string): void
  debug(message: string): void
  trace(message: string): void
}

export class Logger implements ILogger {
  private _output: (severity: string, message: string) => unknown;

  constructor(output: (message: string) => unknown) {
    this._output = (severity: string, message: string) => output(`${Logger.dateToTimestamp(new Date())} - ${severity} - ${message}\n`);
  }

  public fatal(message: string) {
    this._output('🔴 FATAL', message);
  }
  
  public error(message: string) {
    this._output('🟠 ERROR', message);
  }
  
  public warn(message: string) {
    this._output('🟡 WARN', message);
  }
  
  public info(message: string) {
    this._output('🟢 INFO', message);
  }
  
  public debug(message: string) {
    this._output('🔵 DEBUG', message);
  }
  
  public trace(message: string) {
    this._output('⚪ TRACE', message);
  }

  public static dateToTimestamp(date: Date) {
    const pad = (value: number, length: number) => value.toString().padStart(length, '0');
    return `[${pad(date.getHours(), 2)}:${pad(date.getMinutes(), 2)}:${pad(date.getSeconds(), 2)}.${pad(date.getMilliseconds(), 3)}]`;
  }
}