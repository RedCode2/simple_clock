const { default: timezone } = require("date-and-time/plugin/timezone");

const pg_timezone = document.getElementById('timezone');
const pg_clock_time = document.getElementById('clock-time');
const pg_date = document.getElementById('date')
const home_icon = document.getElementById('home-icon');
const timezone_select = document.getElementById('timezone-select');
const main_container = document.getElementById('main-container');
const change_timezone_container = document.getElementById('change-timezone-container');
const timezone_done_btn = document.getElementById('timezone-done-btn');

// Export variables
module.exports = {
    pg_timezone,
    pg_clock_time,
    pg_date,
    home_icon,
    timezone_select,
    main_container,
    change_timezone_container,
    timezone_done_btn
}