/* Nina's awesome Javascript file */

$( document ).ready(function() {

  //Creating an array called city for all the selectable cities.
  var city = ["NYC", "SF", "LA", "ATX","SYD"];
  //Creating an array called bodyClass for all the css city classes.
  var bodyClass = ["nyc", "sf", "la", "austin","sydney"];
  //Creating the variable option, used below.
  var option = '';

  // The variable 'i' is 0, 'i' is smaller than the length of each city name, add 1 to 'i'
  // The variable 'option' is the html tag <option> with the value of a city name.
  for (var i=0;i<city.length;i++){
     option += '<option value="'+ city[i] + '">' + city[i] + '</option>';
  }

  // Insert the content from the variable 'option' at the end of the #city-type html select tag
  $('#city-type').append(option);

  function changeBackground(bodyBackground){

    //Get the selected city from the html select tag
    var city = $('#city-type').val();

    //Remove the current class from body
    //Add the relevant class based on the value of selected city in the dropdown menu
    function bodyCss() {
      $('body').removeClass();
      $('body').addClass(bodyBackground);
    }

    //When the user selects a city, change the value of the variable bodyBackground to the relevant class from the array bodyClass
    //Then run function bodyCss
    switch (city) {
      case 'ATX':
        var bodyBackground = bodyClass[3];
        bodyCss();
      break;
      case 'LA':
        var bodyBackground = bodyClass[2];
        bodyCss();
      break;
      case 'NYC':
        var bodyBackground = bodyClass[0];
        bodyCss();
      break;
      case 'SF':
        var bodyBackground = bodyClass[1];
        bodyCss();
      break;
      case 'SYD':
        var bodyBackground = bodyClass[4];
        bodyCss();
      break;
    }
  }

  //When the city is selected, run the function changeBackground
  $('select').on("change", function() {
    changeBackground();
  });
});
