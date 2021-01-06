import holidaySongs from './holidaySongs.js'; // OPTIONAL SPECIAL HOLIDAY SEASON MODULE - FOR TESTING OF THE DATE PICKER
import defaultCalendarStyling from './calendarModule/defaultCalendarStyling.js'; // OPTIONAL MODULE THAT ADDS DEFAULT STYLING FOR THE DATE PICKER. REMOVE WHERE CUSTOMIZED STYLING IS PREFERRED.
import calendar from './calendarModule/calendar.js';

const app = {
    getHolidaySong: holidaySongs.init, // OPTIONAL SPECIAL HOLIDAY SEASON MODULE - FOR TESTING OF THE DATE PICKER
    calendarStyling: defaultCalendarStyling.init, // OPTIONAL - CAN BE REPLACED BY CUSTOMIZED STYLING
    buildCalendar: calendar.init,
    init: function() {
        this.getHolidaySong(); // OPTIONAL SPECIAL HOLIDAY SEASON MODULE - FOR TESTING OF THE DATE PICKER
        this.calendarStyling(); // OPTIONAL - CAN BE REPLACED BY CUSTOMIZED STYLING
        this.buildCalendar();
    }
};

if (document.readyState === 'complete') {
    app.init();
} else {
    window.addEventListener('DOMContentLoaded', app.init());
    window.removeEventListener('DOMContentLoaded', app.init());
};

//MIT License
//Copyright(c) 2020 Martin Nguyen