
var animals = [];
var meerkat = new Animal("meerkat", 36);
var porcupine = new Animal("porcupine", 34);
var starfish = new Animal("starfish", 36)
var raccoon = new Animal("raccoon", 38);
var human = new Animal("human", 46);
var elephant = new Animal("elephant", 56);
var yak = new Animal("yak", 60);
var wolf = new Animal("wolf", 78);
var hedgehog = new Animal("hedgehog", 88);

// Constructor function for Animal class.
function Animal(species, chrcount){
  this.species = species;
  this.chrcount = chrcount;
  animals.push(this);
  
  this.toHTML = function(){
    
    return "<div class='animaldata'>" + "<li data-chrcount="+ this.chrcount+">" + this.species + " " + this.chrcount + "</li>" + "</div>";
  };


  $('#animals').append(this.toHTML());
}

// Making a "bar chart" for each animal by setting random colors on divs.
$('.animaldata').each(function(){
    var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
    $(this).css("background-color", hue);
    var divWidth = $("li", this).attr("data-chrcount")*2;
    $(this).css("width", divWidth);
});


// Shuffling animals by rearranging divs.
function shuffle(m) {
    var rand, $rand;
    rand = Math.floor(Math.random() * m--);
    $('.animaldata:eq(' + m + ')').
      after($('.animaldata:eq(' + rand + ')')).
      insertBefore($('.animaldata:eq(' + rand + ')'))
    if(m) {
      setTimeout(shuffle, 200, m);
    }
  };

var $animaldata = $('.animaldata');

function bubblesort($animaldata){
  var i, j, swapped;
  do{
    swapped = false;
    for (j = 1; j <= $animaldata.length - 1; j++){
      var j0 = j-1;
      var width0 = $('.animaldata:eq('+ j0 + ')').width();
      var width1 = $('.animaldata:eq('+ j + ')').width();
      while (width0 > width1){
        var $temp = $('.animaldata:eq(' + j + ')');
        $('.animaldata:eq('+ j +')').replaceWith($('.animaldata:eq('+ j0 +')');
        $('.animaldata:eq('+ j0 + ')').before($temp);
        width0 = $('.animaldata:eq('+ j0 + ')').width();
        width1 = $('.animaldata:eq('+ j + ')').width();
        swapped = true;
      }
    }
  } while (swapped);
  return($animaldata);
}

$('#sort').on('click', function(){
  bubblesort($animaldata);
})


$('#shuffle').on('click', function(){
  shuffle(animals.length);  
});





