let button = document.body.querySelector('#button-random-color')


function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
    
  }
  

function geraCoresAleatorias(){
    document.querySelector('.yellow').style.backgroundColor = generateColor()
    document.querySelector('.red').style.backgroundColor = generateColor()
    document.querySelector('.purple').style.backgroundColor = generateColor()
}

button.addEventListener('click', geraCoresAleatorias)

