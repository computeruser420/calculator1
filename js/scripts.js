$(document).ready(function(){

var screenText = "";
var evaled = 0;

  $(".num").click(function(){
    if(evaled == 1){
      screenText = "";
      $("#screen").text(screenText);
    }

    var input = $(this).text();
    screenText = screenText + input;
    $("#screen").text(screenText);
    evaled = 0;
  });

  $(".evaluate").click(function(){
    // alert(eval(screenText));
    if (String(screenText).includes("//")){
      alert("Learn to use a claculat");
      screenText = "";
      $("#screen").text(screenText);
    }

    try {
      screenText = eval(screenText);
      $("#screen").text(screenText);
      evaled = 1;
    }
    catch(err) {
      alert("Learn to use a claculat");
      screenText = "";
      $("#screen").text(screenText);
    }


  });
  $("#clear").click(function(){
    // alert(eval(screenText));
    screenText = ""
    $("#screen").text(screenText);

  });

 });
