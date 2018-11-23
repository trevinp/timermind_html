tmEvents = [];

class tmEvent {
    constructor(ID, ownerID, eventName, eventType, eventNotes, eventDateTime, eventOccurenceType) {
        this.ID = ID;
        this.ownerID = ownerID;
        this.eventName = eventName;
        this.eventType = eventType;
        this.eventNotes = eventNotes;
        this.eventDateTime = eventDateTime;
        this.eventOccurenceType = eventOccurenceType;
    }

    addEvent(newEvent) {
        tmEvents.push(newEvent);
        console.log(tmEvents);
    }

    deleteEvent() {
        let index = tmEvents.findIndex(i => i.ID == this.ID);
        tmEvents.splice(index, 1);
        console.log(tmEvents);
    }

    getEventsByOwnerId() {

    }
}

let myEvent = new tmEvent(1, 1, 'test', 2, 'notes','01/01/2000', 3);
myEvent.addEvent(this);
console.log(tmEvents);

myEvent.deleteEvent();

//console.log(tmEvents);
let myEven2t = new tmEvent(2, 2, 'test2', 3, 'notes2','02/01/2000', 3);
