
// // EPISODE 1 
// var name = 'Slim Shady';

// var printName = function() {
//   console.log('Hi! My name is', name);
// };

// printName();

// //this function prints the string 'hi my name is' and then the global variable name 

// // Episode 2

// score = 5;

// var result = function() {
//   var score = 3;
//   return score;
// };
// console.log(result());


// //this function probably returns 3. because scope. 

// // Episode 3

// var myAnimals = ['chickens', 'cats', 'rabbits'];

// var listAnimals = function() {
//   myAnimals = ['ducks', 'dogs', 'lions'];
//   for(var i=0; i<myAnimals.length; i++){
//     console.log(i + ": " + myAnimals[i]);
//   }
// }

// listAnimals();

// //this will prince out '0: ducks, 1: dogs, 2: lions,'' because the global variable was altered by the lack of var. 

// // Episode 4

// var suspectOne = 'Alan';
// var suspectTwo = 'Steve';
// var suspectThree = 'John';
// var suspectFour = 'Ally';

// var allSuspects = function() {
//   var suspectThree = 'Adam'
//   console.log('Suspects include:', suspectOne, suspectTwo, suspectThree, suspectFour);
// };

// allSuspects();
// console.log( 'Suspect three is:' + suspectThree );

// //this will print out 'Alan', 'Steve', 'Adam', 'Ally' - cause 'Adam' is the local variable suspectFour in this scope. 
// //then it will print 'suspect three is John' cause the global variable was not altered by the function. 


// // Episode 5

// var detective = {
//   name : 'Ace Ventura',
//   pet : 'monkey'
// };

// var printName = function(detective) {
//   return detective.name
// };

// var detectiveInfo = function() {
//   detective['name'] = 'Poirot'
//   return printName(detective);
// };

// console.log(detectiveInfo());

// //this will print , i THINK, "Poirot". because the global var detective is altered during dectectiveInfo

// // Episode 6

// var murderer = 'John';

// var outerFunction = function() {
//   var murderer = 'Ally';

//   var innerFunction = function() {
//     murderer = 'Steve';
//   }

//   innerFunction();
// }

// outerFunction();
// console.log('The murderer is', murderer);

//this is going to print 'The murder is Steve' , i think, becauase line 88 alters the global variable. 

// Episode 7 - Make up your own episode/s!

var trainer = "Ash";

var reTrain = function(num){
  if(num % 2 == 0) {
    trainer = "Stu"; 
  } else {
    var trainer = "Jia"; 
  }
};

console.log(trainer); 
reTrain(2); 
console.log(trainer); 
reTrain(3); 
console.log(trainer); 





// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.