//define some sample data
var eventTableData = [
    { Id: 1, OwnerId: "123abc", Name: "Dad Birthday", EventType: "Birthday", Date: "01/04/1930", OccurenceType: "Yearly" },
    { id: 2, OwnerId: "456def", Name: "Our Anniversary", EventType: "Anniversary", Date: "08/16/2013", OccurenceType: "Yearly" },
    { id: 4, OwnerId: "123jkl", Name: "Vacation Rental", EventType: "Misc", Date: "04/04/2000", OccurenceType: "Yearly" },
    { id: 5, OwnerId: "456mno", Name: "Janis Birthday", EventType: "Birthday", Date: "12/08/1970", OccurenceType: "Yearly" }
];


let ownerID = 2;
let eventTable;
let data;
let eventTableData2 = [];
let GoogleUser;

/* if (typeof GoogleUser == 'undefined') {
    window.location.href = "login.html";
}
 */
getEvents(eventTableData2); // call API to retrieve owner events

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
    let myEvent = new tmEvent(1, 1, eventName, eventType, 'notes', eventDate, eventOccurence);
    eventTable.updateOrAddData([{
        Id: 1, OwnerId: "12345", Name: eventName, EventType: eventType,
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

