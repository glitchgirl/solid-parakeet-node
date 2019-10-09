const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log('started');
})

/*eventEmitter.on('start', (number) => {
    console.log(`started ${number}`)
})

eventEmitter.on('start', (start, end) => {
    console.log(`started from ${start} to ${end}`)
})
*/
eventEmitter.emit('start');
//eventEmitter.emit('start', 23);
//eventEmitter.emit('start', 1, 100)