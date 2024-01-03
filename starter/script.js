var today = moment();
var timeBlockEl = document.querySelector('.container');


$("#currentDay").text(today.format("LLLL")); 

$('.saveBtn').on('click', function () {
  var timeKey = $(this).parent().attr('id');

  localStorage.setItem(timeKey, textValue);
});