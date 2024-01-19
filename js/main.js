/// <reference types="../@types/jquery" />

$("a").on('click',function(e){
  let y =e.target.getAttribute("href")
  let x = $(y).offset().top;
  $("html,body").animate({scrollTop:x},2000);
  
  console.log(x);
})


// *________________ SideBar_______________________

$(".openNavbar").on("click", function () {
  $("#leftMenu").animate({ width: '250px' }, 50)
  $(".header-caption").animate({ marginLeft: '250px' }, 50)
})

$(".closebtn").on("click", function () {
  $("#leftMenu").animate({ width: '0px' }, 50)
  $(".header-caption").animate({ marginLeft: '0px' }, 50)
})



// &________________ Singers  ___________

$('#sliderDown .toggle').on("click", function () {
  $('.inner').not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

// *________________ Counter _______________________

$(function () {
  countDownToTime("28 February 2024 09:56:00");
});

function countDownToTime(countTo) {
  let futureDate = new Date(countTo);
  futureDate = futureDate.getTime() / 1000;

  let now = new Date();
  now = now.getTime() / 1000;

  let timeDifference = futureDate - now;

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - days * 24 * 60 * 60) / 3600);
  let mins = Math.floor((timeDifference - days * 24 * 60 * 60 - hours * 3600) / 60);
  let secs = Math.floor(timeDifference - days * 24 * 60 * 60 - hours * 3600 - mins * 60);

  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${mins} m`);
  $(".seconds").html(`${secs} s`);

  setInterval(function () {
    countDownToTime(countTo);
  }, 1000);
}


// ^________________ Text Area  ____

const maxLength = 100;
$('textarea').on("keyup", function () {
  let length = $(this).val().length;
  let AmountLeft = maxLength - length;
  if (AmountLeft <= 0) {
    $("#chars").text("your available character finished");
  }
  else {

    $("#chars").text(AmountLeft);
  }
});


// &__ Scroll  __
$("a").on("click", (e) => {
  let x = e.target.getAttribute('href');
  var sectionOffset = $(x).offset().top;
  $('html, body').animate({ scrollTop: sectionOffset }, 2000);
});
