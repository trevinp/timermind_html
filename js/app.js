//define some sample data
var eventTableData = [
    {id:1, ownerid:"123abc", eventname:"Dad Birthday", eventtype:"Birthday", eventdatetime:"01/04/1930", eventoccurencetype:"Yearly"},
    {id:2, ownerid:"456def", eventname:"Our Anniversary", eventtype:"Anniversary", eventdatetime:"08/16/2013", eventoccurencetype:"Yearly"},
    {id:4, ownerid:"123jkl", eventname:"Vacation Rental", eventtype:"Misc", eventdatetime:"04/04/2000", eventoccurencetype:"Yearly"},
    {id:5, ownerid:"456mno", eventname:"Janis Birthday", eventtype:"Birthday", eventdatetime:"12/08/1970", eventoccurencetype:"Yearly"}
];

// https://www.jqueryscript.net/table/Easy-Data-Table-Generator-with-jQuery-JSON-Tabulator.html
// http://tabulator.info/docs/4.0

var table = new Tabulator("#timermind-table", {
    height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    data:eventTableData, //assign data to table
    layout:"fitColumns", //fit columns to width of table (optional)
    resizableColumns: true,
    columns:[
        {title:"Event Name", field:"eventname", width:150, editor:"input"},
        {title:"Type", field:"eventtype", align:"left", editor:"select", editorParams:{values:["Birthday", "Anniversary", "Misc"]}},
        {title:"Date", field:"eventdatetime", editor:"input"},
        {title:"Occurence", field:"eventoccurencetype", editor:"select", editorParams:{values:["Yearly", "Monthly", "Weekly", "None"]}},
    ],
    rowClick:function(e, row){ //trigger an alert message when the row is clicked
        alert("ID " + row.getData().id + " Clicked!");
    },
});
