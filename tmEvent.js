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

    add(newEvent) {
        tmEvents.push(newEvent);
    }

    add() {
        tmEvents.push(this);
    }

    delete() {
        let index = tmEvents.findIndex(i => i.ID == this.ID);
        tmEvents.splice(index, 1);
    }

    getEventsByOwnerId() {

    }
}

let myEvent = new tmEvent(1, 1, 'test', 2, 'notes','01/01/2000', 3);
myEvent.add();
console.log('Events: ', tmEvents);

//myEvent.delete();

//console.log(tmEvents);
let myEvent2 = new tmEvent(2, 2, 'test2', 3, 'notes2','02/01/2000', 3);
myEvent2.add();
console.log('Events: ', tmEvents);
