let canvas = document.getElementById('main');
let c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let foods = [];
let colors = [
    'blue',
    'orange',
    'red',
    'green',
    'purple',
    'teal',
];

function randomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
function init() {
    for(i=0; i<100;i++){
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let color = randomColor();
        foods.push(new Food(x,y,20, color));
    }
    update();
}

function update() {
    c.clearRect(0,0,canvas.width/2, canvas.height/2);
    for(i=0;i<100;i++){
        foods[i].draw(c);
    }
    requestAnimationFrame(update);
}

window.addEventListener('load', function(event) {
    init();
});
