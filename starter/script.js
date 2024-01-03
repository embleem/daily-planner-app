// GLOBAL VARIABLES
// Reference moment.js
var today = moment();
// reference the whole task (time and textarea)
var timeBlockEl = document.querySelector('.container');

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