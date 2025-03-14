const ucFirstCharacters = function(sentence = 'string'){
  let words = sentence.split(' ');
  let finished = '';
  for(let i = 0; i < words.length; i++){
    let temp = words[i];
    finished += words[i].charAt(0).toUpperCase() + words[i].substring(1) + ' ';
  }
finished = finished.trim();
console.log(finished);
}

ucFirstCharacters('This is a sentence to be used.');

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}