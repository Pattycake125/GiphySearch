// 1
// get value from form input when form is submitted


var gifSearchForm = $("#gif-search-form")

gifSearchForm.on("click", function(event) {
    event.preventDefault();
    //console.log("clicked form button");

    var term = $("#gif-term").val();

    var navListItem = $("<li>");
    var gifButton = $("<button class='btn btn-primary btn-sm gif-button'>");
    var id = term + "-button"
    gifButton.attr("id", id);
    gifButton.attr("data-term", term);
    gifButton.text(term);

    navListItem.append(gifButton);

    $("#buttons-list").append(navListItem);
    $("#gif-search-form").attr("placeholder","" );
});

$("#buttons-list").on("click", ".gif-button", function() {
    //console.log("running AJAX");
    //console.log(this);
    var buttonClicked = $(this);

    var buttonTerm = $(this).attr("data-term");
    //console.log(buttonTerm);

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + buttonTerm + "&api_key=dc6zaTOxFJmzC&limit=10&rating=g";

    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function(response) {
        console.log(response);
        
        
        for (i = 0; i < 10; i++) {
            b= i-1;
            var imgX = ".img" + b;
            //console.log(response.data[i].images.fixed_width_still.url);
            //console.log(response.data[i].url);
            $(imgX).attr("src", response.data[i].images.fixed_width_still.url);
            $(imgX).attr("alt", "Populated with " + buttonTerm + " gifs");
   
            $(imgX).attr("data-animate", response.data[i].images.fixed_width.url );
            $(imgX).attr("data-still", response.data[i].images.fixed_width_still.url );
            $(".image").attr("data-state", "still");
            console.log(imgX);

        };

        


    });


    $(".gif").on("click", function() {
       
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