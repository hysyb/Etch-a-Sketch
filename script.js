const container = document.querySelector('.grid');
console.log(container);

for (i=0; i<380; i++){
const newDiv = document.createElement('div');
newDiv.classList.add('glow');
//newDiv.addEventListener('mouseDown', func)
container.appendChild(newDiv);
}
const pixels = document.querySelectorAll('.glow');


container.addEventListener('dragstart', (e) => {
  e.preventDefault()
})
container.addEventListener('drop', (e) => {
  e.preventDefault()
})

//document.querySelectorAll('.glow').forEach(item => {
//    item.addEventListener('mouseenter', event => {
//    this.css("backgroundColor", "black")    }
//)})
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

for (i=0;i<pixels.length;i++){
    pixels[i].addEventListener('mouseover', changeColor)
    }
    for (i=0;i<pixels.length;i++){
        pixels[i].addEventListener('click', changeColor)
        }    
function changeColor(e){
    if (mouseIsDown == true){
        e.target.style.backgroundColor = 'black'
    }
}