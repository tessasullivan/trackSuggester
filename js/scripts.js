function determineTrack (answer1, answer2, answer3, answer4, answer5) {
  var result;
  // question 1, answer a) UI
  if (answer1 === "a") {
    if (answer2 === "b") {
      result = "Ruby/Rails";
    } else {
      result = "CSS/Design";
    }
  }
  // question 1, answer b) data
  if (answer1 === "b") {
    // if user prefers traditional enterprises
    if (answer2 === "c") {
      result = "Java/Android";
    } else if (answer5 === "b") {
      result = "C#/.NET";
    } else {
      result = "PHP/Drupal";
    }
  }
  // question 1, answer c) business
  if (answer1 === "c") {
  // if user prefers Mac or Unix
    if (answer5 === "a" || answer5 === "c") {
      result = "Java/Android";
    } else {
      result = "C#/.NET";
    }
  }
  // question 1, answer d) mobile
  if (answer1 === "d") {
    if (answer2 === "b") {
      // if user prefers startups
      result = "Ruby/Rails";
    } else {
      result = "Java/Android";
    }
  }
  // question 1, answer e) unsure
  return result;
}

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var answer1 = $("input:radio[name=question1]:checked").val();
    var answer2 = $("input:radio[name=question2]:checked").val();
    var answer3 = $("input:radio[name=question3]:checked").val();
    var answer4 = $("input:radio[name=question4]:checked").val();
    var answer5 = $("input:radio[name=question5]:checked").val();
    var result = determineTrack(answer1, answer2, answer3, answer4, answer5);
    //alert ("answers are " + answer1 + ", " + answer2 + ", " + answer3 + ", " + answer4 + ", " + answer5);

//    if (answer1 && answer2 && answer3 && answer4 && answer5) {
    //  alert("answers present")
      $("#survey").hide();
      $("#result").append("<p>" + answer1 + ", " + answer2 + ", " + answer3 + ", " + answer4 + ", " + answer5 + "</p>");
      $("#result").append("<p>Result is " + result + "</p>");
//    } else {
//      alert("Please answer all questions before hitting Submit.")
//    }


    event.preventDefault();
  });
});
