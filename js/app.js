//define some sample data
var eventTableData = [
    { Id: 1, OwnerId: "123abc", Name: "Dad Birthday", EventType: "Birthday", Date: "01/04/1930", OccurenceType: "Yearly" },
    { id: 2, OwnerId: "456def", Name: "Our Anniversary", EventType: "Anniversary", Date: "08/16/2013", OccurenceType: "Yearly" },
    { id: 4, OwnerId: "123jkl", Name: "Vacation Rental", EventType: "Misc", Date: "04/04/2000", OccurenceType: "Yearly" },
    { id: 5, OwnerId: "456mno", Name: "Janis Birthday", EventType: "Birthday", Date: "12/08/1970", OccurenceType: "Yearly" }
];

var eventTableData2 = [];
getEvents(eventTableData2);
var table2;
var data;

// https://www.jqueryscript.net/table/Easy-Data-Table-Generator-with-jQuery-JSON-Tabulator.html
// http://tabulator.info/docs/4.0

/* var table = new Tabulator("#timermind-table", {
    height: 205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    data: eventTableData, //assign data to table
    layout: "fitColumns", //fit columns to width of table (optional)
    resizableColumns: true,
    columns: [
        { title: "Event Name", field: "eventname", width: 150, editor: "input" },
        { title: "Type", field: "eventtype", align: "left", editor: "select", editorParams: { values: ["Birthday", "Anniversary", "Misc"] } },
        { title: "Date", field: "eventdatetime", editor: "input" },
        { title: "Occurence", field: "eventoccurencetype", editor: "select", editorParams: { values: ["Yearly", "Monthly", "Weekly", "None"] } },
    ],
    rowClick: function (e, row) { //trigger an alert message when the row is clicked
        alert("ID " + row.getData().id + " Clicked!");
    },
}); */

function SaveNew() {
    var eventName = document.getElementById("description").value;
    var eventDate = document.getElementById("date").value;
    var eventType = document.getElementById("type").value;
    var eventOccurence = document.getElementById("occurence").value;
    document.getElementById("info").innerHTML = eventName + " " + eventDate + " " + eventType + " " + eventOccurence;
    document.getElementById("description").value = "";
    document.getElementById("date").value = "";
    let myEvent = new tmEvent(1, 1, eventName, eventType, 'notes', eventDate, eventOccurence);
   // eventTableData2.push(myEvent);
    table2.updateOrAddData([{
        Id: 1, OwnerId: "12345", Name: eventName, EventType: eventType,
        Date: eventDate, OccurenceType: eventOccurence
    }]);
}

async function saveEvent(newEvent) {
    let fetchData = {
        method: 'POST',
        body: newEvent,
        headers: new Headers()
    }

    var response = await fetch(url, fetchData)
        .then(function () {
            console.log('added new event')
        })
        .catch (err => console.log('Error in saveevent'));

}
async function getAPIStatus() {
    (async () => {
        try {
            // var response = await fetch('https://timermind.azurewebsites.net/api/Event/GetEventsByOwner/2');
            var response = await fetch('https://timermind.azurewebsites.net/api/Event/GetAPIStatus');
            var data = await response.json();
            if (data != "OK") alert('API is not working');
            console.log(data);
        } catch (e) {
            console.log("Error in getAPIStatus " + e);
        }
    })();
};

async function getEvents(eventTableData2) {
    (async () => {
        try {
            let response = await fetch('https://timermind.azurewebsites.net/api/Event/GetEventsByOwner/2');
            let data = await response.json();
            console.log(data);
            eventTableData2 = data;
                table2 = new Tabulator("#timermind-table", {
                height: 205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
                data: eventTableData2, //assign data to table
                layout: "fitColumns", //fit columns to width of table (optional)
                resizableColumns: true,
                columns: [
                    { title: "ID", field: "Id", width: 50, editor: "input" },
                    { title: "Event Name", field: "Name", width: 150, editor: "input" },
                    { title: "Type", field: "EventType", align: "left", editor: "select", editorParams: { values: ["Birthday", "Anniversary", "Misc"] } },
                    { title: "Date", field: "Date", editor: "input" },
                    { title: "Occurence", field: "OccurenceType", editor: "select", editorParams: { values: ["Yearly", "Monthly", "Weekly", "None"] } },
                ],
                rowClick: function (e, row) { //trigger an alert message when the row is clicked
                    alert("ID " + row.getData().Id + " Clicked!");
                },
            });
        } catch (e) {
            console.log("Error in getEvents " + e);
        }
    })();
};


