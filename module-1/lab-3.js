function changeLeft(){
    document.getElementById("column1").style.background = "#" + generateRandomHexadecimal(6)
};

function changeRight(){
    document.getElementById("column2").style.background = "#" + generateRandomHexadecimal(6)
};

function headingLeft(){
    document.getElementById("heading1").innerHTML = document.getElementById("hLeft").value
};

function headingRight(){
    document.getElementById("heading2").innerHTML = document.getElementById("hRight").value
};

function generateRandomHexadecimal(length) {
    const characters = '0123456789ABCDEF';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
  
    return result;
  };