// 1
// get value from form input when form is submitted


var gifSearchForm = $("#gif-search-form")


gifSearchForm.on("click", function(event){
  event.preventDefault();
  //console.log("clicked form button");

  var term = $( "#gif-term" ).val();

  var navListItem = $("<li>");
  var gifButton = $("<button class='btn btn-primary btn-sm gif-button'>");
  var id = term + "-button"
  gifButton.attr( "id", id); 
  gifButton.attr( "data-term", term );
  gifButton.text(term);
  
  navListItem.append(gifButton);

  $("#buttons-list").append(navListItem);

});

$("#buttons-list").on("click", ".gif-button", function(){
  //console.log("running AJAX");
  //console.log(this);
  var buttonClicked = $(this);
  
  var buttonTerm = $(this).attr("data-term");
  //console.log(buttonTerm);

  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + buttonTerm + "&api_key=dc6zaTOxFJmzC&limit=9&rating=g";
  
  console.log(queryURL);
    $.ajax({
    url: queryURL,
    method: 'GET'
  }).done(function(response) {
    console.log(response);
  console.log(response.data[0].images.fixed_width_still.url)
    


  var picImage = $("<img>");
  for(i=0; i=9; i++){
    
  };

  

  });

     $(".gif").on("click", function() {
      // STEP ONE: study the html above.
      // Look at all the data attributes.
      // Run the file in the browser. Look at the images.
      var state = $(this).data("state");
      console.log("current state = " + state);

      
     switch (state) {
        case "animate":
          $(this).data("state", "still");
          $(this).attr("src", $(this).data("still"));
          break;
        case "still":
          $(this).data("state", "animate");
          $(this).attr("src", $(this).data("animate"));
          break;
        default:
          console.log("I'm not doin a thing!");
      }
    });
});





