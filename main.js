let canvas = document.getElementById('main');
let c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const FOOD_COUNT = 100;
const SLOW_COUNT = 10;
const SLOW_AMT = 1;

let player;
let mpos;
let velVector = new Vector(0,0);
let foods = [];
let slows = [];
let colors = [
    'blue',
    'orange',
    'red',
    'green',
    'purple',
    'teal',
];

let strokeColors = [
    'darkBlue',
    'darkOrange',
    'darkRed',
    'darkGreen',
    'darkPurple',
    'darkTeal',
];

// function calcVel(){
//     velVector.x = (mpos.x-player.x)/10;
//     velVector.y = (mpos.y-player.y)/10;
// }

function generateFood(){
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let color = randomColor();
        foods.push(new Food(x,y,20, color));
}

function generateSlow() {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    slows.push(new Slow(x,y,40));
}

function randomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}


function init() {
    mpos = new Vector(canvas.width/2, canvas.height/2);
    let name = prompt("enter your name");
    let color = randomColor();
    let stroke = strokeColors[colors.indexOf(color)];
    player = new Player(canvas.width/2, canvas.height/2,25, color, stroke, name, 7);
    for(let i = 0;i<100;i++){
        generateFood();
    }

    for (let i = 0; i < SLOW_COUNT; i++)
        generateSlow();

    update();
}

function update() {
    c.clearRect(0,0,canvas.width, canvas.height);
    player.update(mpos);

    for(let i=0;i<foods.length;i++){
        let eaten = player.intersects(foods[i]);
        if (!eaten){
            foods[i].draw(c);
        }else{
            player.addMass(foods[i].getMass());
            foods.splice(i,1);
            i--;
        }
    }

    while(foods.length<FOOD_COUNT){
            generateFood();
    }

    for (let i = 0; i < slows.length; i++) {
        let isTouching = player.intersects(slows[i]);

        if (!isTouching) {
            slows[i].draw(c)
        } else {
            player.decrSpeed(SLOW_AMT);
            slows.splice(i, 1);
            i--;
        }
    }

    while(slows.length<SLOW_COUNT){
            generateSlow();
    }

    player.draw(c);
    requestAnimationFrame(update);

}

window.addEventListener('load', function(event) {
    init();
});

window.addEventListener('mousemove', function(event){
    mpos.x = event.clientX - canvas.offsetLeft;
    mpos.y = event.clientY - canvas.offsetTop;
})
