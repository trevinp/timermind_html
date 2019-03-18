
let TIMERMIND_URL = "https://timermind.azurewebsites.net/api/Event/";
let GET_EVENTS = "GetEventsByOwner/";
let API_STATUS = "GetAPIStatus/";

// Call the API, get events for owner, and refresh the data table
async function getEvents() {
    (async () => {
        try {
            _ownerID = getCookie('timermindUser');
            let response = await fetch(TIMERMIND_URL + GET_EVENTS + _ownerID);
            let data = await response.json();
            // console.log(data);
            eventTableData = data;
            eventTable = new Tabulator("#timermind-table", {
                height: 205,
                data: eventTableData,
                layout: "fitColumns",
                resizableColumns: true,
                selectable: 1,
                columns: [
                    { title: "ID", field: "Id", width: 50, editor: "input" },
                    { title: "Event Name", field: "Name", width: 150, editor: "input" },
                    { title: "Type", field: "EventType", align: "left", editor: "select", editorParams: { values: ["Birthday", "Anniversary", "Misc"] } },
                    { title: "Date", field: "Date", editor: "input" },
                    { title: "Occurence", field: "OccurenceType", editor: "select", editorParams: { values: ["Yearly", "Monthly", "Weekly", "None"] } },
                ],
            });
        }
        catch (e) {
            console.log("Error in getEvents " + e);
        }
    })();
};

async function saveEvent(newEvent) {
    _ownerID = getCookie('timermindUser');
    var data = {
        "OwnerId" : _ownerID,
        "GoogleID" : _ownerID,
        "Name" : newEvent.Name,
        "EventType" : newEvent.EventType,
        "Notes" : newEvent.Notes,
        "Date" : newEvent.Date,
        "OccurenceType" : newEvent.OccurenceType
    }

    console.log("Data: " + data.values);
    console.log("json data: " + JSON.stringify(data));

    var fetchData = {
        method: 'POST',
        body: JSON.stringify(data) ,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
    }

    fetch(TIMERMIND_URL, fetchData)
        .then(function (response) {
            console.log('added new event');
            console.log('Response: ' + response.data);
        })
        .catch(err => console.log('Error in saveevent'));
};

async function getAPIStatus() {
    (async () => {
        try {
            var response = await fetch(TIMERMIND_URL + API_STATUS);
            var data = await response.json();
            if (data != "OK") alert('API is not working');
            console.log(data);
        } catch (e) {
            console.log("Error in getAPIStatus " + e);
        }
    })();
};

