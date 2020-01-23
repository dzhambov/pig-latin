// Front-end Logic
$(document).ready(function () {
  $("form#latin").submit(function (event) {
    event.preventDefault();
    var word = $("input#word").val();
    var translatedMessage = pigLatin(word);

    $(".translation").text(translatedMessage);

    $("result").show();
    console.log(word);

  });
});

//Back-end Logic

var pigLatin = function pigLatin(word) {

  var vowels = ["a", "e", "i", "o", "u"];
  var strArr = word.split("");
  var index;

  // Look for the vowel index in a string
  for (var k = 0; k < strArr.length; k++) {
    for (var i = 0; i < vowels.length; i++) {
      if (strArr[k] === vowels[i]) {
        if (index === undefined) {
          index = strArr.indexOf(strArr[k]);
        }
      }
    }
  }

  // if vowel is not the first letter use pig latin method
  if (index !== 0) {
    var sliced = word.slice(0, index);
    word = word.slice(index) + sliced + "ay";
  } else {
    word = word + "way";
  }

  return word;
}

pigLatin("consonant");

var quWords = function (word) {
  var squ = "squ";
  var qu = "qu";
  if (word[0] + word[1] + word[2] === squ) {
    return word.slice(3) + word[0] + word[1] + word[2] + "ay";
  } else {
    return word.slice(2) + word[0] + word[1] + "ay";
  }
};
