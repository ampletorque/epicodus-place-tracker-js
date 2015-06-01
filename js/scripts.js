$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputPlaceName = $("input#new-place-name").val();
    var inputCountry = $("input#new-country").val();
    var inputLandmark = $("input#new-landmark").val();
    var inputTimeOfYear = $("input#new-time-of-year").val();
    var inputNotes = $("input#new-notes").val();

    var newPlace = { placeName: inputPlaceName, country: inputCountry, landmarks: inputLandmark, timeOfYear: inputTimeOfYear, notes: inputNotes };


    $("ul#places").append("<li><span class='places'>" + newPlace.placeName + "</span></li>");

    $("input#new-place-name").val("");
    $("input#new-country").val("");
    $("input#new-landmark").val("");
    $("input#new-time-of-year").val("");
    $("input#new-notes").val("");

    $(".places").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.placeName);
      $(".place-name").text(newPlace.placeName);
      $(".country").text(newPlace.country);
      $(".landmarks").text(newPlace.landmarks);
      $(".time-of-year").text(newPlace.timeOfYear);
      $(".notes").text(newPlace.notes);
    });
  });
});
