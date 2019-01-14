
var _ownerID = 2;
let eventTable;
let data;
let eventTableData = [];
let GoogleUser;

/* if (typeof GoogleUser == 'undefined') {
    window.location.href = "login.html";
}
 */
getEvents(eventTableData); // call API to retrieve owner events

// https://www.jqueryscript.net/table/Easy-Data-Table-Generator-with-jQuery-JSON-Tabulator.html
// http://tabulator.info/docs/4.0

function SaveNew() {
    var eventName = document.getElementById('description').value;
    var eventDate = document.getElementById('date').value;
    var eventType = document.getElementById('eventType').value;
    var eventOccurence = document.getElementById('occurenceType').value;

    document.getElementById("info").innerHTML = eventName + " " + eventDate + " " + eventType + " " + eventOccurence;
    document.getElementById("description").value = "";
    document.getElementById("date").value = "";
    var myEvent = new tmEvent(_ownerID, eventName, eventType, 'notes', eventDate, eventOccurence);
    saveEvent(myEvent);

    eventTable.updateOrAddData([{
        Id: 1, OwnerId: _ownerID, Name: eventName, EventType: eventType,
        Date: eventDate, OccurenceType: eventOccurence
    }]);
}

function login()
{
    if (document.getElementById('inputEmail'.value == 'test'))
    {
        window.location.replace("index.html");
    }
    
}

