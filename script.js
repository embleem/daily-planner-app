  // Global variables:
  const settingsLocale = {};
  dayjs.locale(settingsLocale);
  
  // Wait until the DOM is fully loaded before executing the code inside the function.
 
  $(function () {
    // Get the current hour of the day using the dayjs library.
    const currentHour = dayjs().format('H');

  // Function to change the colour of each time block based on whether it's in the "past, present, or future" relative to the current hour.
    function colourHourly() {
      $('.time-block').each(function() {
        const hourBlock = parseInt(this.id);
        $(this).toggleClass('past', hourBlock < currentHour);
        $(this).toggleClass('present', hourBlock === currentHour);
        $(this).toggleClass('future', hourBlock > currentHour);
      });
    }

  //  Function to save the user's input in a textarea to localStorage - only when the corresponding save button has been clicked.
    function textSaved() {
      $('.saveBtn').on('click', function() {
        const key = $(this).parent().attr('id');
        const value = $(this).siblings('.description').val();
        localStorage.setItem(key, value);
      });
    }

   // Function to change the colour of each time block to past(grey), present(red), or future(green) relative to the current time. 
    function changeColourTimed() {
      $('.time-block').each(function() {
        const hourBlock = parseInt(this.id);
        if (hourBlock == currentHour) {
          $(this).removeClass('past future').addClass('present');
        } else if (hourBlock < currentHour) {
          $(this).removeClass('future present').addClass('past');
        } else {
          $(this).removeClass('past present').addClass('future');
        }
      });
    }

    // Time refresh function:
    function refreshTime() {
      const dateElement = $('#date');
      const timeElement = $('#time');
      const currentDate = dayjs().format('dddd, MMMM D, YYYY');
      const currentTime = dayjs().format('hh:mm:ss A');
      dateElement.text(currentDate);
      timeElement.text(currentTime);
    }

   // Locale storage and text areas for each block:
    $('.time-block').each(function() {
      const key = $(this).attr('id');
      const value = localStorage.getItem(key);
      $(this).children('.description').val(value);
    });

    // Call functions:
    colourHourly();
    textSaved();                
    changeColourTimed();

    // This updates time:
    setInterval(refreshTime, 1000);
  });