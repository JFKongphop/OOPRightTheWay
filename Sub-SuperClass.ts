import { Logger, TimedLogger } from './Extends';

// TimedLogger extends Logger
// Logger is Superclass of TimedLogger
// TimedLogger is SubClass of Logger

// Subclass can use instaed of Superclass
// Superclass cannnot use instaed of Subclass

// in the Subclass it have same or more than element by optimize but cannot less than Superclass 
// in subclass cannot delete the element in Superclass

function iUseTimedLogger(log: TimedLogger) {
    log.appendLog('This');
    log.flush();
    log.logColor('This is a color log');
}

function iUseJustALogger(log: Logger) {
    log.appendLog(`This is log should be raw, should't it?`);
    log.flush();
}

const log = new Logger();
const timeLogger = new TimedLogger();


// this state call polynorpishm

// we can use the TimedLoagger instaed of logger because the propery in Logger is intregate to TimedLogger
iUseTimedLogger(timeLogger);
// but Logger cannot use instead of TimedLogger because the property in Logger is less than TimedLogger, in TimedLogger is inherit from Logger
// iUseTimedLogger(log); it is error // cannot set argument because it not the type of this variable
iUseJustALogger(timeLogger)
