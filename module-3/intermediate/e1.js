const ucFirstCharacters = function(sentence = 'string'){
    let broken = sentence.split(' ');
    let finished = '';
    for(let i = 0; i < broken.length; i++){
      let temp = broken[i];
      let letter = broken[i][0].toUpperCase();
      console.log(letter)
      temp = (temp[1] = letter);
      //doesnt replace original
      finished += temp + ' ';
    }
    console.log(finished);
}

ucFirstCharacters('This is a sentence to be used.');

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}