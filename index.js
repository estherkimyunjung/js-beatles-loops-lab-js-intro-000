// add solution here
function theBeatlesPlay(musicians, instruments) {
  var resultArray = [];
  
  for(var i = 0; i < musicians.length; i++) {
    resultArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return resultArray;
}

function johnLennonFacts(facts) {    
  var resultArray = [];
  var i = 0;
  while(facts.length > i) {             
    resultArray.push(`${facts[i]}!!!`);
    i++;
  }
   return resultArray;
}

function iLoveTheBeatles(num) {
  var resultArray = [];
  
  if (num < 15) {
    var i = 0;
    
    do {
     resultArray.push(`I love the Beatles!`);
     i++;
    } while(i > (num - 15) );
    
  } else {
    resultArray.push(`I love the Beatles!`);
  }
  
  return resultArray;
}

