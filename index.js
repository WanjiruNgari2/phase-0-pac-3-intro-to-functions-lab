const expect = require("expect");

function shout(string) {
    return string.toUpperCase();
  }
  "Hello".toUpperCase(); // 'HELLO'


function whisper(string) {
    "HELLO".toLowerCase();
    return string.toLowerCase();
  }

function logShout (string){

   const text = "hello"
   const uppercase = text.toUpperCase();
   console.log(uppercase);
}
logShout(string);

function logWhisper (string) {

  const text = "HELLO"
  const LowerCase = text.toLowerCase();
  console.log(LowerCase);
}
logWhisper(string);




function sayHiToHeadphonedRoommate(inputString) {

  if (inputString === inputString.toLowerCase()) {
      return "I can't hear you!"; 
  }
  
  return "YES INDEED!"; 
}

function sayHiToHeadphonedRoommate(inputString) {
  if (inputString === "Let's have dinner together!") {
      return "I would love to!";
  }
  
  if (inputString === inputString.toLowerCase()) {
      return "I can't hear you!";  
  }
  return "YES INDEED!";  
}

