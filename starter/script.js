// GLOBAL VARIABLES
// Reference moment.js
var today = moment();
// reference the whole task (time and textarea)
var timeBlockEl = document.querySelector('.container');

// Get the current hour of the day using the dayjs library.
const currentHour = dayjs().format('H');

// REFERENCES
// Display the current date and time on the paragraph with an id of "currentDay"
$("#currentDay").text(today.format("LLLL")); // LLLL shows day of the week, date and time

// EVENT LISTENER
// Event listener for saveBtn click
$('.saveBtn').on('click', function () {
  // get nearby values of the description in jQuery
  var textValue = $(this).siblings('.description').val();
  // get the id attribute of the parent div element
  var timeKey = $(this).parent().attr('id');

  // save in local storage
  localStorage.setItem(timeKey, textValue);
});

// Get item from local storage if any
// $('#hour9 .description').val(localStorage.getItem('hour9'));
// $('#hour10 .description').val(localStorage.getItem('hour10'));
// $('#hour11 .description').val(localStorage.getItem('hour11'));
// $('#hour12 .description').val(localStorage.getItem('hour12'));
// $('#hour13 .description').val(localStorage.getItem('hour13'));
// $('#hour14 .description').val(localStorage.getItem('hour14'));
// $('#hour15 .description').val(localStorage.getItem('hour15'));
// $('#hour16 .description').val(localStorage.getItem('hour16'));
// $('#hour17 .description').val(localStorage.getItem('hour17'));
// $('#hour18 .description').val(localStorage.getItem('hour18'));

// Function to track tasks and make them change colors if they are in the past, present or future
function hourColourChange() {
    // loop over each time block
        $('.time-block').each(function() {
          const hourBlock = parseInt(this.id);
          $(this).toggleClass('past', hourBlock < currentHour);
          $(this).toggleClass('present', hourBlock === currentHour);
          $(this).toggleClass('future', hourBlock > currentHour);
        });
      }

      
  // Call the audit task function
  checkTask();
  
  // Use setTimeout to update the time every minute (1000ms * 60s)
  setTimeout(function () {
    // clear the current URL
    location = ''; // location references the current URL
  }, 1000 * 60);