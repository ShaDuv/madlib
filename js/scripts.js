$(document).ready(function() {


  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    console.log(person1Input);
    var person2Input = $("input#person2").val();
    var animalInput= $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    $(".person1").append(person1Input);
    console.log(person1Input);
    $(".person2").append(person2Input);
    console.log(person2Input);
    $(".animal").append(animalInput);
    console.log(animalInput);
    $(".exclamation").append(exclamationInput);
    $(".verb").append(verbInput);
    $(".noun").append(nounInput);

    $("#story").show();

    event.preventDefault();
  });

  console.log(person1Input);

});
