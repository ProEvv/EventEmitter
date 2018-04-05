class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(type, callback) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(callback);
    }
    emit(type, arg) {
        if(this.events[type]) {
            this.events[type].forEach(callback => callback(arg));
        }
    }
}

function startAlert(name) {
    alert(`Hello my name is ${name}!`);
}
function startConsole(name) {
    console.log(`Hello my name is ${name}!`);
}

const myEvent = new EventEmitter;
myEvent.on('something', startAlert);
myEvent.on('something', startConsole);


setTimeout(function() {
    myEvent.emit('something', 'John');
}, 2000)
setTimeout(function() {
    myEvent.emit('something', 'Bill');
}, 1000)