class Food extends Vector{

    constructor(x, y, radius, color) {
        super(x, y);
        this.radius = radius;
        this.color = color;
    }

    draw(c){
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2, false);
        c.closePath();
        c.fill();
    }

    intersects(food) {
        let distance = this.dist(food);
        if(distance <= this.radius + food.radius){
            return true;
        }
        return false;
    }


    getMass(){
        return Math.PI * this.radius * this.radius;
    }

    setMass(newmass) {
        this.radius = Math.sqrt(newmass/ Math.PI);
    }

    addMass(m){
        let mass = this.getMass() + m;
        this.radius = Math.sqrt(mass/ Math.PI);
    }

}
Object.assign(Food, Vector);
