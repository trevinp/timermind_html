
var _ownerID = 0;
let eventTable;
let data;
let eventTableData = [];
let GoogleUser;

/* if (typeof GoogleUser == 'undefined') {
    window.location.href = "login.html";
}
 */
var _ownerID = getCookie('timermindUser');
var _email = getCookie('email');

//document.getElementById("ownerid").value = _ownerID;
getEvents(); // call API to retrieve owner events

// https://www.jqueryscript.net/table/Easy-Data-Table-Generator-with-jQuery-JSON-Tabulator.html
// http://tabulator.info/docs/4.0

function SaveNew() {
    var eventName = document.getElementById('description').value;
    var eventDate = document.getElementById('date').value;
    var eventType = document.getElementById('eventType').value;
    var eventOccurence = document.getElementById('occurenceType').value;
    var Notes = document.getElementById('notes').value;

    document.getElementById("description").value = "";
    document.getElementById("date").value = "";
    document.getElementById("notes").value = "";
    var myEvent = new tmEvent(_ownerID, _ownerID, eventName, eventType, Notes, eventDate, eventOccurence);
    saveEvent(myEvent);

    eventTable.updateOrAddData([{
        Id: 1, OwnerId: _ownerID, Name: eventName, EventType: eventType,
        Date: eventDate, OccurenceType: eventOccurence
    }]);
    getEvents();
}

function reset() {
    document.getElementById("ownerid").value = "";
    getEvents(eventTableData); // call API to retrieve owner events
}

function login() {
    if (document.getElementById('inputEmail'.value == 'test')) {
        window.location.replace("index.html");
    }

}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/" + "SameSite=Lax";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}