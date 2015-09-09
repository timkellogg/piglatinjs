
var translator = function(text) {
  var splitText = text.split('');

  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var output = text;
  var i;

  if(!checkConsonant(splitText[0])) {
    return output.concat('ay');
  } else {

    for(i = 0; i < splitText.length; i++ ) {
      while (checkConsonant(splitText[i])) {
        var letter = splitText.shift();
        if ( (letter === 'q') && (splitText[0] === 'u') ) {
          splitText.push(letter)
          var u = splitText.shift();
          splitText.push(u);
        } else {
          splitText.push(letter)
        }
      }
      i = splitText.length;
      return splitText.join('');
    }
  }
}

var checkConsonant = function(letter) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var check = vowels.indexOf(letter);
  if (check === -1) {
    return true;
  } else {
    return false;
  }
}
