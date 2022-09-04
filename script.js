  let button = document.body.querySelector('#button-random-color')
  let colorPalette = document.body.querySelector('#colorPallete')
  let black = document.querySelector('.black')
  let yellow = document.querySelector('.yellow')
  let red = document.querySelector('.red')
  let purple = document.querySelector('.purple')
  let draw = false
  let pixelBoard = document.querySelector('#pixel-board');
  let selected = document.querySelector('.selected');
  let reset = document.getElementById('clear-board')
  let pixel = document.getElementsByClassName('pixel')



function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
    
  }
  
  
  let cores = [];
function geraCoresAleatorias(){
   
  cores.push(document.querySelector('.yellow').style.backgroundColor = generateColor()) 
  cores.push(document.querySelector('.red').style.backgroundColor = generateColor())
  cores.push(document.querySelector('.purple').style.backgroundColor = generateColor())

    return cores;
}


button.addEventListener('click', geraCoresAleatorias);

//localStorage.setItem('colorPalette', JSON.stringify(geraCoresAleatorias()));
localStorage.colorPalette = JSON.stringify(geraCoresAleatorias())
let storage =  JSON.parse(localStorage.getItem('colorPalette')) 



//////////////////////////////////////////////////////////////////////



function creatNewDiv (classes) {

    let novaDiv = document.createElement('div');
    novaDiv.className = classes
    pixelBoard.appendChild(novaDiv)



    novaDiv.addEventListener('mouseover', function(){
      if(!draw) return
      novaDiv.style.backgroundColor = selected.value
  })
  novaDiv.addEventListener('mousedown', function(){
    novaDiv.style.backgroundColor = selected.value
  })

    


}

for (index = 0; index < 25; index += 1){
  creatNewDiv('pixel')
}

function selectorOfColor (){

  
  black.addEventListener('click', function(){selected.value = black.value})
 
   yellow.addEventListener('click', function(){selected.value = cores[0]})
 
   red.addEventListener('click', function(){selected.value = cores[1]})

   purple.addEventListener('click', function(){selected.value = cores[2]})

  
}

selectorOfColor ()



let defaultColors = ['(255,0,0)', '255,0,0', '128,0,128']


reset.addEventListener('click', function(){for(let index = 0; index < pixel.length; index += 1){pixel[index].style.backgroundColor  = '#FFFFFF'}
})











