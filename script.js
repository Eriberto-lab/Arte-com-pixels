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

  if (cores.length === 0){
    cores = ['#000000','#FFFF00','#FF0000','#800080']   
  }

function geraCoresAleatorias(){
  cores.push(document.querySelector('.black').style.backgroundColor = '#000000') 
  cores[1] = document.querySelector('.yellow').style.backgroundColor = generateColor()
  //cores.push(document.querySelector('.red').style.backgroundColor = generateColor())
  cores[2] = document.querySelector('.red').style.backgroundColor = generateColor()
  //cores.push(document.querySelector('.purple').style.backgroundColor = generateColor())
  cores[3] = document.querySelector('.purple').style.backgroundColor = generateColor()
  

    return cores;
}


button.addEventListener('click', geraCoresAleatorias);
button.addEventListener('click', savePalette);





function savePalette (){
myArray = []

for(let index = 0; index < cores.length; index += 1){
  myArray[index] = cores[index]
}

 localStorage.setItem('colorPalette',JSON.stringify(myArray))



}

let salvo = localStorage.getItem('colorPalette');

function restoreColors (){

  if (salvo){
    salvo = JSON.parse(salvo)
     for(let index = 0; index < salvo.length; index += 1){
        
        black.style.backgroundColor  = salvo[0]
        yellow.style.backgroundColor  = salvo[1]
        red.style.backgroundColor  = salvo[2]
        purple.style.backgroundColor  = salvo[3]
     }
    }
}






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

// function selectorOfColor (){

  
  black.addEventListener('click', function(){selected.value = cores[0]})
 
   yellow.addEventListener('click', function(){selected.value = cores[1]})
 
   red.addEventListener('click', function(){selected.value = cores[2]})

   purple.addEventListener('click', function(){selected.value = cores[3]})

  
//}

//selectorOfColor ()



reset.addEventListener('click', function(){for(let index = 0; index < pixel.length; index += 1){pixel[index].style.backgroundColor  = '#FFFFFF'}
})

window.onload = restoreColors()










