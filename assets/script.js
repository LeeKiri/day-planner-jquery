$(document).ready(function () {

    //sets time and date with moment.js

    var currentTime = moment();
    var displayDay = document.querySelector("#currentDay");
    displayDay.innerText = currentTime.format("dddd, Do, MMM");
    var calendarInput = {
        time: "",
        appointment: ""
    }

    //onclick to save input to local storage

    $("button").on("click", function (e) {
        e.preventDefault();
        var inputSave = ($(this).closest("div").children("textarea").val());
        calendarInput.appointment = inputSave;

        var appointmentTime = $(this).closest("div").data("time");
        calendarInput.time = appointmentTime;

        localStorage.setItem(appointmentTime, inputSave);
    });


});