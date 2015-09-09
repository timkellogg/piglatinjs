var createArray = function(number) {
  var newArr = [];
  var i = 1;
  while (i <= number ) {
    newArr.push(i);
    i++;
  }
  return newArr;
}
var findPrime = function(number) {
  var collection = createArray(number);
  for (var k = 0; k < collection.length; k ++) {
    for(var i = 2; i < collection[k]; i++) {
      if (collection[k] % i === 0) {
        collection.splice(k, 1);
        k --;
      }
    }
  }
  return collection;
}
