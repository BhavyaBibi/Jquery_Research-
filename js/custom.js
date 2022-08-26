// $(document).ready(function () {
// $("input[type='text']").val("welcome");
// $("#test").html("Heloow How are you ! ")
// $("input[type='checkbox']  ").prop("checked", false)
// $("input[tpe='checkbox']").prop("checked",true)
// $('#username').attr("type", "password")
//     $('a').css("color", "red")
//     $('a').css("background-color", "green")
// })  

//we can set the background color and color 
// $('a').css({ "color": "white", "background-color": "green", "font-weight": 600 })

//     $('#login').click(function () {
//         var uname = $("#username").val()
//         var pwd = $("#password").val()
//         if (uname == " ") {
//             alert("please enter the username")
//         }
//         else if (pwd == " ") {
//             alert("please enter the password")
//         }
//         else {
//             alert("welcome")

//         }
//     })
// })
// var x;

// $(document).ready(function () {
// $("#txt").keypress(function () {
//     console.log("keypressed")
// })

// $("#txt").keydown(function () {
//     console.log("keypressed")
// })

// $("#txt").mousedown(function(){
//     console.log("keymoved")
// })

//     $("#txt").click(function (e) {
//         x = e;
//         console.log(x)
//     })

// })

$(document).ready(function () {

    var left_value = 0;
    var top_value = 0;

    $(document).keydown(function (e) {

        var action = e.keyCode;

        console.log(action);

        if (action == 37) {
            // move left
            left_value = left_value - 10;
            $("#mario").css("left", left_value);
        }
        else if (action == 39) {
            // move right
            left_value = left_value + 10;
            $("#mario").css("left", left_value);
        }
        else if (action == 38) {
            // up
            top_value = top_value - 10;
            $("#mario").css("top", top_value);

        }
        else if (action == 40) {
            // down

            //top is increase that is going down we can check the css property section in the image and how is going
            
            top_value = top_value + 10;
            $("#mario").css("top", top_value);
        }

    })

});
