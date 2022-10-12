class circle {
    constructor(PI, radius){
        this.PI = PI;
        this.radius = radius;
    }
    getarea = function() { return this.radius * this.radius * this.PI}
}

const cir = new circle(3.1415, 10);

console.log(cir.getarea());