function convertStringToASCII(string) {
    var asciiCodes = [];
    for (var i = 0; i < string.length; i++) {
      var charCode = string.charCodeAt(i);
      asciiCodes.push(charCode);
    }
    return asciiCodes.join('');
  }
  
  var inputString = "Hello, World!";
  var result = convertStringToASCII(inputString);