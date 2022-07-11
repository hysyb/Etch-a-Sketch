const container = document.querySelector('.grid');
console.log(container);

for (i=0; i<2500; i++){
const newDiv = document.createElement('div');
newDiv.classList.add('glow');
//newDiv.addEventListener('mouseDown', func)
container.appendChild(newDiv);
}

const pixels = document.querySelectorAll('.glow');

//document.querySelectorAll('.glow').forEach(item => {
//    item.addEventListener('mouseenter', event => {
//    this.css("backgroundColor", "black")    }
//)})
for (i=0;i<pixels.length;i++){
    pixels[i].addEventListener('mouseenter', event => {
       console.log(this);
       console.log(typeof(this));
       event.target.setAttribute('class','black');
        // this.classList.add('black');
    })
}