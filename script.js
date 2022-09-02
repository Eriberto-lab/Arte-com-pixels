  let button = document.body.querySelector('#button-random-color')
  let colorPalette = document.body.querySelector('#colorPallete')
  let yellow = document.querySelector('.yellow')
  let red = document.querySelector('.red')
  let purple = document.querySelector('.purple')


function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
    
  }
  
  
function geraCoresAleatorias(){
    let cores = [];
  cores.push(document.querySelector('.yellow').style.backgroundColor = generateColor()) 
  cores.push(document.querySelector('.red').style.backgroundColor = generateColor())
  cores.push(document.querySelector('.purple').style.backgroundColor = generateColor())

    return cores;
}
 
button.addEventListener('click', geraCoresAleatorias);

localStorage.setItem('colorPalette', JSON.stringify(geraCoresAleatorias()));
let storage =  JSON.parse(localStorage.getItem('colorPalette')) 

function saveColor (){

   
    yellow.style = storage[0]
    yellow.style = storage[1]
    yellow.style = storage[2]
    
}

saveColor()
//////////////////////////////////////////////////////////////////////

let pixelBoard = document.querySelector('#pixel-board');


   

function creatNewDiv (classes) {

    let novaDiv = document.createElement('div');
    novaDiv.className = classes
    pixelBoard.appendChild(novaDiv)

    return novaDiv

}



for (index = 0; index < 25; index += 1){
    creatNewDiv('pixel')
}








