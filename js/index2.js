$(document).ready(function() {
    var data = " ";
    data += "Width: " + $(window).width() + "</br> ";
    data += "Height: " + $(window).height() + "</br> ";
    data += "Current location: " + location;

    $("#data").html(data);  //to show width, height and location
     //when using text instead of html,
    // it will show all what you wrote even html elements
 
    $("#load").click(function() {
        location.reload();
    }); //reload the page

    $("#changeColor").click(function() {
        $("#color").css("background-color", "yellow")
    }); //change background color

    $("#hideOrShow").click(function() {
        $("#Hide-show").toggle(); //hide and show
    });
    $("#appending").click(function() {
        $("#append").append("Hello ITE220 ");
    }); //append
    $("#mouse").on({
        mouseenter: function() {
            $("#mouse").text("Mouse Over");
        },
        mouseleave: function() {
            $("#mouse").text("Mouse Out");
        },
        mousedown: function() {
            $("#mouse").text("Mouse down");
        },
        mouseup: function() {
            $("#mouse").text("Mouse up");
        },
        dblclick: function() {
            $("#mouse").text("Double click");
        }
    }); //event 
});