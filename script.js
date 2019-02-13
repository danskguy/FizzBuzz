//var numList = [];
//for(var i = 0; i < 100; i++){
//    numList.append(i + 1);
//}
var fizzBuzz = document.getElementById('fizzbuzz');

    for(var i = 1; i <= 100; i++){
        if(i % 15 === 0){
            addFizzBuzz("FizzBuzz", fizzBuzz );
        } else if(i % 5 === 0){
            addFizzBuzz("Buzz", fizzbuzz);
        } else if(i % 3 === 0){
            addFizzBuzz("Fizz", fizzBuzz);
        } else {
            addFizzBuzz(i, fizzbuzz);
        }
    }


function addFizzBuzz(name, list) {
    var newNumber = document.createElement('div');
    newNumber.innerText = name;
    newNumber.classList.add('number');
    list.appendChild(newNumber);
}
