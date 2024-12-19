const date_and_time = require('date-and-time')
const timezone = require('date-and-time/plugin/timezone')

date_and_time.plugin(timezone)

const {
    pg_timezone,
    pg_clock_time,
    pg_date,
    timezone_select
} = require('./index-elements.js')

// const {__current_timezone} = require('./page-functionality.js')

let current_timezone;

timezone_select.addEventListener('change', function() {
    current_timezone = timezone_select.value;
    pg_timezone.innerHTML = `<span style="color: #1c1c1c">Timezone:</span> <span style="color: #0066ff; font-weight: normal">${date_and_time.formatTZ(new Date(), 'zz', current_timezone)}</span> <div class="pg-timezone-arrow"><img src="src/assets/icons/edit-icon.svg" alt="edit" width="16" style="stroke: #9f9f9f; margin-left: 20%"></div>`
})

setInterval(function() {
    let now = new Date()
    pg_clock_time.innerHTML = `${date_and_time.formatTZ(now, 'hh:mm:ss A', current_timezone)}`
}, 500)

pg_timezone.innerHTML = `<span style="color: #1c1c1c">Timezone:</span> <span style="color: #0066ff; font-weight: normal">${date_and_time.formatTZ(new Date(), 'zz', current_timezone)}</span> <div class="pg-timezone-arrow"><img src="src/assets/icons/edit-icon.svg" alt="edit" width="16" style="stroke: #9f9f9f; margin-left: 20%"></div>`
pg_date.innerHTML = `${date_and_time.formatTZ(new Date(), 'dddd, D MMMM YYYY')}`