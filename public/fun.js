// $(function() {// console.log("I'm in a function scope!");// });////// $(function() {// var element = $("span");// console.log(element);// });//// Will only log the event to console if the string has changed.// $(function() {//   $('input').change(function(event) {//     // This spits out the string input by the user.//     // event.target === this//     console.log(event.target.value);//     console.dir(event);//   });// });// $(function() {//   $('input').change(function(event) {//     var input = event.target;//     $(input).replaceWith("<strong>Thanks!</strong>");//   });// });// $(function() {//   $('input').change(function(event) {//     var input = event.target;//     $(input).addClass('red');////   });// });//// // This lets the user click on the link, but will "Prevent" the User from refreshing/going to the link.// $(function()  {//   $('a').click(function(event)  {//     console.log('link clicked');//     event.preventDefault();//     // Fades out the link then back in, then replace with "OMG!"//     $(event.target).fadeOut('slow');//     $(event.target).fadeIn(3000, function() {//     $(event.target).replaceWith("OMG!");//     });//   });// });// $(function() {//   $('input').click(function(event) {//     var input = event.target;//   });// });// $(function()  {// $('img').hover(function(event) {//       console.log("change");//     });//   });$(function()  {  $('img').mouseover(function(event)  {    x = Math.ceil(Math.random() * 400) + 100;    y = Math.ceil(Math.random() * 400) + 100;    var rez1 = ("http://placekitten.com/g/" + x + "/" + y);    console.dir(event.currentTarget.currentSrc);    console.dir(rez1);    $('img').attr("src", rez1);    $("#main").effect( "bounce", {times:3}, 500);  });});$(function()  {  // $("#main").animate({top: "-=-180px",}, 600);  $("#main").animate({top: "-=-180px",}, 1000, 'easeInCirc');  $("#main").effect( "bounce", {times:3}, 500 );});