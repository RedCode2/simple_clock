const {
    pg_timezone,
    home_icon,
    timezone_done_btn,
    main_container,
    change_timezone_container
} = require('./index-elements.js')

home_icon.addEventListener('click', () => {
    change_timezone_container.style.display = 'none';
    main_container.style.display = 'flex';
})

pg_timezone.addEventListener('click', () => {
    change_timezone_container.style.display = 'flex';
    main_container.style.display = 'none';
})

timezone_done_btn.addEventListener('click', () => {
    change_timezone_container.style.display = 'none';
    main_container.style.display = 'flex';
})

// let __current_timezone;

// timezone_select.addEventListener('change', () => {
//     __current_timezone = timezone_select.value;
//     console.log(`Timezone changed to ${__current_timezone}`);
// })

// module.exports = {
//     __current_timezone
// }