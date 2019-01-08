tmEvents = [];

class tmEvent {
    constructor(OwnerID, eventName, EventType, Notes, Date, OccurenceType) {
        //this.Id = Id;
        this.OwnerId = OwnerID;
        this.Name = eventName;
        this.EventType = EventType;
        this.Notes = Notes;
        this.Date = Date;
        this.OccurenceType = OccurenceType;
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
//console.log('Events: ', tmEvents);

//myEvent.delete();

//console.log(tmEvents);
let myEvent2 = new tmEvent(2, 2, 'test2', 3, 'notes2','02/01/2000', 3);
myEvent2.add();
//console.log('Events: ', tmEvents);
