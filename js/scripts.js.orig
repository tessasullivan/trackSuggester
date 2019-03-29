
$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var age = parseInt($("#age").val());
    var sex = $("#sex").val();
    var orientation = $("#orientation").val();
    var favoriteAnimal = $("#favoriteAnimal").val();
    var match;
    var matchImage;

    if (age) {
      if (age < 30) {
        // Harry Potter characters
        if ((orientation === 'Straight' && sex === 'Male')
          || (orientation === 'Gay' && sex === 'Female')) {
            if (favoriteAnimal === "Cat") {
              match = 'Hermione Granger';
              matchImage = 'img/HermioneGranger.jpg';
            } else if (favoriteAnimal === "Dog") {
              match = 'Hannah Abbott';
              matchImage = 'img/HannahAbbott.jpg';
            } else if (favoriteAnimal === "Snake") {
              match = 'Bellatrix Lestrange';
              matchImage = 'img/BellatrixLestrange.jpg';
            } else if (favoriteAnimal === "Bird") {
              match = 'Fleur Delacour';
              matchImage = 'img/FleurDelacour.jpg';
            }
          } else if ((orientation === 'Gay' && sex === 'Male')
          || (orientation === 'Straight' && sex === 'Female')){
            if (favoriteAnimal === "Cat") {
              match = 'Harry Potter';
              matchImage = 'img/HarryPotter.jpg';
            } else if (favoriteAnimal === "Dog") {
              match = 'Sirius Black';
              matchImage = 'img/SiriusBlack.jpg';
            } else if (favoriteAnimal === "Snake") {
              match = 'Draco Malfoy';
              matchImage = 'img/DracoMalfoy.jpg';
            } else if (favoriteAnimal === "Bird") {
              match = 'Ron Weasley';
              matchImage = 'img/RonWeasley.jpg';
          }
        }
      } else {
        //Game of Thrones characters
        if ((orientation === 'Straight' && sex === 'Male')
          || (orientation === 'Gay' && sex === 'Female')) {
            if (favoriteAnimal === "Cat") {
              match = 'Daenerys Targaryen';
              matchImage = 'img/DaenerysTargaryen.jpg';
            } else if (favoriteAnimal === "Dog") {
              match = 'Brienne of Tarth';
              matchImage = 'img/Brienne.jpg';
            } else if (favoriteAnimal === "Snake") {
              match = 'Melisandre';
              matchImage = 'img/Melisandre.jpg';
            } else if (favoriteAnimal === "Bird") {
              match = 'Missandei';
              matchImage = "img/Missandei.jpg";
            }
          } else if ((orientation === 'Gay' && sex === 'Male')
          || (orientation === 'Straight' && sex === 'Female')){
            if (favoriteAnimal === "Cat") {
              match = 'Khal Drogo';
              matchImage = 'img/KhalDrogo.jpg';
            } else if (favoriteAnimal === "Dog") {
              match = 'John Snow';
              matchImage = 'img/Snow.jpg';
            } else if (favoriteAnimal === "Snake") {
              match = 'Ramsey Bolton';
              matchImage = 'img/Bolton.png';
            } else if (favoriteAnimal === "Bird") {
              match = 'Tyrion';
              matchImage = "img/Tyrion.jpeg";
            }
          }
          // alert("match is " + match);
      }
      $("#quiz").hide();
      $("#match").prepend("<h1>Your match is " + match + "</h1>");
      $("#match").append("<img src=" + matchImage + ">");
    } else {
      alert("Please enter your age");
    }

    event.preventDefault();
  });
});
