const EventEmitter = require('events');

// Streams are Event Emitters
// process.stdin, process.stdout

const myEmitter = new EventEmitter();

myEmitter.emit('TEST_EVENT');

myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fired we can do X');
});

myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fired we can do Y');
});

myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fired we can do Z');
});

// Interview question N1, how many times will the console log appear?
//None of this will be called because the emit was before the subscribe (on)m take that into account.

myEmitter.emit('TEST_EVENT');

// Interview question N2, how can I delay the emit after the on withouth movign it?
//With a setImmediate, if I wrap the emit in it, it willb e call after.