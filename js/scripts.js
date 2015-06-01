$(document).ready(function() {

  $("#add-landmark").click(function() {
    $("#new-landmarks").append('<div class="new-landmarky">' +
                                 '<div class="form-group">' +
                                   '<label for="new-landmark">Landmark</label>' +
                                   '<input type="text" class="form-control new-landmark">' +
                                 '</div>' +
                               '</div>');
  });

  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputPlaceName = $("input#new-place-name").val();
    var inputCountry = $("input#new-country").val();
    var inputTimeOfYear = $("input#new-time-of-year").val();
    var inputNotes = $("input#new-notes").val();

    var newPlace = { placeName: inputPlaceName, country: inputCountry, landmarks: [], timeOfYear: inputTimeOfYear, notes: inputNotes };


    $(".new-landmarky").each(function() {
      var inputLandmark = $(this).find("input.new-landmark").val();

      var newLandmark = { landmark: inputLandmark };
      newPlace.landmarks.push(newLandmark);
      debugger;
    });

    $("ul#places").append("<li><span class='places'>" + newPlace.placeName + "</span></li>");

    $("input#new-place-name").val("");
    $("input#new-country").val("");
    $("input.new-landmark").val("");
    $("input#new-time-of-year").val("");
    $("input#new-notes").val("");

    $(".places").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.placeName);
      $(".place-name").text(newPlace.placeName);
      $(".country").text(newPlace.country);

      $("ul#landmarks").text("");
      newPlace.landmarks.forEach(function(thing) {
        $("ul#landmarks").append("<li>" + thing.landmark + "</li>");
      });

      // $(".landmarks").text(newPlace.landmarks);
      $(".time-of-year").text(newPlace.timeOfYear);
      $(".notes").text(newPlace.notes);
    });
  });
});
