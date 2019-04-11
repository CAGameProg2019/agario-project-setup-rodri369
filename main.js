let canvas = document.getElementById('main');
let c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player;
let mpos;
let velVetor = new Vector(0,0_;
)
let foods = [];
let colors = [
    'blue',
    'orange',
    'red',
    'green',
    'purple',
    'teal',
];

function calcVel(){
    velVector.x = (mpos.x-player.x)/10;
    velVector.y = (mpos.y-player.y)/10;
}

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
    calcVel();
    player.addVector(velVector);
    player.draw(c);
    requestAnimationFrame(update);
}

window.addEventListener('load', function(event) {
    init();

window.addEventListener('mousemove', function(event){
    mpos.x = event.clientX - canvas.offsetLeft;
    mpos.y = event.clientY - canvas.offsetTop;
})
});
