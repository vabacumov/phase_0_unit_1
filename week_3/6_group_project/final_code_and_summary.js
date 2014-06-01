// Final Code
var sum = function(list){
    var result = 0;
    for (var i = 0; i < list.length; i ++) {
      result += list[i];
    }
    return result;
};

var mean = function(list){
   var result = (sum(list) / list.length);
   return result;
};

var median = function(list){
  var sorting = list.sort(function(a, b) {return a-b;});
  var length = list.length; 
  var remainder = list.length%2;
  var half = Math.floor(list.length/2);
  if (remainder === 1){
    return sorting[half];
  } else {
    return (sorting[half] + sorting[half-1])/2;
  }
};

// Summary After running the final code located above through all 9 tests that were given for this
// assignment, all tests have passed. Congratulations guys, great job! I'm not really sure what else
// needs to be included in this summary, but I just want to say to it was very easy reading through
// and interpreting your code for me as Person 1, who didn't really participate in the production of
// the actual code. The only part that got confusing was sorting[half] in the median function, but I
// think understand it now. I believe the only thing that's left to do for this assignment is to
// write our personal reflections. Nice working with you all!
