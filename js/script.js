// Funzioni --------------------------------------------------------------------
function numberRandomizer(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
// -----------------------------------------------------------------------------

var quantityOfRandomNumbers = 5;

var minRandomValue = 1;

var maxRandomValue = 99;

var milliseconds = 30000;

var numberList = [];

for (var i = 1; i <= quantityOfRandomNumbers; i++) {
  numberList.push(numberRandomizer(minRandomValue, maxRandomValue))
}

console.log(numberList);

var seconds = milliseconds / 1000;

alert('Osserva bene questi numeri: ' + numberList + '. Dopo che avrai chiuso questo alert passeranno ' + seconds + ' secondi e poi ti chiederò i numeri che hai visto uno alla volta. Vediamo quanti ne azzecchi?')

var rightNumbers = 0;

setTimeout(function(){
  for (var i = 1; i <= quantityOfRandomNumbers; i++) {
    var userNumberInput = parseInt(prompt('Numero ' + i));

    if (numberList.includes(userNumberInput)) {
      rightNumbers++;
    }
  }
  alert('Hai indovinato ' + rightNumbers + ' numeri.')
}, milliseconds);
