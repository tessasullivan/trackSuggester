function determineTrack (answer1, answer2, answer3, answer4, answer5) {
  var result;
  var resultImage;

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
  if (answer1 === "e") {
    // if user is interested in mobile devices
    if (answer3 === "c") {
      result = "Java/Android";
    } else if (answer3 === "d") {
      result = "C#/.NET";
    } else {
      result = "Ruby/Rails";
    }
  }

  if (result === "C#/.NET") {
    resultImage = 'img/C.net.png';
  } else if (result === 'CSS/Design') {
    resultImage = 'img/artist-board-bracelet-1327214.jpg';
  } else if (result === "Java/Android") {
    resultImage = 'img/Java-Android-640x353.jpg';
  } else if (result === 'PHP/Drupal') {
    resultImage = 'img/drupal-php.jpg';
  } else if (result === 'Ruby/Rails') {
    resultImage = 'img/Ruby_On_Rails_Logo.png';
  }
  return [result, resultImage];
}

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var answer1 = $("input:radio[name=question1]:checked").val();
    var answer2 = $("input:radio[name=question2]:checked").val();
    var answer3 = $("input:radio[name=question3]:checked").val();
    var answer4 = $("input:radio[name=question4]:checked").val();
    var answer5 = $("input:radio[name=question5]:checked").val();
    var suggestedTrack = determineTrack(answer1, answer2, answer3, answer4, answer5);
    var track = suggestedTrack[0];
    var trackImage = suggestedTrack[1];
    //alert ("answers are " + answer1 + ", " + answer2 + ", " + answer3 + ", " + answer4 + ", " + answer5);

   if (answer1 && answer2 && answer3 && answer4 && answer5) {
      $("#survey").hide();
      $("#result").append("<h1>Programming Track Suggestion</h1>");
      $("#result").append("<img src=" + trackImage + ">");
      $("#result").append("<p>We believe the <strong>" + track + "</strong> track will be the best choice.</p>");
   } else {
     alert("Please answer all questions before hitting Submit.")
   }


    event.preventDefault();
  });
});
