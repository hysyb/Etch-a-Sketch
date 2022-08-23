//default settings
let colorChoice = 'black';
document.getElementById('black').checked = true;
const DEFAULT_GRID_ROWS = 20;

//Builds grid and removes draggability
const container = document.querySelector('.grid');
for (i=0; i<DEFAULT_GRID_ROWS*DEFAULT_GRID_ROWS; i++){
const newDiv = document.createElement('div');
newDiv.classList.add('glow');
container.appendChild(newDiv);
container.style.cssText += 'grid-template-columns: repeat('+ DEFAULT_GRID_ROWS +',1fr);';
}

function addPixelsEventListener(){
    let pixels = document.querySelectorAll('.glow');
    for (i=0;i<pixels.length;i++){
        pixels[i].addEventListener('mouseover', changeColor);
        }
    for (i=0;i<pixels.length;i++){
        pixels[i].addEventListener('mousedown', changeColorClick);
        }  
}
addPixelsEventListener();
container.addEventListener('dragstart', (e) => {
  e.preventDefault()
})
container.addEventListener('drop', (e) => {
  e.preventDefault()
})
function redrawGrid(newGridRows){
    container.innerHTML = '';
    for (i=0; i<newGridRows*newGridRows; i++){
        const newDiv = document.createElement('div');
        newDiv.classList.add('glow');
        container.appendChild(newDiv);
        container.style.cssText += 'grid-template-columns: repeat('+ newGridRows +',1fr);';
        }
    addPixelsEventListener();
}

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
let radios = document.querySelectorAll('input[type="radio"]');
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
//Range Slider
let gridSizeSlider = document.getElementById('slider');
let sliderValue = document.getElementById('sliderValue');
gridSizeSlider.value = '3';
sliderValue.textContent = 'Grid Size = '+DEFAULT_GRID_ROWS+'x'+DEFAULT_GRID_ROWS;
function updateSliderValue(){
    switch (Number(gridSizeSlider.value)){
        case 1:
            sliderValue.textContent = 'Grid Size = 10x10';
            redrawGrid(10);
            break;
        case 2:
            sliderValue.textContent = 'Grid Size = 15x15';
            redrawGrid(15);
            break;
        case 3:
            sliderValue.textContent = 'Grid Size = 20x20';
            redrawGrid(20);
            break;
        case 4:
            sliderValue.textContent = 'Grid Size = 30x30';
            redrawGrid(30);
            break;
        case 5:
            sliderValue.textContent = 'Grid Size = 50x50';
            redrawGrid(50);
            break;
    }
}
gridSizeSlider.addEventListener('change', updateSliderValue);


//Coloring
  
function changeColor(e){
    if (mouseIsDown == true && colorChoice == 'random'){
        console.log(Math.floor(Math.random()*16777215).toString(16))
        e.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
    else if (mouseIsDown == true){
        e.target.style.backgroundColor = colorChoice;
    }
}
function changeColorClick(e){
        e.target.style.backgroundColor = colorChoice;
}
