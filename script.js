let colorChoice = 'black';


const container = document.querySelector('.grid');
//Builds grid and removes draggability
for (i=0; i<380; i++){
const newDiv = document.createElement('div');
newDiv.classList.add('glow');
container.appendChild(newDiv);
}
const pixels = document.querySelectorAll('.glow');
container.addEventListener('dragstart', (e) => {
  e.preventDefault()
})
container.addEventListener('drop', (e) => {
  e.preventDefault()
})

//Set a variable to watch mouse click position
let mouseIsDown = false;
document.body.addEventListener('mousedown', toggleMouseState);
document.body.addEventListener('mouseup', toggleMouseState);
function toggleMouseState(){
 if (mouseIsDown == true){
    mouseIsDown=false;
    console.log(mouseIsDown);
 }
    else {
        mouseIsDown=true;
        console.log(mouseIsDown);
    }
}
//Color Picker
let radios = document.querySelectorAll('input[type="radio"]')
for(let i = 0; i < radios.length; i++){
radios[i].onclick = function() {
    colorChoice = this.value;
}
}
//Coloring
for (i=0;i<pixels.length;i++){
    pixels[i].addEventListener('mouseover', changeColor);
    }
    for (i=0;i<pixels.length;i++){
        pixels[i].addEventListener('mousedown', changeColorClick);
        }    
function changeColor(e){
    if (mouseIsDown == true){
        e.target.style.backgroundColor = colorChoice;
    }
}
function changeColorClick(e){
        e.target.style.backgroundColor = colorChoice;
}