const calendarInformation = function() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // names of the months
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; // names of the weekdays
    const today = new Date(); // the current date when the calendar is loaded
    let minimized = 'minimized'; // variable to toggle calendar between normal and minimized; default is normal; if minimized, the value is set to 'minimized', else it is an empty string
    let chosenDate = ''; // the first time the calendar is loaded the default chosen date is the current date
    let calendarMonth = today.getMonth(); // the index of the month to display on calendar navigation bar; January = 0, February = 1, etc...
    let calendarYear = today.getFullYear(); // the year to display on calendar navigation bar

    function getInformation(min, date, year, month) {
        minimized = min;
        chosenDate = date;
        calendarYear = year;
        calendarMonth = month;
    };

    function setInformation() {
        return [minimized, chosenDate, calendarYear, calendarMonth];
    };

    function exportConstants() {
        return [months, weekdays, today];
    };

    return {
        getInformation: getInformation,
        setInformation: setInformation,
        exportConstants: exportConstants
    };
}();

export default calendarInformation;

//MIT License
//Copyright(c) 2020 Martin Nguyen