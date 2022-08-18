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
document.body.addEventListener('mousedown', toggleMouseStateDown);
document.body.addEventListener('mouseup', toggleMouseStateUp);
function toggleMouseStateDown(){
    mouseIsDown=true;
 }
 function toggleMouseStateUp(){
    mouseIsDown=false;
 }
//Color Picker

let radios = document.querySelectorAll('input[type="radio"]')
let colorPicker = document.getElementById('rgb');
colorPicker.addEventListener('input', function(){
    colorChoice = colorPicker.value;
    document.getElementById('rgbRadio').checked = true;

});
for(let i = 0; i < radios.length; i++){
radios[i].onclick = function() {
    if(radios[i].id == 'rgbRadio'){
        colorChoice = colorPicker.value;
        console.log(colorPicker.value);
    }
    else {
    colorChoice = this.value;
    }
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