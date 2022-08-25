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

$(document).ready(function () {
    $("#txt").keypress(function () {
        console.log("keypressed")
    })
})
