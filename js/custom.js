$(document).ready(function () {
    $("input[type='text']").val("welcome");
    $("#test").html("Heloow How are you ! ")
    $("input[type='checkbox']  ").prop("checked", false)
    $('#username').attr("type", "password")
    //     $('a').css("color", "red")
    //     $('a').css("background-color", "green")
    // })  

    //we can set the background color and color 
    $('a').css({ "color": "white", "background-color": "green" })
})