$(document).ready(function () {

    //sets time and date with moment.js

    var currentTime = moment();
    var displayDay = document.querySelector("#currentDay");
    displayDay.innerText = currentTime.format("dddd, Do, MMM");
    var currentHour = currentTime.format("H");
    var fixcurrentime = true
    if (fixcurrentime)
        currentHour = 13;


    init();

    //onclick to save input to local storage

    $("button").on("click", function (e) {
        e.preventDefault();
        var inputSave = ($(this).closest("div").children("textarea").val());
        var appointmentTime = $(this).closest("div").data("time");


        localStorage.setItem(appointmentTime, inputSave);
    });

    // loads the page with appointments stored

    function reload() {
        for (i = 9; i < 18; i++) {
            var appointmentSet = localStorage.getItem(i);
            $(`div[data-time= '${i}']`).children()[1].innerText = appointmentSet;
        }
    };

    function init() {
        reload();
        colorChange();
    };

    // changes appointment color depending on time of day past/present/future

    var update = setInterval(colorChange, 60000);

    function colorChange() {
        for (i = 9; i < 18; i++) {
            if (i === currentHour) {
                $(`div[data-time= '${i}']`).children("textarea").addClass("present")
            } else if (i < currentHour) {
                $(`div[data-time= '${i}']`).children("textarea").addClass("past")
            } else if (i > currentHour) {
                $(`div[data-time= '${i}']`).children("textarea").addClass("future")
            }
        };
    };
});