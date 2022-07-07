const container = document.querySelector('.container');
console.log(container);

for (i=0; i<256; i++){
const newDiv = document.createElement('div');
newDiv.classList.add('glow');
container.appendChild(newDiv);
}