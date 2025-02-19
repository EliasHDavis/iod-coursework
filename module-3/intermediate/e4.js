const camel = (css) => {
    let i = 0;
    while(i < 5) {
        let pos = css.indexOf('-');
        console.log(pos);
        css[pos + 1].toUpperCase();
        css.replace(css[pos], '');
        i++
    }
    console.log(css)
  } 
    
  
  camel('margin-left')