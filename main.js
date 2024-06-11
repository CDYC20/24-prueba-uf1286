function generarArrayBidimensional() {
  function generarArray() {
    return [r, r1, r2];
  }

  var array = [];
  f = Math.floor(Math.random()*11)
  for (var i = 4; i < f; i++) {
    
    r = Math.floor(Math.random()*11)
    r1 = Math.floor(Math.random()*11)
    r2 = Math.floor(Math.random()*11)
    array.push(generarArray());
  }
  return array;
}

function mostrarArrayBidimensional(arrayBidimensional) {
  function mostrarArray(array) {
    array.forEach(function (elemento) {
      var formatedElemento = (" " + elemento).slice(-2);
      process.stdout.write(`| ${formatedElemento} `);
    });
    console.log("|");
  }

  function mostrarLinea() {
    for (var i = 0; i < 15; i++) {
      process.stdout.write("-");
    }
    console.log("-");
  }

  mostrarLinea();
  arrayBidimensional.forEach(function (array) {
    mostrarArray(array);
    mostrarLinea();
  });
}

mostrarArrayBidimensional(generarArrayBidimensional());
