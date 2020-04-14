$(function () {
  console.log("ready!");
  $("#textOutput").text("");

  $("#btnSendText").on("click", function (e) {
    e.preventDefault();
    var getInput = $("#textInput").val();
    console.log(getInput);
    $("#textOutput").append("<p>" + getInput + "</p>");
    // then some code, somehow to change the format of the <p>, like css uppercase, lowercase, color, size, font-family...etc.
  });
});