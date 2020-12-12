$(document).ready(function () {

    //sets time and date with moment.js

    var currentTime = moment();
    var displayDay = document.querySelector("#currentDay");
    displayDay.innerText = currentTime.format("dddd, Do, MMM");
    

    init();

    //onclick to save input to local storage

    $("button").on("click", function (e) {
        e.preventDefault();
        var inputSave = ($(this).closest("div").children("textarea").val());
        calendarInput.appointment = inputSave;

        var appointmentTime = $(this).closest("div").data("time");
        calendarInput.time = appointmentTime;

        localStorage.setItem(appointmentTime, inputSave);
    });

    // loads the page with appointments stored

    function reload() {
        for (i = 9; i < 18; i++) {
            var appointmentSet = localStorage.getItem(i);
            $(`div[data-time= '${i}']`).children()[1].innerText= appointmentSet;
        }
    };

    function init() {
        reload();
    };

    // changes color of appointment past/present/future


    

});