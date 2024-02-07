const { EventEmitter, errorMonitor } = require('node:events');

// Define a custom event emitter class
class MyEmitter extends EventEmitter {}

// Create an instance of the custom event emitter
const myEmitter = new MyEmitter();

// Register an event listener for the 'event' event
myEmitter.on('event', () => {
  console.log('An event occurred!');
});

// Emit the 'event' event twice
myEmitter.emit('event');
myEmitter.emit('event');

// Register an event listener for the 'eventWithArgs' event with arguments
myEmitter.on('eventWithArgs', (a, b) => {
  console.log('Event occurred with arguments:', a, b);
});

// Emit the 'eventWithArgs' event with arguments 'a' and 'b'
myEmitter.emit('eventWithArgs', 'a', 'b');

// Register an event listener for the 'asyncEvent' event
myEmitter.on('asyncEvent', (a, b) => {
  console.log("Hello");
  setImmediate(() => {
    console.log('This happens asynchronously');
  });
  console.log("Hii");
});

// Emit the 'asyncEvent' event with arguments 'a' and 'b'
myEmitter.emit('asyncEvent', 'a', 'b');

// Register an event listener that runs only once for the 'eventOnce' event
let m = 0;
myEmitter.once('eventOnce', () => {
  console.log(++m);
});

// Emit the 'eventOnce' event twice
myEmitter.emit('eventOnce');
myEmitter.emit('eventOnce');

// Register an event listener for the 'error' event
myEmitter.on('error', (err) => {
  console.error('Whoops! There was an error:', err.message);
});

// Emit the 'error' event with a new Error object
myEmitter.emit('error', new Error('An error occurred.'));