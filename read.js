$(document).ready(function() {

$("#colorTheme").change(function() {
    if ($(this).val() === "#CCC9C7"){
      $("#textContainer").css("background-color", $(this).val());
      $("#menuBar").css("background-color", "#7F7873");
      $("#optionLeft").css("background-color", "#7F7E7C");
      $("#optionRight").css("background-color", "#7F7E7C");
      $("body").css("background-color", "#FFFFFF");
      $("html").css("background-color", "#FFFFFF");
    }else if ($(this).val() === "#d1807c"){
    	$("#textContainer").css("background-color", $(this).val());
      $("#menuBar").css("background-color", "#3d6f94");
      $("#optionLeft").css("background-color", "#3c94b8");
      $("#optionRight").css("background-color", "#3c94b8");
      $("body").css("background-color", "#84aab3");
      $("html").css("background-color", "#84aab3");
    }else if ($(this).val() === "#E3B482"){
    	$("#textContainer").css("background-color", $(this).val());
      $("#menuBar").css("background-color", "#303669");
      $("#optionRight").css("background-color", "#48509E");
      $("#optionLeft").css("background-color", "#48509E");
      $("body").css("background-color", "#F1D9C0");
      $("html").css("background-color", "#F1D9C0");
    }
}).change();

});