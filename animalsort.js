function Animals(){
  var theAnimals = this,
    $animals = $('#animals'),
    animal;

  $.each(this, function(){
  animal = new Animals(species, chrcount)
  $animals.append(Animal.toHTML());
  });
}

function Animal(species, chrcount){
  this.species = species;
  this.chrcount = chrcount;
  this.toHTML = function(){
    return '<tr><td>' + this.species + '</td>' + '<td>' + this.chrcount + '</td></tr>';
  };
}


var meerkat = new Animal("meerkat", 36);
var porcupine = new Animal("porcupine", 34);
var starfish = new Animal("starfish", 36)
var raccoon = new Animal("raccoon", 38);
var human = new Animal("human", 46);
var elephant = new Animal("elephant", 56);
var yak = new Animal("yak", 60);
var wolf = new Animal("wolf", 78);
var hedgehog = new Animal("hedgehog", 88);

var animals = new Animals();