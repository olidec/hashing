function textToNumber(text) {
    return parseInt([...text].map(c => c.charCodeAt(0)).join(''));
  }
  
  const h = textToNumber("Hello");
  
  console.log("Your text as a number: " + h);
  console.log("Your text 'hashed': " + (h % 11));