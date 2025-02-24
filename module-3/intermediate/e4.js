const camel = (css) => {
    let words = css.split('-');
    let finished = '';
    for(let i = 0; i < words.length; i++) {
        if (i == 0){
            finished += words[i];
        }else{
            finished += words[i].charAt(0).toUpperCase() + words[i].substring(1);    
        }   
    }
    console.log(finished);
  } 

const camel2 = (css) => {
    let words = css.split('-');
    let finished = '';
    words.forEach(word => {
        if (word == words[0]){
            finished += word;
        }else{
            finished += word.charAt(0).toUpperCase() + word.substring(1);    
        }})   
    console.log(finished);    
}
   

camel('margin-left');
camel2('background-color-plus-more');